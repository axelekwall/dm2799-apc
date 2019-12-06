import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nodes: {},
  history: [],
  initialized: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    newNodes: (state, { payload }) => {
      state.nodes = Object.assign(state.nodes, payload);
    },
    initialized: state => {
      state.initialized = true;
    },
    nodeDeleted: (state, { payload }) => {
      delete state.nodes[payload];
    },
    nodeUpdated: (state, { payload }) => {
      if (state.nodes[payload.id].type === 'task') {
        state.nodes[payload.id] = Object.assign(
          state.nodes[payload.id],
          payload
        );
      }
    },
  },
});

export const { actions } = dataSlice;

export default dataSlice.reducer;
