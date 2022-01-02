import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
import { isMobile } from 'react-device-detect';
import { JoinFormButton } from './JoinFormButton';
import home from '../../constants/home.json';
import hexaLogo from '../../styles/images/logo_black.png';

const useStyles = makeStyles((theme) => ({
  jumbotronContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bannerImage: {
    width: '350px',
    [theme.breakpoints.down('sm')]: {
      width: '200px'
    }
  },
  intro: {
    marginTop: '4vh',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px'
    }
  },
  mobileIntro: {
    marginTop: '6vh',
    fontSize: '36px'
  }
}));

export const Jumbotron = () => {
  const classes = useStyles();
  let introCss = isMobile ? classes.mobileIntro : classes.intro;
  return (
    <div className={classes.jumbotronContainer}>
      <img src={hexaLogo} alt="hexa-official-icon" className={classes.bannerImage} />
      <Typography variant="h6" className={introCss}>
        {home.intro}
      </Typography>
      <JoinFormButton />
    </div>
  );
};
