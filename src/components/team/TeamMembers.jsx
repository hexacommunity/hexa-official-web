import React from "react";
import { makeStyles, Container, Grid, Typography } from "@material-ui/core";
import { TeamCard } from "./TeamCard";
import baris_pp from "../../styles/images/baris_pp.jpeg";
import kerem_pp from "../../styles/images/kerem_pp.jpg";
import team from "../../constants/kurucular.json";

const useStyles = makeStyles((theme) => ({
  teamMembersContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "13vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20vh",
      marginBottom: "15vh",
    },
  },
  teamMemberCardsPanel: {
    heigth: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: "4vh",
  },
}));

export const TeamMembers = () => {
  const classes = useStyles();
  return (
    <Container className={classes.teamMembersContainer}>
      <Typography variant="h3" className={classes.title}>
        Kurucular
      </Typography>
      <Grid container spacing={6} className={classes.teamMemberCardsPanel}>
        {renderMemberCards()}
      </Grid>
    </Container>
  );
};

export const renderMemberCards = () => {
  const photos_of_members = [baris_pp, kerem_pp];

  let indents = [];
  for (let i = 0; i < team.length; i++) {
    indents.push(
      <Grid item xs={12} md={6} lg={4} key={i}>
        <TeamCard member={team[i]} imageSrc={photos_of_members[i]} />
      </Grid>
    );
  }
  return indents;
};
