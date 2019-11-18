import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useFocusNode from '../hooks/useFocus';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Task = ({ data }) => {
  const { focusNode, setFocusNode } = useFocusNode();
  const classes = useStyles();
  const { title, desc } = data;
  return (
    <Paper className={classes.paper} {...setFocusNode(data.id)}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="caption">{desc}</Typography>
    </Paper>
  );
};

export default Task;
