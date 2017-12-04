'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    return require("./components/presentational/AboutUs");
  });
});
var AsyncMain = (0, _AsyncComponent2.default)(function () {
  return Promise.resolve().then(function () {
    return require("./components/Main");
  });
});
var AsyncProtected = (0, _AsyncComponent2.default)(function () {
  return Promise.resolve().then(function () {
    return require("./components/Protected");
  });
});
var AsyncFormPage = (0, _AsyncComponent2.default)(function () {
  return Promise.resolve().then(function () {
    return require("./components/FormPage");
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