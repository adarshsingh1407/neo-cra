'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESPONSE_CODE = exports.ENV = undefined;

var _constants = require('./constants');

var STAG_ENV = {
  BASE_URL: 'https://api.github.com'
};

var PROD_ENV = {
  BASE_URL: 'https://api.github.com'
};

var COMMON = {
  GET_USER_DETAILS: 'users'
};

var ENV = {};

switch (process.env.REACT_APP_ENV) {
  case _constants.CONST.PRODUCTION:
    exports.ENV = ENV = Object.assign({}, PROD_ENV, COMMON);
    console.log('Running in PROD_ENV');
    break;
  default:
    exports.ENV = ENV = Object.assign({}, STAG_ENV, COMMON);
    console.log('Running in STAG_ENV');
}

var RESPONSE_CODE = {
  AUTH_FAILED: 4000
};

exports.ENV = ENV;
exports.RESPONSE_CODE = RESPONSE_CODE;