import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useNodeInteraction from '../hooks/useNodeInteraction';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: ({ focus }) => (focus ? 'rgba(255,255,100)' : 'white'),
  },
}));

const Task = ({ data }) => {
  const { title, desc, id } = data;
  const { focusNode, nodeInteraction } = useNodeInteraction();
  const classes = useStyles({ focus: focusNode === id });
  return (
    <Paper className={classes.paper} {...nodeInteraction(id)}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="caption">{desc}</Typography>
    </Paper>
  );
};

export default Task;
