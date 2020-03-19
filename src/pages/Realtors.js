import React, {useState, useEffect, useRef} from 'react';
import { fade, lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import Realtor_Table, {myDivElement} from './Realtor_Table'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
export {showIcon} from './Realtors';
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
  //showIcons
  const myToolElement = React.useRef(null);
  const showIcon = () => {
      myToolElement.current.style.display='block';
  }
   //API
   useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([])
  const fetchItems = async () => {
    const data = await fetch('http://api.easyrealtysystem.wmdd.ca/realtors');
    const items = await data.json();
    console.log(items.data);
    setItems(items.data)
  };
  return (
    <div className={classes.root}>
      <Typography className="title">Realtors</Typography>
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
              <div className="labelFix">
                <TextField className={classes.searchInput} id="outlined-search" label={"Search"} type="search" variant="outlined" />
              </div>
          </div>
        </div>
        <div className="element03">
          {/* Icons */}
          <Toolbar
          className="toolbar"
          ref={myToolElement}
          style={{display:'none'}}
          >
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200">
                <g id="Group_1373" data-name="Group 1373" transform="translate(-944 -4320)">
                  <g id="Group_73" data-name="Group 73" transform="translate(-1 265)">
                    <rect id="Rectangle_108" data-name="Rectangle 108" width="34" height="162" rx="10" transform="translate(964 4124) rotate(-90)" fill="#2B879E"/>
                    <rect id="Rectangle_117" data-name="Rectangle 117" width="28" height="49" rx="10" transform="translate(1030 4104) rotate(180)" fill="#2B879E"/>
                    <rect id="Rectangle_118" data-name="Rectangle 118" width="28" height="49" rx="10" transform="translate(1084 4104) rotate(180)" fill="#2B879E"/>
                    <rect id="Rectangle_119" data-name="Rectangle 119" width="28" height="77" rx="10" transform="translate(1082.5 4055.5) rotate(90)" fill="#2B879E"/>
                    <rect id="Rectangle_112" data-name="Rectangle 112" width="28" height="111" rx="10" transform="translate(993 4255) rotate(-90)" fill="#2B879E"/>
                    <rect id="Rectangle_114" data-name="Rectangle 114" width="12" height="87" rx="6" transform="translate(1035.5 4214.5) rotate(180)" fill="#2B879E"/>
                    <rect id="Rectangle_115" data-name="Rectangle 115" width="12" height="87" rx="6" transform="translate(1051.5 4214.5) rotate(180)" fill="#2B879E"/>
                    <rect id="Rectangle_116" data-name="Rectangle 116" width="12" height="87" rx="6" transform="translate(1067.5 4214.5) rotate(180)" fill="#2B879E"/>
                    <rect id="Rectangle_109" data-name="Rectangle 109" width="28" height="159" rx="10" transform="translate(1014 4255) rotate(180)" fill="#2B879E"/>
                    <rect id="Rectangle_111" data-name="Rectangle 111" width="28" height="155" rx="10" transform="translate(1104 4255) rotate(180)" fill="#2B879E"/>
                  </g>
                  <rect id="Rectangle_170" data-name="Rectangle 170" width="200" height="200" transform="translate(944 4320)" fill="none"/>
                </g>
              </svg>
            </IconButton>
          </Tooltip>
          <Tooltip title="Hide">
            <IconButton aria-label="hide">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200">
                <g id="Group_1364" data-name="Group 1364" transform="translate(-144 -4805)">
                  <g id="Group_75" data-name="Group 75" transform="translate(144 4805)">
                    <g id="Group_74" data-name="Group 74" transform="translate(3.469 22.496)">
                      <path id="Union_16" data-name="Union 16" d="M76.682,153.062a98.568,98.568,0,0,1-35.429-14.894,99.281,99.281,0,0,1-35.9-43.547A98.507,98.507,0,0,1,0,77.978c.033-.147.067-.3.1-.442-.034-.147-.068-.3-.1-.442A98.377,98.377,0,0,1,14.491,43.639,99.165,99.165,0,0,1,187.944,60.452,98.4,98.4,0,0,1,193.3,77.094c-.033.147-.067.3-.1.442.034.147.068.295.1.442a98.379,98.379,0,0,1-14.491,33.455,99.373,99.373,0,0,1-43.592,35.861,98.7,98.7,0,0,1-18.6,5.767,100.154,100.154,0,0,1-39.937,0ZM31.046,83.779a71.259,71.259,0,0,0,131.207,0q1.3-3.078,2.305-6.243-1-3.163-2.305-6.243a71.259,71.259,0,0,0-131.207,0q-1.3,3.078-2.305,6.243Q29.743,80.7,31.046,83.779Z" transform="translate(0 0)" fill="#2B879E"/>
                      <rect id="Rectangle_142" data-name="Rectangle 142" width="63" height="63" rx="31.5" transform="translate(65.588 45.595)" fill="#2B879E"/>
                    </g>
                    <rect id="Rectangle_143" data-name="Rectangle 143" width="27.886" height="254.957" rx="10" transform="translate(180.282 0) rotate(45)" fill="#2B879E"/>
                  </g>
                  <rect id="Rectangle_171" data-name="Rectangle 171" width="199.182" height="199.182" transform="translate(144 4805)" fill="none"/>
                </g>
              </svg>
            </IconButton>
          </Tooltip>
          </Toolbar>
          {/* Plus button */}
          <Tooltip title="Add Property">
            <IconButton aria-label="Add" component={Link} to={"/newRealtor"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 200 200">
                  <g id="Group_1435" data-name="Group 1435" transform="translate(-679 -5839)">
                    <path id="Subtraction_23" data-name="Subtraction 23" d="M487,945H307a10.011,10.011,0,0,1-10-10V755a10.011,10.011,0,0,1,10-10H487a10.011,10.011,0,0,1,10,10V935A10.011,10.011,0,0,1,487,945ZM327,765a10.011,10.011,0,0,0-10,10V915a10.011,10.011,0,0,0,10,10H467a10.011,10.011,0,0,0,10-10V775a10.011,10.011,0,0,0-10-10Z" transform="translate(382 5094)" fill="#2B879E"/>
                    <g id="Group_1440" data-name="Group 1440">
                      <g id="Group_79" data-name="Group 79" transform="translate(-1 1293)">
                        <rect id="Rectangle_152" data-name="Rectangle 152" width="16" height="87" rx="8" transform="translate(772 4604)" fill="#2B879E"/>
                        <rect id="Rectangle_153" data-name="Rectangle 153" width="16" height="87" rx="8" transform="translate(736 4656) rotate(-90)" fill="#2B879E"/>
                      </g>
                    </g>
                  </g>
                </svg>
            </IconButton>
          </Tooltip>
        </div>
      </div>
      {/* "toolbarWrap" ends*/}
      <Paper
      className={classes.paper}
      container
      >
        <Table>
          <TableBody>
          {items.map( item =>
           <TableRow>
              <Realtor_Table
                key={item.id}
                id={item.id}
                name={item.name}
                phone={item.phone}
                email={item.email}
                address={item.address}
                />
           </TableRow>
          )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}