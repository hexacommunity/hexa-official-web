import React from 'react';
import { makeStyles, Container, Grid, Typography } from '@material-ui/core';
import { TeamCard } from './TeamCard';
import team from '../../constants/team.json';
import baris_pp from '../../styles/images/baris_pp.jpeg';
import kerem_pp from '../../styles/images/kerem_pp.jpeg';

const useStyles = makeStyles((theme) => ({
  teamMembersContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '13vh'
  },
  teamMemberCardsPanel: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginBottom: '4vh'
  }
}));

export const TeamMembers = () => {
  const classes = useStyles();
  return (
    <Container className={classes.teamMembersContainer}>
      <Typography variant="h3" component="h3" className={classes.title}>
        Kurucular
      </Typography>
      <Grid container spacing={6} className={classes.teamMemberCardsPanel}>
        <Grid item xs={12} lg={4}>
          <TeamCard person={team[0]} imageSrc={baris_pp} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TeamCard person={team[1]} imageSrc={kerem_pp} />
        </Grid>
      </Grid>
    </Container>
  );
};
