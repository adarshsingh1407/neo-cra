'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/components/FormPage.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _CommonUtil = require('./utils/CommonUtil');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormPage = function (_Component) {
  _inherits(FormPage, _Component);

  function FormPage() {
    _classCallCheck(this, FormPage);

    return _possibleConstructorReturn(this, (FormPage.__proto__ || Object.getPrototypeOf(FormPage)).apply(this, arguments));
  }

  _createClass(FormPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _CommonUtil.Aux,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            },
            __self: this
          },
          'Main'
        ),
        _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }),
        _react2.default.createElement(_Form2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        })
      );
    }
  }]);

  return FormPage;
}(_react.Component);

exports.default = FormPage;