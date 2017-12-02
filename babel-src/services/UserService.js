'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserDetails = undefined;

var _ApiProvider = require('../components/utils/ApiProvider');

var _config = require('../config');

var _messages = require('../messages');

var getUserDetails = function getUserDetails(apiContext) {
  console.log('apiContext', apiContext);
  var username = apiContext.pathParams.username;

  return _ApiProvider.githubApi.request({
    url: _config.ENV.GET_USER_DETAILS + '/' + username,
    method: 'GET'
  }).then(function (result) {
    return result.data;
  }).catch(function (err) {
    console.error(err);
    return {
      msg: _messages.MSG.SWG
    };
  });
};

exports.getUserDetails = getUserDetails;