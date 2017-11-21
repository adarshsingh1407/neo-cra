'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/serverRender.js';
exports.render = render;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _reactIntl = require('react-intl');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _localeMsgs = require('./localeMsgs');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

var _fr = require('react-intl/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _reactIntl.addLocaleData)([].concat(_toConsumableArray(_en2.default), _toConsumableArray(_fr2.default)));

function render(req, store, context) {
  var locale = (0, _localeMsgs.getLocale)(req);
  var modules = [];
  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactLoadable2.default.Capture,
    { report: function report(moduleName) {
        return modules.push(moduleName);
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    },
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: store, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      _react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: locale, messages: (0, _localeMsgs.getLocaleMsgs)(locale), __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        _react2.default.createElement(
          _reactRouterDom.StaticRouter,
          { location: req.url, context: context, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(_App2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          })
        )
      )
    )
  ));
  console.log('modules:', modules);
  return html;
}