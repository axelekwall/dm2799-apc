import { AUTH_SUCCESS, SET_AUTH_INITIALIZED, RESET_STATE } from './types'

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
