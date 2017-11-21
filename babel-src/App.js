'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = 'src/App.js';

// import asyncComponent from "./components/AsyncComponent";
// const AsyncAbout = asyncComponent(() => import("./components/presentational/AboutUs"));
// const AsyncMain = asyncComponent(() => import("./components/Main"));
// const AsyncProtected = asyncComponent(() => import("./components/Protected"));
// const AsyncFormPage = asyncComponent(() => import("./components/FormPage"));

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _CommonUtil = require('./components/utils/CommonUtil');

var _CookiesProvider = require('./components/utils/CookiesProvider');

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function Loading(props) {
  if (props.error) {
    return _react2.default.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: undefined
      },
      'Error!'
    );
  } else if (props.pastDelay) {
    return _react2.default.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      },
      'Loading...'
    );
  } else {
    return null;
  }
};

var LoadableAboutUs = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return require('./components/presentational/AboutUs');
    });
  },
  modules: ['./components/presentational/AboutUs'],
  webpack: function webpack() {
    return [require.resolveWeak('./components/presentational/AboutUs')];
  },
  loading: Loading,
  delay: 300 // 0.3 seconds
});

var LoadableMain = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return require('./components/Main');
    });
  },
  modules: ['./components/Main'],
  webpack: function webpack() {
    return [require.resolveWeak('./components/Main')];
  },
  loading: Loading,
  delay: 300 // 0.3 seconds
});

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
            lineNumber: 43
          },
          __self: this
        },
        _react2.default.createElement(
          _reactRouterDom.Switch,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:username', component: LoadableMain, __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/aboutus', component: LoadableAboutUs, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }),
          _react2.default.createElement(_reactRouterDom.Route, { component: LoadableMain, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.removeAccessToken, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          },
          'Fake Logout'
        ),
        _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/formPage', __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          },
          'Form Page'
        ),
        _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/protected', __source: {
              fileName: _jsxFileName,
              lineNumber: 62
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