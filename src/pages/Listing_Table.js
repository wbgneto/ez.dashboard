import React, {useRef, useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';




export default function Listing_Table({id, status, photos, title, type, square_foot, price}) {
    //you can pass only (props) above and pass {props.status} below
    const myDivElement = useRef(null);
    const [forceUpdate,setForceUpdate] = useState(true);
  

return(
  <>
    <TableCell style={{width:'10px', padding:'0 8px'}}>
      <Checkbox
      value="uncontrolled"
      inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
      ref={myDivElement}
      />
      {/* <input type="checkbox" ref={myDivElement}  onClick={handleClick}></input> */}
    </TableCell>
    <TableCell>
      <Grid container component="main" className="tableGrid">
        <Grid item xs={12} md={3} className="tableElm01">
            {/* <img src={photos}></img> */}
            <img src="https://dummyimage.com/160x120/000/fff&text=Pictures"></img>
        </Grid>
        <Grid item xs={12} md={6} className="tableElm02">
            <Typography>
            <ul className="PropertyList">
              <li class="status">{status = 0 ?<em className="active"></em> : status = 1 ? <em className="inactive"></em>: <em className="sold"></em>}</li>
              <li><h3>{title}</h3></li>
              <li>Type : {type} Bed Room</li>
              <li>Size : {square_foot} sq</li>
              <li>Price : {price} CAD</li>
            </ul>
            </Typography>
        </Grid>
        <Grid item xs={12} md={3} className="tableElm03 btnWrapper">
          <div>
            <Button variant="outlined" color="primary" className="blockBtn btnStyle" component={Link} to={`/listings/edit/${id}`}> Edit</Button>
            <Button variant="outlined" color="primary" className="blockBtn btnStyle" component={Link} to={`/listings/${id}`}>View</Button>
          </div>
        </Grid>
      </Grid>
    </TableCell>
  </>
  )
}