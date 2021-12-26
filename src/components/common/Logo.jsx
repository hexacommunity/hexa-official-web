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

  let width = window.innerWidth;
  let logoHeight = '48px';

  if (width < 768) {
    logoHeight = '72px';
  }
  return (
    <div className={classes.logoContainer}>
      <Link className={classes.logoLink} to="/">
        <img src={logoImage} alt="logo" height={logoHeight} />
      </Link>
    </div>
  );
};
