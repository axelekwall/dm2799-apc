import { AUTH_SUCCESS, SET_AUTH_INITIALIZED, RESET_STATE } from './types'

const initialState = {
  authInitialized: false,
  user: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_INITIALIZED:
      return {
        ...state,
        authInitialized: true,
      }
    case RESET_STATE:
      return {
        ...initialState,
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return { ...state }
  }
}

export default authReducer
