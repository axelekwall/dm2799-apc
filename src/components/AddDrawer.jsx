import React, { useCallback } from 'react';
import { Drawer } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { actions as uiActions } from '../store/ui';
import { actions as dataActions } from '../store/data';
import { makeStyles } from '@material-ui/core/styles';
import TaskForm from './TaskForm';
import { createNode } from '../utils/nodeHelpers';

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

const AddDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(state => state.ui.addTask);
  const toggleDrawer = useCallback(() => dispatch(uiActions.addTask()), [
    dispatch,
  ]);
  const addNode = useCallback(
    payload => {
      dispatch(dataActions.newNodes({ [payload.id]: createNode(payload) }));
    },
    [dispatch]
  );
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <div className={classes.wrapper}>
        <TaskForm action={addNode} />
      </div>
    </Drawer>
  );
};

export default AddDrawer;
