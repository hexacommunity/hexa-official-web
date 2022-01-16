import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { SOCIAL_MEDIA_COLORS } from "../../styles/colors";
import hexa from "../../constants/hexacommunity.json";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  socialAccountsBar: {
    backgroundColor: theme.palette.common.black,
    minHeight: "60px",
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
  },
  socialLinkItem: {
    margin: "0 32px",
  },
  icon: {
    color: theme.palette.common.white,
  },
  github: {
    "&:hover path": {
      color: SOCIAL_MEDIA_COLORS.github,
    },
  },
  twitter: {
    "&:hover path": {
      color: SOCIAL_MEDIA_COLORS.twitter,
    },
  },
  instagram: {
    "&:hover path": {
      color: SOCIAL_MEDIA_COLORS.instagram,
    },
  },
}));

export const SocialAccountsBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.socialAccountsBar}>
        {renderSocialMediaIcons({ classes })}
      </Toolbar>
    </AppBar>
  );
};

const renderSocialMediaIcons = ({ classes }) => {
  const icons = [faGithubSquare, faTwitter, faInstagram];
  const links = hexa.socialMediaLinks;

  let indents = [];
  for (let i = 0; i < links.length; i++) {
    indents.push(
      <li className={classes.socialLinkItem} key={i}>
        <a
          href={links[i].url}
          rel="noopener noreferrer"
          target="_blank"
          className={classes[links[i].name]}
        >
          <FontAwesomeIcon className={classes.icon} icon={icons[i]} size="2x" />
        </a>
      </li>
    );
  }
  return indents;
};
