'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = require('path');

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = require('babel-plugin-universal-import/importCss');

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = require('babel-plugin-universal-import/universalImport');

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _CommonUtil = require('./components/utils/CommonUtil');

var _CookiesProvider = require('./components/utils/CookiesProvider');

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

var _AsyncComponent = require('./components/AsyncComponent');

var _AsyncComponent2 = _interopRequireDefault(_AsyncComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsyncAbout = (0, _AsyncComponent2.default)(function () {
  return Promise.resolve().then(function () {
    return require('' + {
      id: './components/presentational/AboutUs',
      file: 'src/App.js',
      load: function load() {
        return Promise.all([Promise.resolve().then(function () {
          return require("./components/presentational/AboutUs");
        }), (0, _importCss3.default)('components/presentational/AboutUs', {})]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path3.default.join(__dirname, "./components/presentational/AboutUs");
      },
      resolve: function resolve() {
        return require.resolveWeak("./components/presentational/AboutUs");
      },
      chunkName: function chunkName() {
        return 'components/presentational/AboutUs';
      }
    });
  });
});
var AsyncMain = (0, _AsyncComponent2.default)(function () {
  return Promise.resolve().then(function () {
    return require('' + {
      id: './components/Main',
      file: 'src/App.js',
      load: function load() {
        return Promise.all([Promise.resolve().then(function () {
          return require("./components/Main");
        }), (0, _importCss3.default)('components/Main', {})]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path3.default.join(__dirname, "./components/Main");
      },
      resolve: function resolve() {
        return require.resolveWeak("./components/Main");
      },
      chunkName: function chunkName() {
        return 'components/Main';
      }
    });
  });
});
var AsyncProtected = (0, _AsyncComponent2.default)(function () {
  return Promise.resolve().then(function () {
    return require('' + {
      id: './components/Protected',
      file: 'src/App.js',
      load: function load() {
        return Promise.all([Promise.resolve().then(function () {
          return require("./components/Protected");
        }), (0, _importCss3.default)('components/Protected', {})]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path3.default.join(__dirname, "./components/Protected");
      },
      resolve: function resolve() {
        return require.resolveWeak("./components/Protected");
      },
      chunkName: function chunkName() {
        return 'components/Protected';
      }
    });
  });
});
var AsyncFormPage = (0, _AsyncComponent2.default)(function () {
  return Promise.resolve().then(function () {
    return require('' + {
      id: './components/FormPage',
      file: 'src/App.js',
      load: function load() {
        return Promise.all([Promise.resolve().then(function () {
          return require("./components/FormPage");
        }), (0, _importCss3.default)('components/FormPage', {})]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path3.default.join(__dirname, "./components/FormPage");
      },
      resolve: function resolve() {
        return require.resolveWeak("./components/FormPage");
      },
      chunkName: function chunkName() {
        return 'components/FormPage';
      }
    });
  });
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
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: AsyncMain }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/home', component: AsyncMain }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/aboutus', component: AsyncAbout }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/formPage', component: AsyncFormPage }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/protected', component: AsyncProtected }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:username', component: _Main2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { component: AsyncMain })
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.removeAccessToken },
          'Fake Logout'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/formPage' },
          'Form Page'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/protected' },
          'Protected Page'
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;