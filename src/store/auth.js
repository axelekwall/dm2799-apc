import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialized: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    success: (state, { payload }) => {
      state.user = payload
    },
    reset: () => initialState,
    initialized: state => {
      state.initialized = true
    },
  },
})

export const { actions } = authSlice

export default authSlice.reducer
