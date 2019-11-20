import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  focusNode: '',
  selectedNode: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setFocusNode: (state, { payload }) => {
      state.focusNode = payload;
    },
    setSelectedNode: (state, { payload }) => {
      state.selectedNode = payload;
    },
  },
});

export const { actions } = uiSlice;

export default uiSlice.reducer;
