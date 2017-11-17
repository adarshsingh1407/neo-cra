'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_USER = 'USER/SET';

var setUser = function setUser(payload) {
  return {
    type: SET_USER,
    payload: payload
  };
};

exports.SET_USER = SET_USER;
exports.setUser = setUser;