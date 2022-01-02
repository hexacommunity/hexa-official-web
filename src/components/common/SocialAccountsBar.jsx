import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core/';
import { isMobile } from 'react-device-detect';
import { COLORS, SOCIAL_MEDIA_COLORS } from '../../styles/variables/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import hexa from '../../constants/hexacommunity.json';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  socialAccountsBar: {
    background: COLORS.navBar,
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    minHeight: '60px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '96px'
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
  }
}));

export const SocialAccountsBar = () => {
  const classes = useStyles();

  let iconCss = isMobile ? classes.mobilLinkItem : classes.socialLinkItem;
  let iconSize = '2x';

  if (isMobile) {
    iconSize = '6x';
  }
  const accounts = hexa.accounts;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.socialAccountsBar}>
        {renderSocialMediaIcons({ classes, accounts, iconCss, iconSize })}
      </Toolbar>
    </AppBar>
  );
};

const renderSocialMediaIcons = ({ classes, accounts, iconCss, iconSize }) => {
  return (
    <>
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
    </>
  );
};
