import {SET_USER} from '../actions/user'

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
