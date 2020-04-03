import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import ListingType from "../../data/ListingType";

export default function ListingCard({id, status, photos, title, type, square_foot, price}) {


    price = new Intl.NumberFormat('en-CAD', {
        currency: 'CAD',
        style: 'decimal',
    }).format(price);

    return (
        <div>
            <Grid container component="main" className="tableGrid">
                <Grid className="tableElm01">
                    {
                        photos && photos[0] ?
                            <img src={`http://api.easyrealtysystem.wmdd.ca/listings/photos/${photos[0].filename}`}/> :
                            <img src="/no-photo-available.png"/>
                    }
                </Grid>
                <Grid className="tableElm02">
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
                        <li><span className="cTitle">Type</span>: {ListingType[type].label}</li>
                        <li><span className="cTitle">Size</span>: {square_foot} ft²</li>
                        <li><span className="cTitle">Price</span>: {price} CAD</li>
                    </ul>
                </Grid>
                <Grid item className="tableElm03 btnWrapper">
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