import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { Jumbotron } from '../components/home/Jumbotron';
import { TeamMembers } from '../components/home/TeamMembers';

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
      <Grid item={true} xs={1} md={2} />
      <Grid item={true} xs={10} md={8}>
        <Jumbotron />
      </Grid>
      <Grid item={true} xs={1} md={2} />
    </div>
  );
};
