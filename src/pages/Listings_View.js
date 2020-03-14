import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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

export default function CenteredGrid({match}) {
  const classes = useStyles();
  
  useEffect(() => { 
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
    address : {},
    features : [ {} ]
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://api.easyrealtysystem.wmdd.ca/listings?id=${
        match.params.id
      }`
    );
    const item = await fetchItem.json();
  
    setItem(item.data[0]);
    console.log(item.data);
  }

 


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
        </div>
        <Grid container spacing={4} className="viewGrid">
          <Grid item xs={12} md={4}>
            <Carousel>
              <div>
                  <img src="https://dummyimage.com/600x400/000/fff" />
                  <p className="legend">Picture 1</p>
              </div>
              <div>
                  <img src="https://dummyimage.com/600x400/000/fff" />
                  <p className="legend">Picture 2</p>
              </div>
              <div>
                  <img src="https://dummyimage.com/600x400/000/fff" />
                  <p className="legend">Picture 3</p>
              </div>
              <div>
                  <img src="https://dummyimage.com/600x400/000/fff" />
                  <p className="legend">Picture 3</p>
              </div>
            </Carousel>
          </Grid>
          <Grid item xs={12} md={8}>
          <Typography>
            <ul className="PropertyList PropertyView">
              {/* <li class="status">{item.status = 0 ?<em className="active"></em> : item.status = 1 ? <em className="inactive"></em>: <em className="sold"></em>}</li>  */}
              <li className="propertyTitle"><h3>{item.title}</h3></li>
              <li className="propertyRealtor">Realtor : {item.realtor_id}</li>
              <li>Type : {item.type} Bed Room</li>
              <li>Price : {item.price} CAD</li>
              <li>Size : {item.square_foot} sq</li>
              <li>Date : {item.created_at}</li> 
              <li>
                Address : {item.address.street} 
                {item.address.number}, 
                {item.address.postal_code}, 
                {item.address.city},
                {item.address.province}, 
                {item.address.country}     
              </li> 
              <li>Type : {item.features[0].type} Garage</li> 
              <li>Description : {item.description}</li> 
              {/* <li>Bedroom: {item.toString()} </li> */}
              {/* {item.address.map(function (ad.d, i) {
                return <li key={i}>
                  <span>{add.street}</span>
                  <span>{add.number}</span>
                </li>
              }
              )}
              <li>{item.description}</li> */}
            </ul>
            {/* <Button variant="outlined" color="primary" className="blockBtn" component={Link} to={"/Listings"}>Back</Button> */}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}