import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {IntlProvider, addLocaleData} from 'react-intl';
import configureStore from './store'
import './index.css';
import App from './App';
import {getLocaleMsgs, getLocale} from './localeMsgs'
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/fr';
// import registerServiceWorker from './registerServiceWorker';

addLocaleData([...en, ...ru]);

let initialState = {};

if (window.DATA && window.DATA !== '{{__SERVER_DATA__}}') {
  // Let the reducers handle initial state
  window.USE_SERVER_DATA = true;
  initialState = JSON.parse(window.atob(window.DATA));
}

const store = configureStore(initialState)

let locale = getLocale();

ReactDOM.hydrate(<Provider store={store}>
  <IntlProvider locale={locale} messages={getLocaleMsgs(locale)}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </IntlProvider>
</Provider>, document.getElementById('root'));
// registerServiceWorker();
