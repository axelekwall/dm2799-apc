import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Task from './Task';
import useNodes from '../hooks/useNodes';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
  },
}));

const TaskList = ({ title, taskState }) => {
  const classes = useStyles();
  const tasks = useNodes({ type: 'task', state: taskState });
  return (
    <Paper className={classes.paper}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        {tasks.map(task => (
          <Grid key={task.id} item>
            <Task data={task} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TaskList;
