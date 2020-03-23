import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
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

export default function RealtorsView({match}) {
  const classes = useStyles();
  //console.log(match);

  // Realtor API
  useEffect(() => {
      fetchRealtor().then(realtor => setItem(realtor));
  }, []);

  const [item, setItem] = useState({});

  const fetchRealtor = async () => {
      let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/realtors/${match.params.id}`);
      response = await response.json();
      // console.log(response)
      return response.data;
  };

  // Listing API
  useEffect(() => {
    fetchListing().then(listing => setList(listing));
  }, []);

  const [list, setList] = useState({});

  const fetchListing = async () => {
      let response1 = await fetch(`http://api.easyrealtysystem.wmdd.ca/listings/${match.params.id}`);
      response1 = await response1.json();
      console.log(response1)
      return response1.data;
  };



  return (
    <div className={classes.root}>
      <Typography className="title">Realtors</Typography>
      <Paper className={classes.paper}>
        <div>
          <div className="backtolist" style={{float: 'left'}}>
            <Tooltip title="" component={Link} to={"/Realtors"}>
                <IconButton aria-label="back to list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 200 200">
                        <g id="Group_1444" data-name="Group 1444" transform="translate(-945 -5840)">
                            <g id="Group_1441" data-name="Group 1441" transform="translate(266 1)">
                                <path id="Subtraction_23" data-name="Subtraction 23"
                                      d="M487,945H307a10.011,10.011,0,0,1-10-10V755a10.011,10.011,0,0,1,10-10H487a10.011,10.011,0,0,1,10,10V935A10.011,10.011,0,0,1,487,945ZM327,765a10.011,10.011,0,0,0-10,10V915a10.011,10.011,0,0,0,10,10H467a10.011,10.011,0,0,0,10-10V775a10.011,10.011,0,0,0-10-10Z"
                                      transform="translate(382 5094)" fill="#2b879e"/>
                            </g>
                            <path id="Union_25" data-name="Union 25"
                                  d="M333.77,827.033,302.656,795.92a12.4,12.4,0,0,1,0-14.151l31.113-31.113a8,8,0,0,1,11.314,11.314l-26.874,26.874,26.874,26.874a8,8,0,0,1-11.314,11.314Z"
                                  transform="translate(720.686 5150.686)" fill="#2b879e"/>
                        </g>
                    </svg>
                </IconButton>
            </Tooltip>
          </div>
        </div>
        <Grid container spacing={1} className="viewGrid">
          <Grid item xs={12} md={4}>
            {/* {item.photo}image */}image
          </Grid>

          <Grid item xs={12} md={8}>
            {/* <li class="status">{item.status = 0 ?<em className="active"></em> : item.status = 1 ? <em className="inactive"></em>: <em className="sold"></em>}</li>  */}
            <div style={{marginBottom: 12}}><h3 className="propertyTitle">{item.name}</h3></div>
            <div className="info" style={{marginBottom: 12}}>
              <div>Phone : {item.phone}</div>
              <div>Email : {item.created_at}</div>
          </div>
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