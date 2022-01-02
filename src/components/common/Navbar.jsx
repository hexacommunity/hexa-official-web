import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, AppBar, Toolbar } from '@material-ui/core';
import { COLORS } from '../../styles/variables/colors';
import { Logo } from './Logo';

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    background: COLORS.navBar,
    minHeight: '60px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '96px'
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navLink: {
    marginLeft: '1.5vw',
    marginRight: '1.5vw',
    cursor: 'pointer',
    textAlign: 'center',
    color: '#fff',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  }
}));

export const Navbar = () => {
  const classes = useStyles();
  const links = [
    {
      component: (
        <Link className={classes.navLink} to={'/team'}>
          Kurucular
        </Link>
      )
    }
  ];

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.navbarContainer}>
        <Logo />
        {renderNavLinks(classes, links)}
      </Toolbar>
    </AppBar>
  );
};

const renderNavLinks = (classes, links) => {
  return <div className={classes.navMenu}>{links.map((link) => link.component)}</div>;
};
