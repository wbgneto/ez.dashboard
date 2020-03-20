import React, {useRef, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import {showIcon} from './Realtors';
export default function Listing_Table({id, name, phone, email, address}) {
    //you can pass only (props) above and pass {props.email} below
    const myDivElement = useRef(null);
    const [forceUpdate,setForceUpdate] = useState(true);
    // const checkedBox = () => {
    //   if (myDivElement.checked === 'true') {
    //     showIcon();
    //   }
    // }
  return(
    <>
      <TableCell style={{width:'10px', padding:'0 8px'}}>
        <Checkbox
        value="uncontrolled"
        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
        ref={myDivElement}
        />
        {/* <input type="checkbox" ref={myDivElement}  onClick={showIcon}></input> */}
      </TableCell>
      <TableCell>
        <Grid container component="main" className="tableGrid">
        <Grid item xs={12} md={3} className="tableElm01">
        <img src="https://dummyimage.com/160x120/000/fff&text=Pictures"></img>
        </Grid>
        <Grid item xs={12} md={6} className="tableElm02">
            <Typography>
                <ul>
                    <li>Name : {name}</li>
                    <li>Phone number : {phone}</li>
                    <li>Email : {email}</li>
                    <li>Address : {address}</li>
                </ul>
            </Typography>
        </Grid>
        <Grid item xs={12} md={3} className="tableElm03 btnWrapper">
          <div>
            <Button variant="outlined" color="primary" className="blockBtn btnStyle" component={Link} to={`/realtors/edit/${id}`}> Edit</Button>
            <Button variant="outlined" color="primary" className="blockBtn btnStyle" component={Link} to={`/realtors/${id}`}>View</Button>
          </div>
        </Grid>
        </Grid>
      </TableCell>
    </>
  )
}