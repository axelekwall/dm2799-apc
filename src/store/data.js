import { createSlice } from '@reduxjs/toolkit';
import { nodes, links } from '../mockData';

const initialState = {
  nodes,
  links,
  history: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    success: (state, { payload }) => {
      state.user = payload;
    },
    reset: () => initialState,
    initialized: state => {
      state.initialized = true;
    },
  },
});

export const { actions } = dataSlice;

export default dataSlice.reducer;
