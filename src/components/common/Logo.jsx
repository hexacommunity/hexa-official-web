import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import logoImage from '../../styles/images/logo_white.png';

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: 'auto'
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    color: '#000',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  }
}));

export const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      {isMobile ? (
        <Link className={classes.logoLink} to="/">
          <img src={logoImage} alt="logo" height="64px" />
        </Link>
      ) : (
        <Link className={classes.logoLink} to="/">
          <img src={logoImage} alt="logo" height="36px" />
        </Link>
      )}
    </div>
  );
};
