import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
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