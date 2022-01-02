import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Button } from '@material-ui/core/';
import { isMobile } from 'react-device-detect';
import home from '../../constants/home.json';

const useStyles = makeStyles((theme) => ({
  link: {
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  },
  joinButton: {
    color: '#000',
    marginTop: '4vh'
  },
  isMobileJoinButton: {
    fontSize: '40px',
    marginTop: '6vh'
  }
}));

export const JoinFormButton = () => {
  const classes = useStyles();
  return (
    <Link
      className={classes.link}
      href={home.joinCommunityURL}
      rel="noopener noreferrer"
      target="_blank">
      {isMobile ? (
        <Button className={classes.isMobileJoinButton} variant="outlined">
          Katıl
        </Button>
      ) : (
        <Button className={classes.joinButton} variant="outlined" size="large">
          Katıl
        </Button>
      )}
    </Link>
  );
};
