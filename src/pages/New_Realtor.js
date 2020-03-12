import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: '20px',
    position: 'relative',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: "100%",
    '& label.Mui-focused': {
      color: '#2B879E',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#2B879E',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#2B879E',
      },
      '&:hover fieldset': {
        borderColor: '#2B879E',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2B879E',
      },
    },
  },
  input: {
    display: 'none',
  },
  uploadBtn: {
    backgroundColor:'#eee',
    borderRadius: '5px',
    width:'100%',
    padding:'26% 0',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Typography className="title">Realtors</Typography>
      <Paper className={classes.paper}>
        <div>
          <div className="backtolist" style={{float:'left'}}>
          <Tooltip title="" component={Link} to={"/Realtors"}>
            <IconButton aria-label="back to list">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 200 200">
              <g id="Group_1437" data-name="Group 1437" transform="translate(-947 -5839)">
                <path id="Subtraction_27" data-name="Subtraction 27" d="M487,945H307a10.011,10.011,0,0,1-10-10V755a10.011,10.011,0,0,1,10-10H487a10.011,10.011,0,0,1,10,10V935A10.011,10.011,0,0,1,487,945ZM335,773a10.011,10.011,0,0,0-10,10V907a10.011,10.011,0,0,0,10,10H459a10.011,10.011,0,0,0,10-10V783a10.011,10.011,0,0,0-10-10Z" transform="translate(650 5094)" fill="#2b879e"/>
                <path id="Union_22" data-name="Union 22" d="M332.356,825.619l-28.284-28.284a14.154,14.154,0,0,1,0-16.978l28.284-28.284a10,10,0,0,1,14.142,0l2.121,2.121a10,10,0,0,1,0,14.142l-20.511,20.511,20.511,20.51a10,10,0,0,1,0,14.142l-2.121,2.121a10,10,0,0,1-14.142,0Z" transform="translate(718.609 5151.701)" fill="#2b879e"/>
              </g>
            </svg>
            </IconButton>
          </Tooltip>
          </div>
          {/* <div className="btnBox" style={{float:'right'}}>
            <IconButton aria-label="delete">
              <DeleteIcon/>
            </IconButton>
            <IconButton aria-label="visibility">
              <VisibilityOffIcon />
            </IconButton>
          </div> */}
        </div>
        <Grid container spacing={2} className="marginT">
          <Grid item xs={12} sm={4}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button component="span" className={classes.uploadBtn}>
              Upload Pictures
            </Button>
          </label>
          </Grid>
          <Grid item xs={12} sm={8} className="inputEdit">
            <div><TextField id="outlined-basic" label="Name of Realtor" variant="outlined" className={classes.formControl}/></div>
            <div><TextField id="outlined-basic" label="Email" variant="outlined"  className={classes.formControl}/></div>
            <div><TextField id="outlined-basic" label="Phone number" variant="outlined"  className={classes.formControl}/></div>
            <div><TextField id="outlined-basic" label="Address" variant="outlined"  className={classes.formControl}/></div>
            <div>
              <Button variant="outlined" className="btnStyle" component={Link} to={"/Realtors"}>Cancel</Button>
              <Button variant="outlined" className="btnStyle btnOn" component={Link} to={"/Realtors"} style={{float:'right'}}>Save</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}