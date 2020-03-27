import React, {useRef, useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


export default function RealtorItem({id, email, avatar, name, phone}) {


  return(
    <div>
      <Grid container component="main" className="tableGrid">
        <Grid className="tableElm01">
            {/* <img src={photos}></img> */}
            { avatar ? <img src={`http://api.easyrealtysystem.wmdd.ca/realtors/${id}/avatar`}></img> : <img src="/no-photo-available.png"></img>}

        </Grid>
        <Grid className="tableElm02">
            <ul className="PropertyList">
              <li><h3>{name}</h3></li>
              <li><span className="iTitle">Phone</span>: {phone}</li>
              <li><span className="iTitle">Email</span>: {email}</li>
            </ul>
        </Grid>
        <Grid className="tableElm03 btnWrapper">
          <div>
            <Button variant="outlined" color="primary" className="blockBtn btnStyle" component={Link} to={`/realtors/edit/${id}`}> Edit</Button>
            <Button variant="outlined" color="primary" className="blockBtn btnStyle" component={Link} to={`/realtors/${id}`}>View</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}