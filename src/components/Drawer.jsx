import React, { useCallback } from 'react';
import { Drawer as MUIDrawer } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/ui';

const Drawer = () => {
  const dispatch = useDispatch();
  const { selectedNode } = useSelector(state => state.ui);
  const resetSelected = useCallback(
    () => dispatch(actions.setSelectedNode('')),
    [dispatch]
  );
  return (
    <MUIDrawer anchor="left" open={selectedNode !== ''} onClose={resetSelected}>
      <div
        style={{
          width: '500px',
        }}
      >
        {selectedNode}
      </div>
    </MUIDrawer>
  );
};

export default Drawer;
