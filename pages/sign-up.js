import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RouteLink from 'next/link';
import * as RADFX_API from '@radfx-api'
import * as Validate from '@/utils/validate'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [user, setUser] = useState({ email: '', first_name: '', last_name: '', password: '' })
  const [is_valid, setIsValid] = useState({
    name: false,
    email: false,
    password: {
      contains_number: false,
      min_length: false,
      contains_special_character: false,
      contains_upper_character: false,
    },
  });

  async function registerUser(e) {
    console.log(user)
    e.preventDefault();
    const params = user;
    const result = await RADFX_API.registerUser(params);
    // if (result.status === 200) {
    //   // route to index
    // }

  }
  const onChangeHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validation = () => {
    setIsValid({
      ...is_valid,
      email: Validate.emailFormat(user.email),
      name: Validate.usernameLength(user.name),
      password: {
        ...is_valid.password,
        min_length: Validate.passwordLength(user.password),
        contains_upper_character: Validate.containsUpperCaseCharacter(data_post_user.password),
        contains_number: Validate.containsNumber(user.password),
        contains_special_character: Validate.containsSpecialCharacter(data_post_user.password),
      },
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value = {user.first_name}
                onChange={(e) => onChangeHandler(e)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="last_name"
                value = {user.last_name}
                onChange={(e) => onChangeHandler(e)}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value = {user.email}
                onChange={(e) => onChangeHandler(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value = {user.password}
                onChange={(e) => onChangeHandler(e)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={registerUser}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
            <RouteLink as={`/sign-in`} href="sign-in">
              <Link href="" variant="body2">
                Already have an account? Sign in
              </Link>
              </RouteLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}