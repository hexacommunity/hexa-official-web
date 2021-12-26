import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';
import { isMobile } from 'react-device-detect';
import { JoinFormButton } from './JoinFormButton';
import about from '../../constants/about.json';
import hexaLogo from '../../styles/images/logo_black.png';

const useStyles = makeStyles((theme) => ({
  jumbotronContainer: {
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bannerImage: {
    width: '400px'
  },
  mobileBannerImage: {
    width: '500px'
  },
  intro: {
    marginTop: '4vh',
    textAlign: 'center'
  },
  mobileIntro: {
    marginTop: '6vh',
    textAlign: 'center',
    fontSize: '36px'
  }
}));

export const Jumbotron = () => {
  const classes = useStyles();
  let bannerCss = isMobile ? classes.mobileBannerImage : classes.bannerImage;
  let introCss = isMobile ? classes.mobileIntro : classes.intro;
  return (
    <Grid className={classes.jumbotronContainer} container spacing={0} direction="column">
      <img src={hexaLogo} alt="hexa-official-icon" className={bannerCss} />
      <Typography variant="h6" className={introCss}>
        {about.intro}
      </Typography>
      <JoinFormButton />
    </Grid>
  );
};
