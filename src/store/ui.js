import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  focusNode: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setFocusNode: (state, { payload }) => {
      state.focusNode = payload;
    },
  },
});

export const { actions } = uiSlice;

export default uiSlice.reducer;
