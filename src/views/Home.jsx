import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { SocialAccounts } from '../components/home/SocialAccounts';
import { Jumbotron } from '../components/home/Jumbotron';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: 'flex'
  }
}));
export const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.homeContainer}>
      <SocialAccounts />
      <Grid item={true} xs={2} />
      <Grid item={true} xs={8}>
        <Jumbotron />
      </Grid>
      <Grid item={true} xs={2} />
    </Container>
  );
};
