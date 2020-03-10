
import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
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
            <IconButton aria-label="back to list" component={Link} to={"/newlisting2"}>
              <ArrowBackIcon/>
            </IconButton>
          </div>
          <span className="step">
            <em>1</em>
            <em>2</em>
            <em className="on">3</em>
          </span>
        </div>
        <Grid container spacing={2} className="marginT">
          <Grid item xs={12} sm container>
            <Grid item xs container spacing={2} className="addImage">
              <Grid item xs={6} sm={3}>
                <img src="https://dummyimage.com/250x180/000/fff.jpg"></img>
              </Grid>
              <Grid item xs={6} sm={3}>
                <img src="https://dummyimage.com/250x180/000/fff.jpg"></img>
              </Grid>
              <Grid item xs={6} sm={3}>
                <img src="https://dummyimage.com/250x180/000/fff.jpg"></img>
              </Grid>
              <Grid item xs={6} sm={3}>
                <img src="https://dummyimage.com/250x180/000/fff.jpg"></img>
              </Grid>
              <Grid item xs={6} sm={3}>
                <img src="https://dummyimage.com/250x180/000/fff.jpg"></img>
              </Grid>
              <Grid item xs={6} sm={3} className="addPicture">
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button component="span" className={classes.uploadBtn}>
                      <AddIcon className="iconWhite"></AddIcon>
                    </Button>
                  </label>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="inputEdit">
            <div>
              <Button variant="outlined" className="btnStyle" component={Link} to={"/Listings"}>Cancel</Button>
              <Button variant="outlined" className="btnStyle btnOn" component={Link} to={"/Listings"} style={{float:'right'}}>Next</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}