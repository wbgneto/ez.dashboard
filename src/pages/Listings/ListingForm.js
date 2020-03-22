import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListingType from "../../data/ListingType";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        flexGrow: 1,
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
        padding: '20px',
        position: 'relative',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
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
    input: {
        display: 'none',
    },
    uploadBtn: {
        backgroundColor: '#eee',
        borderRadius: '5px',
        width: '100%',
        padding: '26% 0',
    }
}));
export default function ListingForm({ onChange }) {
    const classes = useStyles();
    // selectBox
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    const [realtors, setRealtors] = React.useState([]);
    const [state, setState] = React.useState({
        title: '',
        description: '',
        price: '',
        realtor: '',
        type: '',
        square_foot: '',
        address: {
            street: '',
            number: '',
            postal_code: '',
            country: 'CA',
            province: 'British Columbia',
            city: 'Vancouver',
        }
    });

    const fetchRealtors = async () => {
        let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/realtors`);
        response = await response.json();
        return response.data;
    };

    // Fetch realtors on mount
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
        fetchRealtors().then(realtors => setRealtors(realtors));
    }, []);

    // Tell parent component about the form data
    React.useEffect(() => {
        onChange(state);
    }, [state]);

    const handleFeature = (event) => {
        let features = state.features ? [...state.features] : [];

        const exists = features.findIndex(feature => {
            return feature.type == event.target.name;
        });

        if (exists !== -1) {
            features.splice(exists, 1);
        }

        features.push({
            type: event.target.name,
            value: event.target.value,
        });

        setState({
            ...state,
            features
        });
    };

    const handleAddress = (event) => {
        setState({
            ...state,
            address: {
                ...state.address,
                [event.target.name]: event.target.value
            }
        });
    };

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className={classes.root}>
                <TextField
                    label="House Title"
                    name="title"
                    variant="outlined"
                    onChange={handleChange}
                    value={state.title}
                    className={classes.formControl}/>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={inputLabel} id="realtor-input">
                        Realtor
                    </InputLabel>
                    <Select
                        labelId="realtor-input"
                        name="realtor"
                        onChange={handleChange}
                        value={state.realtor}
                        labelWidth={labelWidth}
                        required
                    >
                        {
                            realtors.map(realtor => {
                                return <MenuItem key={realtor.id} value={realtor.id}>{realtor.name}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={inputLabel} id="type-input">
                        Type
                    </InputLabel>
                    <Select
                        labelId="type-input"
                        onChange={handleChange}
                        value={state.type}
                        name="type"
                        labelWidth={labelWidth}
                    >
                        {
                            ListingType.map(type => {
                                return <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                <TextField label="Price"
                           variant="outlined"
                           name="price"
                           value={state.price}
                           onChange={handleChange}
                           className={classes.formControl}/>
            <Grid container spacing={1} className="twoColumnGrid">
                <Grid item xs={12} sm={6}>
                        <TextField label="Size"
                                   variant="outlined"
                                   name="square_foot"
                                   value={state.square_foot}
                                   onChange={handleChange}
                                   className={classes.formControl}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                        <TextField label="Washrooms"
                                   variant="outlined"
                                   name="1"
                                   type="number"
                                   onChange={handleFeature}
                                   className={classes.formControl}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                        <TextField label="Bedroom"
                                   variant="outlined"
                                   name="0"
                                   type="number"
                                   onChange={handleFeature}
                                   className={classes.formControl}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                        <TextField label="Garage"
                                   variant="outlined"
                                   name="2"
                                   type="number"
                                   onChange={handleFeature}
                                   className={classes.formControl}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                        <TextField label="Street"
                                   variant="outlined"
                                   name="street"
                                   value={state.address.street}
                                   onChange={handleAddress}
                                   className={classes.formControl}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                        <TextField label="Number"
                                   variant="outlined"
                                   name="number"
                                   value={state.address.number}
                                   onChange={handleAddress}
                                   className={classes.formControl}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                        <TextField label="City"
                                   variant="outlined"
                                   name="city"
                                   value={state.address.city}
                                   onChange={handleAddress}
                                   className={classes.formControl}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                        <TextField label="Province"
                                   variant="outlined"
                                   name="province"
                                   value={state.address.province}
                                   onChange={handleAddress}
                                   className={classes.formControl}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                        <TextField label="Country"
                                   variant="outlined"
                                   name="country"
                                   value={state.address.country}
                                   onChange={handleAddress}
                                   className={classes.formControl}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                        <TextField label="Postal Code"
                                   variant="outlined"
                                   name="postal_code"
                                   value={state.address.postal_code}
                                   onChange={handleAddress}
                                   className={classes.formControl}/>
                </Grid>
            </Grid>
            <div>
                <TextField
                    label="Description"
                    multiline
                    rows="4"
                    variant="outlined"
                    name="description"
                    onChange={handleChange}
                    value={state.description}
                    className={classes.formControl}/>
            </div>
        </div>
    );
}