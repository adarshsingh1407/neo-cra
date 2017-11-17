'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.githubApi = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _config = require('../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getApiInstance = function getApiInstance(baseUrl) {
  var config = {
    baseURL: baseUrl,
    timeout: 5000,
    paramsSerializer: function paramsSerializer(queryParams) {
      return _queryString2.default.stringify(queryParams);
    }
  };
  var axiosInstance = _axios2.default.create(config);
  // Req Intercept
  axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.info('config:', config);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  // Response interceptor
  axiosInstance.interceptors.response.use(function (response) {
    // Do something with response data
    // if (RESPONSE_CODE.AUTH_FAILED === result.data.status) {
    //   // Logic to redirect to login screen and remove cookies and userData
    //   // based on internal status of your API
    //   console.log('AUTH_FAILED');
    // }
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  return axiosInstance;
};

var githubApi = getApiInstance(_config.ENV.BASE_URL);

exports.githubApi = githubApi;