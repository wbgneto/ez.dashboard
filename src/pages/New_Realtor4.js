
import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

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
  // selectBox
  const [age, setAge] = React.useState('');
  const inputLabel = React.useRef(null);


  //

  return (
    <div className={classes.root}>
      <Typography className="title">Realtors</Typography>
      <Paper className={classes.paper}>
        <div>
          <div className="backtolist" style={{float:'left'}}>
            <IconButton aria-label="back to list" component={Link} to={"/newrealtor3"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 200 200">
                  <g id="Group_1444" data-name="Group 1444" transform="translate(-945 -5840)">
                    <g id="Group_1441" data-name="Group 1441" transform="translate(266 1)">
                      <path id="Subtraction_23" data-name="Subtraction 23" d="M487,945H307a10.011,10.011,0,0,1-10-10V755a10.011,10.011,0,0,1,10-10H487a10.011,10.011,0,0,1,10,10V935A10.011,10.011,0,0,1,487,945ZM327,765a10.011,10.011,0,0,0-10,10V915a10.011,10.011,0,0,0,10,10H467a10.011,10.011,0,0,0,10-10V775a10.011,10.011,0,0,0-10-10Z" transform="translate(382 5094)" fill="#2B879E"/>
                    </g>
                    <path id="Union_25" data-name="Union 25" d="M333.77,827.033,302.656,795.92a12.4,12.4,0,0,1,0-14.151l31.113-31.113a8,8,0,0,1,11.314,11.314l-26.874,26.874,26.874,26.874a8,8,0,0,1-11.314,11.314Z" transform="translate(720.686 5150.686)" fill="#2B879E"/>
                  </g>
                </svg>
            </IconButton>
          </div>
          <span className="step">
            <em>1</em>
            <em>2</em>
            <em className="on">3</em>
          </span>
        </div>
        <Grid container spacing={2} className="marginT">
          <Grid item xs={12}>
            <Grid container spacing={4} className="viewGrid">
              <Grid item xs={12} md={4}>
                  <div>
                    <img style={{width:'100%', height:'100%'}} src="https://dummyimage.com/300x200/000/fff&text=picture"></img>
                  </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography>
                  <ul className="PropertyList PropertyView">
                    <li className="propertyTitle"><h3>Realtor Name</h3></li>
                    <li>Phone Number </li>
                    <li>Email </li>
                    <li>Address </li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="inputEdit">
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