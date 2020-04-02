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
import ListingCard from './ListingCard'
import CircularProgress from '@material-ui/core/CircularProgress';


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
    const [isLoading, setIsLoading] = useState(false);

    const fetchItems = async (filters) => {
      setIsLoading(true);

      const queryString = new URLSearchParams(filters);

      let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/listings?${queryString}`);
      response = await response.json();
      setIsLoading(false);
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
        status: '1',
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
                            className="selectBox"
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value={1}>Active</MenuItem>
                            <MenuItem value={2}>Sold</MenuItem>
                            <MenuItem value={0}>Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                {/* SearchBar */}
                <div className="element02">
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
                                placeholder="Search"
                                className="searchInput"
                                />
                        </div>
                    </div>
                </div>
                <div className="element03">
                    {/* Plus button */}
                    <Tooltip title="Add Property">
                        <IconButton aria-label="Add" component={Link} to={"/listings/new"} className="addBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
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
            {isLoading ? (
            <div className="loading">
                <CircularProgress disableShrink />
                <span>Loading...</span>
            </div>
            ) : (
            <Paper
                className={classes.paper}
                container
            >
                {items.length > 0 ?
                    items.map(item => (
                      <ListingCard
                          key={item.id}
                          id={item.id}
                          type={item.type}
                          photos={item.photos}
                          title={item.title}
                          status={item.status}
                          square_foot={item.square_foot}
                          price={item.price}
                      />
                  ))
                    :
                    <div style={{padding: 10}}>No listings found</div>
                }
            </Paper>
      )}
        </div>
    );
}

// Listing image References
// https://unsplash.com/photos/L7EwHkq1B2s
// https://unsplash.com/photos/CbZ4EDP__VQ
// https://unsplash.com/photos/f1Rd2HsoKnk
// https://unsplash.com/photos/tHkJAMcO3QE
// https://unsplash.com/photos/WQysERfYbog
// https://unsplash.com/photos/IYfp2Ixe9nM
// https://unsplash.com/photos/3LjBfGTbTJY
// https://unsplash.com/photos/M8ikiivUAOM
// https://unsplash.com/photos/MJeyFglfq9E
// https://unsplash.com/photos/h5QNclJUiA8
// https://unsplash.com/photos/rGgkCUpCiVE
// https://unsplash.com/photos/R-w5Q-4Mqm0
// https://unsplash.com/photos/1ddol8rgUH8
// https://unsplash.com/photos/z3QZ6gjGRt4
// https://unsplash.com/photos/_TPTXZd9mOo
// https://unsplash.com/photos/FqqiAvJejto
// https://unsplash.com/photos/02iWOgPEbU8
// https://unsplash.com/photos/qCjolcMFaLI
// https://unsplash.com/photos/MP0bgaS_d1c
// https://unsplash.com/photos/_hw4aUQ81ic
// https://unsplash.com/photos/FJZtZldA-uE
// https://unsplash.com/photos/sqc9yv6iueE
// https://unsplash.com/photos/H7SqlUp4JVE
// https://unsplash.com/photos/z51kvn9IRqw
// https://unsplash.com/photos/tAjm5YzFklI
// https://unsplash.com/photos/koH7IVuwRLw
// https://unsplash.com/photos/bx2ttjQsamc
// https://unsplash.com/photos/oNThRU9PUfk