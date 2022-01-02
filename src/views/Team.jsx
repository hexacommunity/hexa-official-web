import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { TeamMembers } from '../components/home/TeamMembers';

const useStyles = makeStyles((theme) => ({
  teamContainer: {
    display: 'flex',
    width: '100vw'
  }
}));

export const Team = () => {
  const classes = useStyles();

  return (
    <div className={classes.teamContainer}>
      <Grid item={true} xs={1} md={2} />
      <Grid item={true} xs={10} md={8}>
        <TeamMembers />
      </Grid>
      <Grid item={true} xs={1} md={2} />
    </div>
  );
};
