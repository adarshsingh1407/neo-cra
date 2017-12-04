'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _reactIntl = require('react-intl');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

require('./index.css');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _localeMsgs = require('./localeMsgs');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

var _fr = require('react-intl/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import registerServiceWorker from './registerServiceWorker';

(0, _reactIntl.addLocaleData)([].concat(_toConsumableArray(_en2.default), _toConsumableArray(_fr2.default)));

var initialState = {};

if (window.DATA && window.DATA !== '{{__SERVER_DATA__}}') {
  // Let the reducers handle initial state
  window.USE_SERVER_DATA = true;
  initialState = JSON.parse(window.atob(window.DATA));
}

var store = (0, _store2.default)(initialState);

var locale = (0, _localeMsgs.getLocale)();

_reactDom2.default.hydrate(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactIntl.IntlProvider,
    { locale: locale, messages: (0, _localeMsgs.getLocaleMsgs)(locale) },
    _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(_App2.default, null)
    )
  )
), document.getElementById('root'));
// registerServiceWorker();