import auth from './auth';
import data from './data';
import ui from './ui';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  auth,
  data,
  ui,
});

const store = configureStore({ reducer });

export default store;
