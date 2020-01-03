import gql from "graphql-tag";
import { Mutation } from 'react-apollo'
import React, { useState } from "react";
import { Input } from "./../Input";
import { useStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";


const REGISTER = gql`
  mutation createUser($email: String!, $name: String!, $password: String!){
  signup(input:{
    name: $name,
    email: $email
    password: $password
  }){
    id
    name
    email
   	createdAt
    updatedAt
    
  }}

`;
export default function SignUp() {
  const classes = useStyles();
  const [state, setState] = useState({
    email: "luisgarcia.lapg@gmail.com",
    name: "Luis",
    password: "127as127",
    passwordConfirmation: "127as1271",
  });
  const { name, email, password, passwordConfirmation } = state;

  const validateForm = () => {
    const { email, password, passwordConfirmation } = state;
    const isInvalid = !email || !password || password !== passwordConfirmation;
    return isInvalid;
  };
  const updateField = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(async ({ data }) => {
      console.log(data);
    })
  }
  return (
    <Mutation mutation={REGISTER} variables={{ email, password, name }}>
      {(signup, { data, loading, error }) => (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Regitrate
          </Typography>
              <form className={classes.form} onSubmit={event => handleSubmit(event, signup)}>
                <Input
                  required
                  fullWidth
                  value={name}
                  onChange={updateField}
                  id="name"
                  label="Nombre Completo"
                  name="name"
                  type="text"
                  autoFocus
                />
                <Input
                  required
                  fullWidth
                  value={email}
                  onChange={updateField}
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoFocus
                />
                <Input
                  required
                  fullWidth
                  value={password}
                  onChange={updateField}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />

                <Input
                  required
                  fullWidth
                  value={passwordConfirmation}
                  onChange={updateField}
                  name="passwordConfirmation"
                  label="Confirmar Contraseña"
                  type="password"
                  id="passwordConfirmation"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={validateForm()}
                >
                  Registrate
              </Button>
                {loading && <p>Registrandote...</p>}
                {error && <p>Error,Usuario no registrado.</p>}

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password? >
                </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>

                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>)}
    </Mutation>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
