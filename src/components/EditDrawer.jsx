import React, { useCallback } from 'react';
import { Drawer } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/ui';

const EditDrawer = () => {
  const dispatch = useDispatch();
  const selectedNode = useSelector(state => state.ui.selectedNode);
  const resetSelected = useCallback(() => dispatch(actions.nodeSelected('')), [
    dispatch,
  ]);
  return (
    <Drawer anchor="left" open={selectedNode !== ''} onClose={resetSelected}>
      <div
        style={{
          width: '500px',
        }}
      >
        {selectedNode}
      </div>
    </Drawer>
  );
};

export default EditDrawer;
