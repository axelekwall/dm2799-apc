import { createSlice } from '@reduxjs/toolkit';
import nodes from '../mockData';

const initialState = {
  nodes,
  focusNode: '',
  history: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setFocusNode: (state, { payload }) => {
      state.focusNode = payload;
    },
  },
});

export const { actions } = dataSlice;

export default dataSlice.reducer;
