import React, { useCallback } from 'react';
import { Drawer } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { actions as uiActions } from '../store/ui';
import { actions as dataActions } from '../store/data';
import { makeStyles } from '@material-ui/core/styles';
import TaskForm from './TaskForm';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: theme.drawerWidth,
    padding: theme.spacing(2),
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const EditDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedNodeId = useSelector(state => state.ui.selectedNode);
  const resetSelected = useCallback(
    () => dispatch(uiActions.nodeSelected('')),
    [dispatch]
  );
  const updateNode = useCallback(
    payload => {
      dispatch(dataActions.nodeUpdated(payload));
    },
    [dispatch]
  );
  return (
    <Drawer anchor="left" open={selectedNodeId !== ''} onClose={resetSelected}>
      <div className={classes.wrapper}>
        <TaskForm taskId={selectedNodeId} action={updateNode}></TaskForm>
      </div>
    </Drawer>
  );
};

export default EditDrawer;
