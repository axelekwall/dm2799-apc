import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Task = ({ data }) => {
  const classes = useStyles();
  const { title, desc } = data;
  return (
    <Paper className={classes.paper}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="caption">{desc}</Typography>
    </Paper>
  );
};

export default Task;
