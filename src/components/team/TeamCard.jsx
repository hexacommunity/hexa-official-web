import React from 'react';
import { isMobile } from 'react-device-detect';
import { makeStyles, Card, CardMedia, CardContent, Typography, Box, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SOCIAL_MEDIA_COLORS } from '../../styles/variables/colors';

const useStyles = makeStyles((theme) => ({
  teamCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '350px',
    alignItems: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    paddingBottom: 24,
    paddingTop: 24
  },
  image: {
    width: '80%',
    height: '80%',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  content: {
    textAlign: 'center'
  },
  socialMediaPanel: {
    width: '100%',
    marginTop: 'auto'
  },
  iconGrid: {
    listStyle: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 24,
    paddingRight: 24
  },
  socialLinkItem: {
    margin: '0 24px',
    transition: 'transform 250ms',
    '&:hover': {
      transform: 'translateY(-2px)'
    }
  },
  mobilLinkItem: {
    margin: '0 10px'
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
  linkedin: {
    '&:hover path': {
      color: SOCIAL_MEDIA_COLORS.linkedin
    }
  }
}));

export const TeamCard = (props) => {
  const classes = useStyles();

  let iconCss = isMobile ? classes.mobilLinkItem : classes.socialLinkItem;
  let iconSize = isMobile ? '6x' : '2x';

  return (
    <Card key={props.person.name} className={classes.teamCardContainer}>
      <CardMedia component="img" className={classes.image} image={props.imageSrc} />
      <CardContent className={classes.content}>
        <Typography variant="h5" gutterBottom>
          {props.person.name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {props.person.title}
        </Typography>
      </CardContent>
      <Box className={classes.socialMediaPanel}>
        <Grid container direction="row" className={classes.iconGrid}>
          {renderSocialMediaIcons({ props, classes, iconCss, iconSize })}
        </Grid>
      </Box>
    </Card>
  );
};

const renderSocialMediaIcons = ({ props, classes, iconCss, iconSize }) => {
  return (
    <>
      <li className={iconCss}>
        <a
          href={props.person.links[0].twitter}
          rel="noopener noreferrer"
          target="_blank"
          className={classes.twitter}>
          <FontAwesomeIcon className={classes.icon} icon={faTwitter} size={iconSize} />
        </a>
      </li>

      <li className={iconCss}>
        <a
          href={props.person.links[1].linkedin}
          rel="noopener noreferrer"
          target="_blank"
          className={classes.linkedin}>
          <FontAwesomeIcon className={classes.icon} icon={faLinkedin} size={iconSize} />
        </a>
      </li>

      <li className={iconCss}>
        <a
          href={props.person.links[2].github}
          rel="noopener noreferrer"
          target="_blank"
          className={classes.github}>
          <FontAwesomeIcon className={classes.icon} icon={faGithubSquare} size={iconSize} />
        </a>
      </li>
    </>
  );
};
