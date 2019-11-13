import React from 'react'
import Header from '../components/Header'
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
}))

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header title="Dashboard" />
      <main className={classes.main}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>Main Visualization</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                Visualization of progress over time
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>To Do</Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>In Progress</Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>Done</Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default Home
