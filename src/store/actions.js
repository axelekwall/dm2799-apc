export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const SET_AUTH_INITIALIZED = 'SET_AUTH_INITIALIZED'
export const RESET_STATE = 'RESET_STATE'

export const authSuccess = payload => ({
  type: AUTH_SUCCESS,
  payload,
})

export const setAuthInitialized = () => ({
  type: SET_AUTH_INITIALIZED,
})

export const resetState = () => ({
  type: RESET_STATE,
})
