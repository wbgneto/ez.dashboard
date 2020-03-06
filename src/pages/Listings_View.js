import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
    <div className={classes.root}>
      <Typography className="title">Listings</Typography>
      <Paper className={classes.paper}>

        <div>
          <div className="backtolist" style={{float:'left'}}>
            <IconButton aria-label="back to list" component={Link} to={"/Listings"}>
              <ArrowBackIcon/>
            </IconButton>
          </div>
        </div>
        <Grid container spacing={1} className="viewGrid">
          <Grid item xs={12} sm={4}>image</Grid>
          <Grid item xs={12} sm={8}>
            <div>Relator1</div>
            <div>xxx@gmail.com</div>
            <div>111-222-3333</div>
            <div>Burnaby</div>
            <Button variant="outlined" color="primary" className="blockBtn" component={Link} to={"/Listings"}>Back</Button>
          </Grid>
        </Grid>
      </Paper>

    </div>
  );
}