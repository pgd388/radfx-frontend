import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import RouteLink from 'next/link';
import { HeroStyles } from '@/styles/hero_styles';


export default function Hero(props) {
  const classes = HeroStyles();
  const {name, role} = props
  const post = {
    title: 'username',
    description:
      "Manage your requests for partical accelerator time",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Submit new request',
  };
  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {name}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {role}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

Hero.propTypes = {
  post: PropTypes.object,
};