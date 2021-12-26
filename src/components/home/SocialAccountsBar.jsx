import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core/';
import { isMobile } from 'react-device-detect';
import { COLORS, SOCIAL_MEDIA_COLORS } from '../../styles/variables/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faTwitter,
  faInstagram,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import socialMedia from '../../constants/socialMediaAccounts.json';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  socialAccountsBar: {
    background: COLORS.navBar,
    minHeight: '10vh',
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    [theme.breakpoints.down('sm')]: {
      minHeight: '18vh'
    }
  },
  socialLinkItem: {
    transition: 'transform 250ms',
    margin: '0 32px',

    '&:hover': {
      transform: 'translateY(-2px)'
    }
  },
  mobilLinkItem: {
    margin: '0 64px'
  },
  icon: {
    color: '#fff'
  },
  github: {
    '&:hover path': {
      color: SOCIAL_MEDIA_COLORS.github
    }
  },
  twitter: {
    '&:hover path': {
      color: SOCIAL_MEDIA_COLORS.twitter
    }
  },
  instagram: {
    '&:hover path': {
      color: SOCIAL_MEDIA_COLORS.instagram
    }
  },
  discord: {
    '&:hover path': {
      color: SOCIAL_MEDIA_COLORS.discord
    }
  }
}));

export const SocialAccountsBar = () => {
  const classes = useStyles();
  let iconSize = '3x';
  let iconCss = isMobile ? classes.mobilLinkItem : classes.socialLinkItem;
  if (isMobile) {
    iconSize = '6x';
  }
  const accounts = socialMedia.accounts;
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.socialAccountsBar}>
        <li className={iconCss}>
          <a
            href={accounts[0].url}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.github}>
            <FontAwesomeIcon className={classes.icon} icon={faGithubSquare} size={iconSize} />
          </a>
        </li>

        <li className={iconCss}>
          <a
            href={accounts[1].url}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.twitter}>
            <FontAwesomeIcon className={classes.icon} icon={faTwitter} size={iconSize} />
          </a>
        </li>

        <li className={iconCss}>
          <a
            href={accounts[2].url}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.instagram}>
            <FontAwesomeIcon className={classes.icon} icon={faInstagram} size={iconSize} />
          </a>
        </li>

        <li className={iconCss}>
          <a
            href={accounts[3].url}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.discord}>
            <FontAwesomeIcon className={classes.icon} icon={faDiscord} size={iconSize} />
          </a>
        </li>
      </Toolbar>
    </AppBar>
  );
};
