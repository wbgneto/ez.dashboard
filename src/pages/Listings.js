import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { fade, lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Listing_Table, {myDivElement} from './Listing_Table'




const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  searchInput: {
    width : 200,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      paddingRight: 0,
    },
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);

   // selecBox
   const [age, setAge] = React.useState('');
   const inputLabel = React.useRef(null);
   const [labelWidth, setLabelWidth] = React.useState(0);
   React.useEffect(() => {
     setLabelWidth(inputLabel.current.offsetWidth);
   }, []);
   const handleChange = event => {
     setAge(event.target.value);
   };

   // API
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch('/listings.json')
        .then(res => res.json())
        .catch(err => console.log(err, 'Fetch error'))
      )
    }
    fetchData();
  },[])
 //
 const myToolElement = React.useRef(null);

  return (
    <div className={classes.root}>
      <Typography className="title">Listings</Typography>
      <div className="toolbarWrap">
        {/* SelectBox */}
        <div className="element01">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Option
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={handleChange}
            labelWidth={labelWidth}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
            <MenuItem value="Sold">Sold</MenuItem>
          </Select>
        </FormControl>
        </div>

        {/* SearchBar */}
        <div className="element02">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <div class="labelFix">
                <TextField className={classes.searchInput} id="outlined-search" label={"Search"} type="search" variant="outlined" />
              </div>
          </div>
        </div>
        <div className="element03">
          {/* Icons */}
          <Toolbar 
          className="toolbar" 
          ref={myToolElement} 
          >
            <Tooltip title="Delete">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Hide">
              <IconButton aria-label="hide">
                <VisibilityOffIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
          {/* Plus button */}
          <IconButton aria-label="Add" component={Link} to={"/newlisting"}>
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      {/* "toolbarWrap" ends*/}
      <Paper 
      className={classes.paper}
      container
      >
        {users.map( users =>
        <Grid item xs={12}>
          <Listing_Table
          status={users.status}
          title={users.title}
          square_foot={users.square_foot}
          price={users.price}
          />
        </Grid>
        )}
      </Paper>
    </div>
  );
}