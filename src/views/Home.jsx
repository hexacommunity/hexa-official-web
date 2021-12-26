import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { SocialAccountsBar } from '../components/home/SocialAccountsBar';
import { Jumbotron } from '../components/home/Jumbotron';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: 'flex',
    width: '100vw'
  }
}));
export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <SocialAccountsBar />
      <Grid item={true} xs={1} md={2} />
      <Grid item={true} xs={10} md={8}>
        <Jumbotron />
      </Grid>
      <Grid item={true} xs={1} md={2} />
    </div>
  );
};
