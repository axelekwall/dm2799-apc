import auth from './auth'
import data from './data'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  auth,
  data,
})

const store = configureStore({ reducer })

export default store
