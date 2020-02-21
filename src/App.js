import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
//import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Dashboard from './templates/dashboard';


export default function App() {
  return (

    <Dashboard>
      <div className="form">
        <Typography variant="h3">
          Log In
        </Typography>
        <FormControl>
          <FormLabel>
            Email
          </FormLabel>
          <TextField type="email" variant="outlined"></TextField>
          <FormLabel>
            Password
          </FormLabel>
          <TextField type="password" variant="outlined"></TextField>
          <Link href="#">
            Forgot Password?
          </Link>
          <Button variant="contained">Login</Button>
          <p>New Member?<a href="#">Register Now</a></p>
        </FormControl>
      </div>
    </Dashboard>


  );
}