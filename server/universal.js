const path = require('path')
const fs = require('fs')
const {renderToString} = require('react-dom/server');
const {Helmet} = require('react-helmet');
const {render} = require('../babel-src/serverRender')
const {default: configureStore} = require('../babel-src/store')
const queryString = require('query-string')

module.exports = function universalLoader(req, res) {
  const filePath = path.resolve(path.join('build', 'index.html'))

  fs.readFile(filePath, 'utf8', (err, htmlData)=>{
    if (err) {
      console.error('readFile:', err)
      return res.status(404).end()
    }

    serverRender(req, res, htmlData).catch(err => {
      console.error('serverRender:', err)
      return res.status(500).json({message: 'Render Error'})
    })

  });
}

async function serverRender(req, res, htmlData) {
  const context = {
    data: {},
    head: [],
    req
  }

  const store = configureStore()
  // 1st-Render
  render(req, store, context)

  // handle our data fetching
  const keys = Object.keys(context.data)

  const promises = keys.map(k => context.data[k])

  const resolved = await Promise.all(promises)

  resolved.forEach((r, i) => context.data[keys[i]] = r)

  // 2nd-Render
  const markup = render(req, store, context)

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    // 301: Moved Permanently (Gets saved in disk cache by browsers)
    // 302: Temporary Redirect
    res.redirect(302, context.url)
  } else {
    const markup = render(req, store, context);
    const windowData = new Buffer(JSON.stringify(store.getState())).toString('base64');
    const helmet = Helmet.renderStatic();
    const titleComponent = renderToString(helmet.title.toComponent());
    const metaComponent = renderToString(helmet.meta.toComponent());
    const linkComponent = renderToString(helmet.link.toComponent());
    const RenderedApp = htmlData.replace('<div id="ssr"></div>', markup)
      .replace('<title>NEO-CRA</title>', titleComponent)
      .replace('<meta name="title" content="Dauble"/>', metaComponent)
      .replace('<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>', linkComponent)
      .replace('{{__SERVER_DATA__}}', windowData)
    res.send(RenderedApp)
  }
}
