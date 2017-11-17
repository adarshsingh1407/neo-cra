'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocale = exports.getLocaleMsgs = undefined;

var _enUS = require('./locales/enUS');

var _enUS2 = _interopRequireDefault(_enUS);

var _enGB = require('./locales/enGB');

var _enGB2 = _interopRequireDefault(_enGB);

var _ruRU = require('./locales/ruRU');

var _ruRU2 = _interopRequireDefault(_ruRU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultLocale = 'en-US';

var getLocaleMsgs = function getLocaleMsgs(locale) {
  switch (locale) {
    case 'en-US':
      return _enUS2.default;
    case 'en-GB':
      return _enGB2.default;
    case 'ru-RU':
      return _ruRU2.default;
    default:
      return _enUS2.default;
  }
};

var getLocale = function getLocale(serverRequest) {
  if (serverRequest) {
    if (serverRequest.headers['accept-language']) {
      var acceptedLang = serverRequest.headers['accept-language'];
      return acceptedLang.substring(0, acceptedLang.indexOf(','));
    } else {
      return defaultLocale;
    }
  } else {
    if (navigator && navigator.languages && navigator.languages[0]) {
      return navigator.languages[0];
    } else if (navigator.language) {
      return navigator.language;
    } else if (navigator.userLanguage) {
      return navigator.userLanguage;
    } else {
      return defaultLocale;
    }
  }
};

exports.getLocaleMsgs = getLocaleMsgs;
exports.getLocale = getLocale;