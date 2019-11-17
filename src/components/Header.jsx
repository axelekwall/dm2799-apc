import React from 'react';
import { AppBar, Toolbar, Button, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  accountCircle: {
    marginRight: theme.spacing(2),
  },
}));

const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Icon className={classes.accountCircle} color="inherit">
          <AccountCircle />
        </Icon>
        <Button onClick={() => {}} color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
