import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faTwitter,
  faInstagram,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import socialMedia from '../../constants/socialMediaAccounts.json';
import { SOCIAL_MEDIA_COLORS } from '../../styles/variables/colors';

const useStyles = makeStyles((theme) => ({
  socialMediaContainer: {
    position: 'fixed',
    left: '60px',
    bottom: 0,
    display: 'flex',
    overflow: 'hidden',
    listStyle: 'none',
    textAlign: 'center'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  socialLinkItem: {
    marginBottom: '30px',
    transition: 'transform 250ms',
    '&:hover': {
      transform: 'translateY(-2px)'
    }
  },
  icon: {
    color: '#000'
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

export const SocialAccounts = () => {
  const classes = useStyles();
  const accounts = socialMedia.accounts;

  return (
    <div className={classes.socialMediaContainer}>
      <ul className={classes.list}>
        <li className={classes.socialLinkItem}>
          <a
            href={accounts[0].url}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.github}>
            <FontAwesomeIcon className={classes.icon} icon={faGithubSquare} size="3x" />
          </a>
        </li>

        <li className={classes.socialLinkItem}>
          <a
            href={accounts[1].url}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.twitter}>
            <FontAwesomeIcon className={classes.icon} icon={faTwitter} size="3x" />
          </a>
        </li>

        <li className={classes.socialLinkItem}>
          <a
            href={accounts[2].url}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.instagram}>
            <FontAwesomeIcon className={classes.icon} icon={faInstagram} size="3x" />
          </a>
        </li>

        <li className={classes.socialLinkItem}>
          <a
            href={accounts[3].url}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.discord}>
            <FontAwesomeIcon className={classes.icon} icon={faDiscord} size="3x" />
          </a>
        </li>
      </ul>
    </div>
  );
};
