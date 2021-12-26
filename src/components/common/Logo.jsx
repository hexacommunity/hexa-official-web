import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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
      <Link className={classes.logoLink} to="/">
        <img src={logoImage} alt="logo" height="48px" />
      </Link>
    </div>
  );
};
