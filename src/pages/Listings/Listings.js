import React, {useEffect, useState} from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
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
import {Link} from 'react-router-dom';
import ListingItem from './ListingItem'
import Grid from '@material-ui/core/Grid';


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
        '& label.Mui-focused': {
            color: '#2B879E',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#2B879E',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#2B879E',
            },
            '&:hover fieldset': {
                borderColor: '#2B879E',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#2B879E',
            },
        },
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
        '& label.Mui-focused': {
            color: '#2B879E',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#2B879E',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#2B879E',
            },
            '&:hover fieldset': {
                borderColor: '#2B879E',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#2B879E',
            },
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
        color: '#2B879E',
    },

    searchInput: {
        width: 200,
        [theme.breakpoints.down('md')]: {
            width: '100%',
            paddingRight: 0,
        },
    },
}));


export default function Listings() {
    const classes = useStyles();


    const fetchItems = async (filters) => {
      const queryString = new URLSearchParams(filters);

      let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/listings?${queryString}`);
      response = await response.json();

      return response.data;
    };

    // selectBox
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleFilter = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value
        });
    };

    //Fetch API
    const [items, setItems] = useState([]);

    const [filters, setFilters] = useState({
        status: '',
        title: '',
    });

    useEffect(() => {
        fetchItems(filters).then(items => setItems(items));
    }, [filters]);

    return (
        <div className={classes.root}>
            <Typography className="title">Listings</Typography>
            <div className="toolbarWrap">
                {/* SelectBox */}
                <div className="element01">
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel} id="status">
                            Status
                        </InputLabel>
                        <Select
                            labelId="status"
                            name="status"
                            onChange={handleFilter}
                            value={filters.status}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value={0}>Active</MenuItem>
                            <MenuItem value={1}>Inactive</MenuItem>
                            <MenuItem value={2}>Sold</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                {/* SearchBar */}
                <div className="element02" style={{paddingBottom: 10 + 'px'}}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <div className="labelFix">
                            <TextField
                                className={classes.searchInput}
                                onChange={handleFilter}
                                id="outlined-search"
                                type="search"
                                name="title"
                                value={filters.title}
                                variant="outlined"
                                placeholder="Search"/>
                        </div>
                    </div>
                </div>
                <div className="element03">
                    {/* Plus button */}
                    <Tooltip title="Add Property">
                        <IconButton aria-label="Add" component={Link} to={"/listings/new"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 200 200">
                                <g id="Group_1435" data-name="Group 1435" transform="translate(-679 -5839)">
                                    <path id="Subtraction_23" data-name="Subtraction 23"
                                          d="M487,945H307a10.011,10.011,0,0,1-10-10V755a10.011,10.011,0,0,1,10-10H487a10.011,10.011,0,0,1,10,10V935A10.011,10.011,0,0,1,487,945ZM327,765a10.011,10.011,0,0,0-10,10V915a10.011,10.011,0,0,0,10,10H467a10.011,10.011,0,0,0,10-10V775a10.011,10.011,0,0,0-10-10Z"
                                          transform="translate(382 5094)" fill="#2b879e"/>
                                    <g id="Group_1440" data-name="Group 1440">
                                        <g id="Group_79" data-name="Group 79" transform="translate(-1 1293)">
                                            <rect id="Rectangle_152" data-name="Rectangle 152" width="16" height="87"
                                                  rx="8" transform="translate(772 4604)" fill="#2b879e"/>
                                            <rect id="Rectangle_153" data-name="Rectangle 153" width="16" height="87"
                                                  rx="8" transform="translate(736 4656) rotate(-90)" fill="#2b879e"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>

            <Paper
                className={classes.paper}
                container
            >
                {items.length > 0 ?
                    items.map(item => (
                      <ListingItem
                          key={item.id}
                          id={item.id}
                          status={item.status}
                          photos={item.photos}
                          title={item.title}
                          square_foot={item.square_foot}
                          price={item.price}
                      />
                  ))
                    :
                    <div style={{padding: 10}}>No listings found</div>
                }
            </Paper>
        </div>
    );
}