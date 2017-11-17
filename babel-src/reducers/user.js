'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _user = require('../actions/user');

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _user.SET_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}