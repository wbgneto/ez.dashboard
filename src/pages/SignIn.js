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
/***********************************************Template***************************************************************************************/
// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100vw',
//     //height: '100vh',
//     position: 'absolute',
//     top: 40,
//     //left: 10,
//     zIndex: 9999,
    
//   },
//   background: {
//     backgroundImage: 'url(https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)',
//     backgroundRepeat: 'no-repeat',
//     // backgroundColor:
//     //   theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
//     backgroundSize: 'cover',
//     //backgroundPosition: 'center',
//     height: '80vh'
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     height: '40%',
    
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
    
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: '#2B879E',
//     marginLeft: '-22em',
//     color: 'white',
//     textTransform:'capitalize',
//     width: '34%',
    
//   },
//   Link:{
//     color:'black',
//     textDecoration: 'underline',
//     //textAlign: 'right'
//     //marginLeft: '600em'
//   },
//   Typography:{
//     color: '#2B879E',
//     fontSize: '3.157em',
//     fontWeight: 'Bold'
//   },
//   label:{
//     fontSize: '1.333em'
//   },
//   p:{
//     marginLeft: '9em',
//     fontSize: '1.333em'
//   },
//   Link2:{
//     //fontSize: '1.333em',
//     textDecoration: 'none',
//     color: '#2B879E'
//   }
//   // Button:{
//   //   backgroundColor:'#2B879E',
//   //   color: 'white'
//   // },
//   // Link:{
//   //   color: 'black'
//   // }
// }));

// export default function SignInSide() {
//   const classes = useStyles();

//   return (
    
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item className={classes.background} />
//       {/* <Grid item xs={false} sm={4} md={7} className={classes.background } />  */}
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
//         <div className={classes.paper}>
//           {/* <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar> */}
//           {/* <div className={classes.image}></div> */}
//           <Typography component="h1" variant="h5" className={classes.Typography}>
//             Log In
//           </Typography>
//           <br />
//           <form className={classes.form} noValidate>
//             <label className={classes.label}>Email</label>
//             <TextField
//               variant="outlined"
//               //margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Your Email"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <br /> <br />
//             <label className={classes.label}>Password</label>
//             <TextField
//               variant="outlined"
//               //margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Your Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             {/* <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             /> */}
            
//             <Grid container>
//               <Grid item xs>
//                 {/* <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link> */}
//               </Grid>
//               <Grid item>
//               <Link href="#" variant="body2" className={classes.Link}>
//                   Forgot Password?
//                 </Link>
//               </Grid>
//               <Grid item>
//               <Button
//               type="submit"
//               //Medium
//               //fullWidth
//               variant="contained"
//               //color="primary"
//               className={classes.submit}
//               component={Link} to="/Dashboard" 
//             >
//               Login
//             </Button>
//             </Grid>
//             </Grid>
//             {/* <Box mt={5}>
//               <Copyright />
//             </Box> */}
//             <br /> <br />
//             <Grid item>
//               <p className={classes.p}>New Member? <Link className={classes.Link2}>Register Now</Link></p>
//             </Grid>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
    
//   );
// }
/***********************************************Template***************************************************************************************/
export default function App() {
  return (
    <div className="signin">
      <div className="form">
        <Typography variant="h1">
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
    </div>

    

  );
} 