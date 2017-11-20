'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/components/Protected.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ApiContextProvider = require('./utils/ApiContextProvider');

var _AsyncComponent = require('./AsyncComponent');

var _AsyncComponent2 = _interopRequireDefault(_AsyncComponent);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Protected = function (_Component) {
  _inherits(Protected, _Component);

  function Protected() {
    _classCallCheck(this, Protected);

    return _possibleConstructorReturn(this, (Protected.__proto__ || Object.getPrototypeOf(Protected)).apply(this, arguments));
  }

  _createClass(Protected, [{
    key: 'render',
    value: function render() {
      var _getApiContext = (0, _ApiContextProvider.getApiContext)(this.props),
          accesstoken = _getApiContext.accesstoken;

      if (accesstoken) {
        var AsyncPrivateRoute = (0, _AsyncComponent2.default)(function () {
          return Promise.resolve().then(function () {
            return require("./presentational/PrivateRoute");
          });
        });
        return _react2.default.createElement(AsyncPrivateRoute, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        });
      } else {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: {
            pathname: '/aboutus'
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        });
      }
    }
  }]);

  return Protected;
}(_react.Component);

exports.default = Protected;