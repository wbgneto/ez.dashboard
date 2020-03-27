import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
export default function RealtorListings({realtorId, history}) {
  const classes = useStyles();

  useEffect(() => {
    fetchListings();
  }, []);

  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    const fetchItem = await fetch(
      `http://api.easyrealtysystem.wmdd.ca/listings?realtor_id=${realtorId}`
    );

    const response = await fetchItem.json();

    setListings(response.data);
  };

  return (
      <Paper className={classes.paper}>
        <Grid container spacing={10} className="homeList">
          {
            listings.length === 0 ? (<Grid item xs={12} md={4}>No listings found</Grid>) : (
              listings.map(listing => (
                <Grid item xs={12} md={4}>
                  <div className="homePic" onClick={() => history.push(`/listings/${listing.id}`)}>
                    <span><Typography>{ listing.title }</Typography></span>
                    {
                      listing.photos.length === 0 ?
                      <img src="https://dummyimage.com/300x200/ccc/000&text=home+picture"></img> :
                      <img src={`http://api.easyrealtysystem.wmdd.ca/listings/photos/${listing.photos[0].filename}`}></img>
                    }
                  </div>
                </Grid>
              ))
            )
          }
        </Grid>
      </Paper>
  );
}