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




export default function Listing_Table({email, firstname, lastname, avatar}) {
    //you can pass only (props) above and pass {props.email} below
    const myDivElement = useRef(null);
    const [forceUpdate,setForceUpdate] = useState(true);
  
    const handleClick = (e) => {
      if (myDivElement.checked === 'true') {
        myDivElement.current.style.border='5px solid #000';  
      }
      else {
        myDivElement.current.style.border='5px solid #f00';  
      }
    }

    return(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox 
                value="uncontrolled" 
                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} 
                ref={myDivElement} onChange={handleClick}
                />
                {/* <input type="checkbox" ref={myDivElement}  onClick={handleClick}></input> */}
              </TableCell>
              <TableCell>
                <Grid container component="main">
                <Grid item xs={12} sm={2}>
                    <img src={avatar}></img>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography>
                        <ul>
                            <liz>{email}</liz>
                            <li>{firstname} {lastname}</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                <Button variant="outlined" color="primary" className="blockBtn" component={Link} to={"/realtors/edit"}> Edit</Button>
                <Button variant="outlined" color="primary" className="blockBtn" component={Link} to={"/realtors/1"}>View</Button>
                </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    )
}