import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';
import { JoinFormButton } from './JoinFormButton';
import about from '../../constants/about.json';
import hexaLogo from '../../styles/images/logo_black.png';

const useStyles = makeStyles((theme) => ({
  bannerImage: {
    width: '400px',
    heigth: '00px'
  },
  intro: {
    marginTop: '4vh',
    textAlign: 'center'
  }
}));

export const Jumbotron = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}>
      <img src={hexaLogo} alt="hexa-official-icon" className={classes.bannerImage} />
      <Typography variant="h6" className={classes.intro}>
        {about.intro}
      </Typography>
      <JoinFormButton />
    </Grid>
  );
};
