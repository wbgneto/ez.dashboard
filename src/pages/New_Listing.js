import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
  // selectBox
  const [age, setAge] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
  };
  //

  return (
    <div className={classes.root}>
      <Typography className="title">Listings</Typography>
      <Paper className={classes.paper}>
        <div>
          <div className="backtolist" style={{float:'left'}}>
          <Tooltip title="" component={Link} to={"/Listings"}>
            <IconButton aria-label="back to list">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 200 200">
              <g id="Group_1444" data-name="Group 1444" transform="translate(-945 -5840)">
                <g id="Group_1441" data-name="Group 1441" transform="translate(266 1)">
                  <path id="Subtraction_23" data-name="Subtraction 23" d="M487,945H307a10.011,10.011,0,0,1-10-10V755a10.011,10.011,0,0,1,10-10H487a10.011,10.011,0,0,1,10,10V935A10.011,10.011,0,0,1,487,945ZM327,765a10.011,10.011,0,0,0-10,10V915a10.011,10.011,0,0,0,10,10H467a10.011,10.011,0,0,0,10-10V775a10.011,10.011,0,0,0-10-10Z" transform="translate(382 5094)" fill="#2b879e"/>
                </g>
                <path id="Union_25" data-name="Union 25" d="M333.77,827.033,302.656,795.92a12.4,12.4,0,0,1,0-14.151l31.113-31.113a8,8,0,0,1,11.314,11.314l-26.874,26.874,26.874,26.874a8,8,0,0,1-11.314,11.314Z" transform="translate(720.686 5150.686)" fill="#2b879e"/>
              </g>
            </svg>
            </IconButton>
          </Tooltip>
          </div>
          <span className="step">
            <em className="on">1</em>
            <em>2</em>
            <em>3</em>
          </span>
        </div>
        <Grid container spacing={2} className="marginT">
          <Grid item xs={12} md={4} className="center">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <p>Add information about this property</p>
          </Grid>
          <Grid item xs={12} md={8} className="inputEdit">
            <div>
              <TextField id="outlined-basic" label="House Title" variant="outlined" className={classes.formControl}/>
            </div>
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                  Realtor
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handleChange}
                  labelWidth={labelWidth}
                >
                  <MenuItem value="Michael">Michael</MenuItem>
                  <MenuItem value="Mark">Mark</MenuItem>
                  <MenuItem value="Lee">Lee</MenuItem>
                  <MenuItem value="Harry">Harry</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handleChange}
                  labelWidth={labelWidth}
                >
                  <MenuItem value="Condo">Condo</MenuItem>
                  <MenuItem value="House">House</MenuItem>
                  <MenuItem value="Townhouse">Townhouse</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div><TextField id="outlined-basic" label="Price" variant="outlined"  className={classes.formControl}/></div>
            <Grid container spacing={1} className="twoColumnGrid">
              <Grid item xs={12} sm={6}>
                <div><TextField id="outlined-basic" label="Size" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div><TextField id="outlined-basic" label="Created at" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div><TextField id="outlined-basic" label="Bedroom" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div><TextField id="outlined-basic" label="Garage" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div><TextField id="outlined-basic" label="Street" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div><TextField id="outlined-basic" label="Number" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div><TextField id="outlined-basic" label="City" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div><TextField id="outlined-basic" label="Province" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div><TextField id="outlined-basic" label="Country" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div><TextField id="outlined-basic" label="Postal Code" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
            </Grid>
            <div><TextField id="outlined-multiline-static" label="Description" multiline rows="4" variant="outlined"  className={classes.formControl}/></div>
            <div>
              <Button variant="outlined" className="btnStyle" component={Link} to={"/Listings"}>Cancel</Button>
              <Button variant="outlined" className="btnStyle btnOn" component={Link} to={"/newlisting2"} style={{float:'right'}}>Next</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}