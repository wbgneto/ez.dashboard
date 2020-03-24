import React, {useRef, useState} from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import makeStyles from "@material-ui/core/styles/makeStyles";

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
        "padding-bottom": "8px !important",
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
export default function RealtorForm({ onChange, initialData}) {
    const classes = useStyles();
    // selectBox

    const [state, setState] = useState(initialData || {
        name: '',
        email: '',
        phone: '',
    });

    // Tell parent component about the form data
    React.useEffect(() => {
        onChange(state);
    }, [state]);

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };
    
    return (
        <div className={classes.root}>
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    onChange={handleChange}
                    value={state.name}
                    className={classes.formControl}/>

                <TextField label="Email"
                    variant="outlined"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    className={classes.formControl}/>

                <TextField label="Phone"
                    variant="outlined"
                    name="phone"
                    value={state.phone}
                    onChange={handleChange}
                    className={classes.formControl}/>
        </div>
    );
}