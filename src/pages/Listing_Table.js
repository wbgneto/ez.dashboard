import React, {useRef, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';




export default function Listing_Table({status, title, type, square_foot, price}) {
    //you can pass only (props) above and pass {props.status} below
    const myDivElement = useRef(null);
    const [forceUpdate,setForceUpdate] = useState(true);
  

    return(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox 
                value="uncontrolled" 
                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} 
                ref={myDivElement}
                />
                {/* <input type="checkbox" ref={myDivElement}  onClick={handleClick}></input> */}
              </TableCell>
              <TableCell>
                <Grid container component="main">
                <Grid item xs={12} sm={2}>
                    {/* <img src={avatar}></img> */}
                    image
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography>
                    <ul className="PropertyList">
                      {/* <li>{status}</li> */}
                      <li><h3>{title}</h3></li>
                      <li>Type : {type} Bed Room</li>
                      <li>Size : {square_foot} sq</li>
                      <li>Price : {price} CAD</li>
                    </ul>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                <Button variant="outlined" color="primary" className="blockBtn" component={Link} to={"/listings/edit/1"}> Edit</Button>
                <Button variant="outlined" color="primary" className="blockBtn" component={Link} to={"/listings/1"}>View</Button>
                </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    )
}