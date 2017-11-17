const SET_USER = 'USER/SET'

const setUser = (payload) => {
  return {
    type: SET_USER
  , payload
  }
}

export {SET_USER, setUser}
