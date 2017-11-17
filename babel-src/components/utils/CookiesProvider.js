'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cookies = undefined;

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookies = new _universalCookie2.default();

exports.cookies = cookies;