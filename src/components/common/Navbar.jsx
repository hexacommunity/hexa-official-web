import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Toolbar } from "@material-ui/core";
import { COLORS } from "../../styles/variables/colors";
import { Logo } from "./navbar/Logo";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    backgroundColor: COLORS.navBar,
    minHeight: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLink: {
    marginLeft: "1.5vw",
    marginRight: "1.5vw",
    cursor: "pointer",
    textAlign: "center",
    color: "#fff",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  const links = [
    {
      path: "/team",
      isProtected: "false",
    },
  ];

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
        <Link key={key} className={classes.navLink} to={link.path}>
          Kurucular
        </Link>
      ))}
    </div>
  );
};
