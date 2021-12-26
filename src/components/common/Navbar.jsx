import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core/';
import { COLORS } from '../../styles/variables/colors';

import { Logo } from './Logo';

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    background: COLORS.navBar,
    minHeight: '10vh',
    [theme.breakpoints.down('sm')]: {
      minHeight: '15vh'
    }
  }
}));

export const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.navbarContainer}>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};
