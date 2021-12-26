import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Button } from '@material-ui/core/';
import about from '../../constants/about.json';

const useStyles = makeStyles((theme) => ({
  link: {
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  },
  joinButton: {
    color: '#000',
    marginTop: '4vh'
  }
}));

export const JoinFormButton = () => {
  const classes = useStyles();
  return (
    <Link className={classes.link} href={about.url} rel="noopener noreferrer" target="_blank">
      <Button className={classes.joinButton} variant="outlined" size="large">
        Katıl
      </Button>
    </Link>
  );
};

{
  /* <Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Button Link
</Link> */
}
