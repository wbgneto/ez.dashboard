
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
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


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


  return (
    <div className={classes.root}>
      <Typography className="title">Realtors</Typography>
      <Paper className={classes.paper}>
        <div>
          <div className="backtolist" style={{float:'left'}}>
            <IconButton aria-label="back to list" component={Link} to={"/Realtors"}>
              <ArrowBackIcon/>
            </IconButton>
          </div>
          <div className="btnBox" style={{float:'right'}}>
            <IconButton aria-label="delete">
              <DeleteIcon/>
            </IconButton>
            <IconButton aria-label="visibility">
              <VisibilityOffIcon />
            </IconButton>
          </div>
        </div>
        <Grid container spacing={2} className="marginT">
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={8} className="inputEdit">
            <div><TextField id="outlined-basic" label="Name of Realtor" variant="outlined" className={classes.formControl}/></div>
            <div><TextField id="outlined-basic" label="Email" variant="outlined"  className={classes.formControl}/></div>
            <div><TextField id="outlined-basic" label="Phone number" variant="outlined"  className={classes.formControl}/></div>
            <div><TextField id="outlined-basic" label="Address" variant="outlined"  className={classes.formControl}/></div>
            <div>
              <Button variant="outlined" color="primary" component={Link} to={"/Realtors"}>Cancel</Button>
              <Button variant="outlined" color="primary" component={Link} to={"/Realtors"} style={{float:'right'}}>Save</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}