import React from "react";
import { Link, Button, makeStyles } from "@material-ui/core/";
import home from "../../constants/home.json";

const useStyles = makeStyles((theme) => ({
  link: {
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
  joinButton: {
    color: theme.palette.common.black,
    marginTop: "4vh",
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
      <Button className={classes.joinButton} variant="outlined" size="large">
        Katıl
      </Button>
    </Link>
  );
};
