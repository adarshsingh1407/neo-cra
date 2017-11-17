import React from 'react'
import {renderToString, renderToStaticMarkup} from 'react-dom/server'
import {Provider} from 'react-redux'
import {StaticRouter} from 'react-router-dom'
import {IntlProvider, addLocaleData} from 'react-intl';
import App from './App'

import {getLocale, getLocaleMsgs} from './localeMsgs'
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/fr';

addLocaleData([...en, ...ru]);

export function render(req, store, context) {
  let locale = getLocale(req);
  return renderToString(<Provider store={store}>
    <IntlProvider locale={locale} messages={getLocaleMsgs(locale)}>
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    </IntlProvider>
  </Provider>)
}
