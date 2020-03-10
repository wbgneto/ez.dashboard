
import React, {useState, useEffect, useRef} from 'react';
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
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log(err, 'Fetch error'))
      )
    }
    fetchData();
  },[])

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
      </div>

        <Grid container spacing={1} className="viewGrid">
          <Grid item xs={12} md={4}>{users.avatar}image</Grid>
          <Grid item xs={12} md={8}>
            <div>{users.first_name} {users.last_name}Realtor1</div>
            <div>{users.email}realtor1#gmail.com</div>
            <div>111-222-3333</div>
            <div>Burnaby</div>
            <Button variant="outlined" color="primary" className="blockBtn" component={Link} to={"/Realtors"}>Back</Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={6} className="homeList">
          <Grid item xs={12} md={4}>
            <div className="homePic">
              <span><Typography>Home List1</Typography></span>
              <img src="https://dummyimage.com/300x200/ccc/000&text=home+picture"></img>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="homePic">
            <span><Typography>Home List2</Typography></span>
              <img src="https://dummyimage.com/300x200/ccc/000&text=home+picture"></img>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="homePic">
            <span><Typography>Home List3</Typography></span>
              <img src="https://dummyimage.com/300x200/ccc/000&text=home+picture"></img>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}