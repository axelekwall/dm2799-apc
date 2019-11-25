import React from 'react';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import Visualization from '../components/Visualization';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SankeyChart from '../components/SankeyChart';
import EditDrawer from '../components/EditDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
  },
  main: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  taskListsWrapper: {
    marginTop: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title="Dashboard" />
      <EditDrawer />
      <main className={classes.main}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Visualization title="Main Visualization">
            <SankeyChart width={1000} height={400} />
          </Visualization>
          <Visualization title="Progress Visualization">
            <div>Test</div>
          </Visualization>
          <Grid className={classes.taskListsWrapper} container spacing={3}>
            <Grid item xs={12} md={4}>
              <TaskList title="Todo" taskState="todo" />
            </Grid>
            <Grid item xs={12} md={4}>
              <TaskList title="In Progress" taskState="inProgress" />
            </Grid>
            <Grid item xs={12} md={4}>
              <TaskList title="Done" taskState="done" />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Home;
