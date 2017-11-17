'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiContext = undefined;

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _CookiesProvider = require('./CookiesProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getApiContext = function getApiContext(props) {
  var staticContext = props.staticContext;

  var apiContext = {
    queryParams: {},
    accesstoken: '',
    pathParams: props.match.params,
    isServer: staticContext !== undefined
  };
  if (apiContext.isServer) {
    // On Server
    // queryParams are in staticContext
    apiContext.queryParams = staticContext.req.query;
    //And accesstoken in request header
    var headerCookies = _queryString2.default.parse(staticContext.req.headers.cookie);
    apiContext.accesstoken = headerCookies.accesstoken;
  } else {
    // On Browser
    // queryParams are received as search in location object provided by react-router
    apiContext.queryParams = _queryString2.default.parse(props.location.search);
    // And accesstoken is retrieved from cookie
    apiContext.accesstoken = _CookiesProvider.cookies.get('accesstoken');
  }
  return Object.assign({}, apiContext, { isBrowser: !apiContext.isServer });
};

exports.getApiContext = getApiContext;