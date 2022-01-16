import React from "react";
import { Link, Button, makeStyles } from "@material-ui/core/";
import { CustomButton } from "../common/CustomButton";
import home from "../../constants/home.json";

const useStyles = makeStyles((theme) => ({
  link: {
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
  joinButton: {
    marginTop: "4.5vh",
    fontSize: "16px",
    letterSpacing: "2px",
  },
}));

export const JoinFormButton = () => {
  const classes = useStyles();
  return (
    <Link
      className={classes.link}
      href={home.joinCommunityURL}
      rel="noopener noreferrer"
      target="_blank"
    >
      <CustomButton className={classes.joinButton}>Katıl</CustomButton>
    </Link>
  );
};
