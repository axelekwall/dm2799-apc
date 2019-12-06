import React from 'react';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { actions } from '../store/ui';

const useStyles = makeStyles(() => ({
  fab: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  },
}));

const AddButton = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClick = e => {
    e.preventDefault();
    dispatch(actions.addTask());
  };
  return (
    <Fab
      className={classes.fab}
      color="primary"
      onClick={handleClick}
      aria-label="add"
    >
      <Add />
    </Fab>
  );
};

export default AddButton;
