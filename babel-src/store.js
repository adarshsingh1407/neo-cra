'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Middlewares for store
  var middlewares = [];

  if (_constants.CONST.STAGING === process.env.REACT_APP_ENV) {
    var _require = require('redux-logger'),
        logger = _require.logger;

    middlewares.push(logger);
  }

  var enhancers = [_redux.applyMiddleware.apply(undefined, middlewares)];

  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

  // Extensions
  //store.runSaga = sagaMiddleware.run
  store.asyncReducers = {}; // Async reducer registry

  return store;
}