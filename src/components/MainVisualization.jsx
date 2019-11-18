import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SankeyChart from './SankeyChart';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
  },
}));

const MainVisualization = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h6">Main Visualization</Typography>
        </Grid>
        <Grid item>
          <SankeyChart width={800} height={500} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainVisualization;
