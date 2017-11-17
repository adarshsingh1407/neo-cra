'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Protected = require('./components/Protected');

var _Protected2 = _interopRequireDefault(_Protected);

var _FormPage = require('./components/FormPage');

var _FormPage2 = _interopRequireDefault(_FormPage);

var _AboutUs = require('./components/presentational/AboutUs');

var _AboutUs2 = _interopRequireDefault(_AboutUs);

var _CommonUtil = require('./components/utils/CommonUtil');

var _CookiesProvider = require('./components/utils/CookiesProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'removeAccessToken',
    value: function removeAccessToken() {
      _CookiesProvider.cookies.remove('accesstoken');
      console.log('cookie removed');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _CommonUtil.Aux,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        _react2.default.createElement(
          _reactRouterDom.Switch,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Main2.default, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/home', component: _Main2.default, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/aboutus', component: _AboutUs2.default, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/formPage', component: _FormPage2.default, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/protected', component: _Protected2.default, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:username', component: _Main2.default, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _Main2.default, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.removeAccessToken, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          },
          'Fake Logout'
        ),
        _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/formPage', __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          },
          'Form Page'
        ),
        _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/protected', __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          },
          'Protected Page'
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;