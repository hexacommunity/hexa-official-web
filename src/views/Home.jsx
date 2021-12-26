import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { SocialAccounts } from '../components/home/SocialAccounts';
import { Jumbotron } from '../components/home/Jumbotron';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: 'flex'
  },
  g1: {
    backgroundColor: 'green'
  },
  g2: {
    backgroundColor: 'red'
  },
  g3: {
    backgroundColor: 'blue'
  }
}));
export const Home = () => {
  const classes = useStyles();
  console.log();
  return (
    <Container className={classes.homeContainer}>
      <SocialAccounts />
      <Grid className={classes.g1} item={true} xs={1} md={2} />
      <Grid className={classes.g2} item={true} xs={10} md={8}>
        <Jumbotron />
      </Grid>
      <Grid className={classes.g3} item={true} xs={1} md={2} />
    </Container>
  );
};
