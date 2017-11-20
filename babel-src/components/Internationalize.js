'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/components/Internationalize.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Internationalize = function (_Component) {
  _inherits(Internationalize, _Component);

  function Internationalize() {
    _classCallCheck(this, Internationalize);

    return _possibleConstructorReturn(this, (Internationalize.__proto__ || Object.getPrototypeOf(Internationalize)).apply(this, arguments));
  }

  _createClass(Internationalize, [{
    key: 'render',
    value: function render() {
      var name = this.props.user.name;

      return _react2.default.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        _react2.default.createElement(_reactIntl.FormattedMessage, {
          id: 'common.hi',
          defaultMessage: 'Hello {username}',
          values: { username: _react2.default.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                },
                __self: this
              },
              name
            ) },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        })
      );
    }
  }]);

  return Internationalize;
}(_react.Component);

exports.default = Internationalize;