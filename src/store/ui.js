import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  focusNode: '',
  selectedNode: '',
  addTask: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    nodeFocused: (state, { payload }) => {
      state.focusNode = payload;
    },
    nodeSelected: (state, { payload }) => {
      state.selectedNode = payload;
    },
    addTask: state => {
      state.addTask = !state.addTask;
    },
  },
});

export const { actions } = uiSlice;

export default uiSlice.reducer;
