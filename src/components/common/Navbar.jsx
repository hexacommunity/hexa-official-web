import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core/';
import { COLORS } from '../../styles/variables/colors';

import { Logo } from './Logo';

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    background: COLORS.navBar
  }
}));

export const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navbarContainer}>
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};
