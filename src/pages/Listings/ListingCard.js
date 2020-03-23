import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


export default function ListingCard({id, status, photos, title, type, square_foot, price}) {
    return (
        <div>
            <Grid container component="main" className="tableGrid">
                <Grid item xs={12} md={3} className="tableElm01">
                    {
                        photos && photos[0] ?
                            <img src={`http://api.easyrealtysystem.wmdd.ca/listings/photos/${photos[0].filename}`}/> :
                            <img src="/no-photo-available.png"/>
                    }
                </Grid>
                <Grid item xs={12} md={6} className="tableElm02">
                    <ul className="PropertyList">
                        <li className="status">
                            {
                                status == 1 ?
                                    <em className="active"></em> : status == 0 ?
                                    <em className="inactive"></em> :
                                    <em className="sold"></em>
                            }
                        </li>
                        <li><h3>{title}</h3></li>
                        <li>Type: {type} Bed Room</li>
                        <li>Size: {square_foot} sq</li>
                        <li>Price: {price} CAD</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3} className="tableElm03 btnWrapper">
                    <div>
                        <Button variant="outlined" color="primary" className="blockBtn btnStyle" component={Link}
                                to={`/listings/edit/${id}`}> Edit</Button>
                        <Button variant="outlined" color="primary" className="blockBtn btnStyle" component={Link}
                                to={`/listings/${id}`}>View</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}