import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
  },
}));

const ProgressVisualization = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h6">Progress Visualization</Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Paper>
  );
};

export default ProgressVisualization;
