
import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
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
  // selectBox
  const [age, setAge] = React.useState('');
  const inputLabel = React.useRef(null);


  //

  return (
    <div className={classes.root}>
      <Typography className="title">Listings</Typography>
      <Paper className={classes.paper}>
        <div>
          <div className="backtolist" style={{float:'left'}}>
            <IconButton aria-label="back to list" component={Link} to={"/newlisting"}>
              <ArrowBackIcon/>
            </IconButton>
          </div>
          <span className="step">
            <em>1</em>
            <em className="on">2</em>
            <em>3</em>
          </span>
        </div>
        <Grid container spacing={2} className="marginT">
          <Grid item xs={12} style={{height:400}} className="addFileBox">
              <div class="addFile">
                <h3>Upload your picture</h3>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                <label htmlFor="contained-button-file">
                  <Button component="span" className={classes.uploadBtn}>
                    Add from file
                  </Button>
                </label>
              </div>
          </Grid>
          <Grid item xs={12} className="inputEdit">
            <div>
              <Button variant="outlined" className="btnStyle" component={Link} to={"/Listings"}>Cancel</Button>
              <Button variant="outlined" className="btnStyle btnOn" component={Link} to={"/newlisting3"} style={{float:'right'}}>Next</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}