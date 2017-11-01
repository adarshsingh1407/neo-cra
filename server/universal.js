const path = require('path')
const fs = require('fs')
const {renderToString} = require('react-dom/server');
const {Helmet} = require('react-helmet');
const {render} = require('../babel-src/serverRender')

module.exports = function universalLoader(req, res) {
  const filePath = path.resolve(path.join('build', 'index.html'))

  fs.readFile(filePath, 'utf8', (err, htmlData)=>{
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }

    const markup = render(req, res);

    const helmet = Helmet.renderStatic();
    const titleComponent = renderToString(helmet.title.toComponent());
    const metaComponent = renderToString(helmet.meta.toComponent());
    const linkComponent = renderToString(helmet.link.toComponent());
    const RenderedApp = htmlData.replace('{{SSR}}', markup)
      .replace('<title>NEO-CRA</title>', titleComponent)
      .replace('<meta name="title" content="NEO-CRA"/>', metaComponent)
      .replace('<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>', linkComponent)
    res.send(RenderedApp)
  });
}
