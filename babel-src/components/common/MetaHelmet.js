'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/components/common/MetaHelmet.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _MetaHelper = require('../utils/MetaHelper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetaHelmet = function (_Component) {
  _inherits(MetaHelmet, _Component);

  function MetaHelmet() {
    _classCallCheck(this, MetaHelmet);

    return _possibleConstructorReturn(this, (MetaHelmet.__proto__ || Object.getPrototypeOf(MetaHelmet)).apply(this, arguments));
  }

  _createClass(MetaHelmet, [{
    key: 'render',
    value: function render() {
      var meta = (0, _MetaHelper.processMeta)(this.props);
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        },
        _react2.default.createElement('meta', { charset: 'utf-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }),
        _react2.default.createElement('meta', { name: 'theme-color', content: '#000000', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }),
        _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }),
        _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }),
        _react2.default.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }),
        _react2.default.createElement('meta', { name: 'title', content: meta.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }),
        _react2.default.createElement('meta', { name: 'description', content: 'Meta Description goes here', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }),
        ' ',
        _react2.default.createElement('link', { rel: 'shortcut icon', href: 'favicon.ico', type: 'image/x-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }),
        _react2.default.createElement('meta', { property: 'og:type', content: 'Website', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }),
        _react2.default.createElement('meta', { property: 'og:url', content: '%PUBLIC_URL%/', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }),
        _react2.default.createElement('meta', { property: 'og:title', content: meta.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }),
        _react2.default.createElement('meta', { property: 'og:description', content: 'Meta Description goes here', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }),
        _react2.default.createElement('meta', { property: 'og:image:secure_url', content: '%PUBLIC_URL%/assets/images/logo.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }),
        _react2.default.createElement('meta', { property: 'og:image', content: '%PUBLIC_URL%/assets/images/logo.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }),
        _react2.default.createElement('meta', { name: 'twitter:title', content: meta.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }),
        _react2.default.createElement('meta', { name: 'twitter:description', content: 'Meta Description goes here', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }),
        _react2.default.createElement('meta', { name: 'twitter:image:src', content: '%PUBLIC_URL%/assets/images/logo.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }),
        _react2.default.createElement('meta', { itemprop: 'name', content: meta.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }),
        _react2.default.createElement('meta', { itemprop: 'description', content: 'Meta Description goes here', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }),
        _react2.default.createElement('meta', { itemprop: 'image', content: '%PUBLIC_URL%/assets/images/logo.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }),
        _react2.default.createElement(
          'title',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          },
          meta.title
        )
      );
    }
  }]);

  return MetaHelmet;
}(_react.Component);

exports.default = MetaHelmet;