import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@mui/material/Grid';
import { useFooterStyles } from '@/styles/useFooterStyles';

export default function Footer(props) {
  const classes = useFooterStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" align="left" gutterBottom>
              RadFx.com
            </Typography>
            <Typography variant="body1" color="black" align="left">
              {'Sponsors'}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="left">
              <Link color="inherit" href="https://material-ui.com/">
                MDA
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="left">
              <Link color="inherit" href="https://www.utc.edu/engineering-and-computer-science">
                University of Tennessee at Chattanooga
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" color="black" align="left">
              {'Participating Facilities'}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="left">
              <Link color="inherit" href="https://www.lbl.gov/">
                Lawrence Berkeley National Laboratory
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="left">
              <Link color="inherit" href="https://engineering.tamu.edu/nuclear/research/facilities/accelerator-laboratory.html">
                Texas A&M Accelerator Laboratory
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="left">
              <Link color="inherit" href="https://www.bnl.gov/nsrl/">
                NASA Space Radiation Laboratory
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography variant="body1" color="black" align="left">
              {'Contact'}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="left">
              <Link color="inherit" href="https://www.google.com/">
                link1
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" align="left">
              <Link color="inherit" href="https://www.google.com/">
                link2
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};