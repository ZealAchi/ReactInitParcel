
import React, { useState, useContext } from "react";
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

import { Mutation } from "react-apollo";
import {Error} from './../Menssages/Error'
import { AuthContext} from './../../Context/AuthContext';

import {
  withRouter
} from 'react-router-dom'
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{" "}
        {/* <button onClick={()=>{return <Redirect to="/"/>}}>Redirect</button> */}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
}


export default withRouter( function SigInContent({LOGIN,history}) {
  const { handleSubmit } = useContext(AuthContext);
  
    const classes = useStyles();
      const validateForm = () => {
        const {  email, password,  } = state;
        const isInvalid =
           !email || !password
        return isInvalid;
      };
    const [state, setState] = useState({
      email: "asd@gil.acom",
      password: "127as127"
    });
  
    const updateField = e => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    };
  
    const { email, password } = state;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              className={classes.form}
              onSubmit={async e => {
                e.preventDefault();
              }}
            >
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

  
             <Mutation mutation={LOGIN} variables={{ email, password }}>
                {(login,{data,loading,error}) => {
                    return(<>         
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={event => {handleSubmit(event, login);
                    
                    }}
                    
                    disabled={loading|| validateForm()}
                  >
                    Iniciar Sesion
                  </Button>
                  {error&&<Error error={error}/>}
                  </>)
              
              }}
              </Mutation>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                   >
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
      </Grid>
    );
  })
  