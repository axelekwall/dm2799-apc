import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nodes: [],
  history: [],
  initialized: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    newNodes: (state, { payload }) => {
      state.nodes = state.nodes.concat(payload);
    },
    initialized: state => {
      state.initialized = true;
    },
    nodeDeleted: (state, { payload }) => {
      state.nodes = state.nodes.filter(node => node.id === payload);
    },
    nodeUpdated: (state, { payload }) => {
      state.nodes.forEach(node => {
        if (node.id === payload.id && node.type === 'task') {
          node = Object.assign(node, payload);
        }
      });
    },
  },
});

export const { actions } = dataSlice;

export default dataSlice.reducer;
