import React from 'react';
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

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: '16px',
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
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} className="container">
      <Typography className="title">Realtors</Typography>
      <Paper className={classes.paper}>
        <div className="btnBox">
          <IconButton aria-label="delete">
            <DeleteIcon/>
          </IconButton>
          <IconButton aria-label="visibility">
            <VisibilityOffIcon />
          </IconButton>
        </div>
        <Grid container spacing={1} >
          <Grid item md={4}>image</Grid>
          <Grid item md>
            <div><TextField id="outlined-basic" label="Name of Realtor" variant="outlined" /></div>
            <div><TextField id="outlined-basic" label="Email" variant="outlined" /></div>
            <div><TextField id="outlined-basic" label="Phone Number" variant="outlined" /></div>
            <div><TextField id="outlined-basic" label="Address" variant="outlined" /></div>
            <div>
              <Button variant="outlined" color="primary" component={Link} to={"/Realtors"}>Cancel</Button>
              <Button variant="outlined" color="primary" component={Link} to={"/Realtors"}>Save</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item md={4}>Home List1</Grid>
          <Grid item md={4}>Home List2</Grid>
          <Grid item md={4}>Home List3</Grid>
        </Grid>
      </Paper>
    </div>
  );
}