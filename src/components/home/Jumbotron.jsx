import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import { JoinFormButton } from "./JoinFormButton";
import home from "../../constants/home.json";
import hexaLogo from "../../styles/images/logo_black.png";

const useStyles = makeStyles((theme) => ({
  jumbotronContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerImage: {
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
  },
  intro: {
    marginTop: "4vh",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
}));

export const Jumbotron = () => {
  const classes = useStyles();
  return (
    <div className={classes.jumbotronContainer}>
      <img
        src={hexaLogo}
        alt="hexa-official-icon"
        className={classes.bannerImage}
      />
      <Typography variant="h6" className={classes.intro}>
        {home.intro}
      </Typography>
      <JoinFormButton />
    </div>
  );
};
