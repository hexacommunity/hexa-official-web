import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Toolbar } from "@material-ui/core";
import { Logo } from "./navbar/Logo";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    backgroundColor: theme.palette.common.black,
    minHeight: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLink: {
    color: theme.palette.common.white,
    marginLeft: "1.5vw",
    marginRight: "1.5vw",
    cursor: "pointer",
    textAlign: "center",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
}));

export const Navbar = () => {
  const links = [
    {
      name: "Kurucular",
      path: "/kurucular",
      isProtected: "false",
    },
  ];

  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.navbarContainer}>
        <Logo />
        {renderNavLinks(classes, links)}
      </Toolbar>
    </AppBar>
  );
};

const renderNavLinks = (classes, links) => {
  return (
    <div className={classes.navMenu}>
      {links.map((link, key) => (
        <Link className={classes.navLink} to={link.path} key={key}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};
