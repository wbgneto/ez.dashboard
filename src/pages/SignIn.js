import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
//import Image from 'material-ui-image';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function SignIn() {
  return (
    <div className="signin">

      <div className="signin_child1">
        <img src={require("../images/Logo2_Loginpage.png")} className="login_image" />
        <img src={require("../images/Logo2_Mobile.png")} className="login_responsive" />
        <div className="loginpage_intro">
          <p>A solution for the Real Estate domain.</p>
          <h3>Easy Realty <br /> S y s t e m</h3>
        </div>
      </div>
      <div className="signin_child2">


        <FormControl className="login_form">
          <Typography variant="h1" className="login_heading">
            Log In
        </Typography>
          <FormLabel className="login_labels">
            Email
          </FormLabel>
          <TextField type="email" variant="outlined" className="login_input"></TextField>
          <FormLabel className="login_labels">
            Password
          </FormLabel>
          <TextField type="password" variant="outlined" className="login_input"></TextField>
          <a href="#" className="forgot_password">
            Forgot Password?
          </a>
          <Button variant="contained" className="login_button">Login</Button>
          <h3 className="new_member">New Member?<a href="#">Register Now</a></h3>
        </FormControl>


      </div>
    </div>
  );
} 
