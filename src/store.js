import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import {CONST} from './constants'

export default function configureStore(initialState = {}) {
  // Middlewares for store
  const middlewares = []

  if (CONST.STAGING === process.env.REACT_APP_ENV) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
  }

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    reducers
  , initialState
  , compose(...enhancers)
  )

  // Extensions
  //store.runSaga = sagaMiddleware.run
  store.asyncReducers = {} // Async reducer registry

  return store
}
