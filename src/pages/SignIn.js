import React, {useState} from 'react';
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

export default function SignIn({history, showSnackbar}) {

  const [formData, setFormData] = useState({
    email: 'realtor@easyrealtysystem.wmdd.ca',
    password: "123456"
  });

  const handleLogin = async () => {
    let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/auth/login`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    response = await response.json();

    if (response.statusCode === 400) {
      showSnackbar('error', response.message);
    } else {
      showSnackbar('success', response.message);
      history.push('/dashboard');
    }
  };

  return (
    <div className="signin">

      <div className="signin_child1">
        <img src={require("../images/Logo2_Loginpage.png")} className="login_image" />
        <img src={require("../images/Logo2_Mobile.png")} className="login_responsive" />
        <div className="loginpage_intro">
          <p>A solution for the Real Estate domain to help both the real estate companies and independent realtors.</p>
          <h3>Easy Realty <br /> S y s t e m</h3>
        </div>
      </div>
      <div className="signin_child2">


        <FormControl className="login_form">
          <Typography variant="h3" className="login_heading">
            Log In
        </Typography>
          <FormLabel className="login_labels">
            Email
          </FormLabel>
          <input type="email" variant="outlined" className="login_input" value={formData.email} onChange={(event) => setFormData({...formData, email: event.target.value})} />
          <FormLabel className="login_labels">
            Password
          </FormLabel>
          <input type="password" variant="outlined" className="login_input" value={formData.password} onChange={(event) => setFormData({...formData, password: event.target.value})} />
          <a href="#" className="forgot_password">
            Forgot Password?
          </a>
          <Button variant="contained" className="login_button" onClick={handleLogin}>Login</Button>
          <h3 className="new_member">New Member? <a href="http://easyrealtysystem.wmdd.ca/Contact" target="_blank">Register Now</a></h3>
        </FormControl>


      </div>
    </div>
  );
} 
