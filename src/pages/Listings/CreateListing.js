import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import ListingForm from "./ListingForm";


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

export default function CreateListing() {
    const classes = useStyles();

    const [formData, setFormData] = React.useState({});

    const save = () => {
        fetch('http://api.easyrealtysystem.wmdd.ca/listings', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...formData, status: 1})
        })
            .then(response => response.json())
            .then(response => {
                if (response.status_code === 200) {
                    this.props.history.push('/listings');
                }
            });
    };

    return (
        <div className={classes.root}>
            <Typography className="title">Listings</Typography>
            <Paper className={classes.paper}>
                <Grid container spacing={2} className="marginT">
                    <Grid item xs={12} md={4} className="center">
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <p>Add information about this property</p>
                    </Grid>
                    <Grid item xs={12} md={8} className="inputEdit">
                        <ListingForm onChange={setFormData} initialData={{title: 'oi'}}/>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={12} className="marginT">
                    <Button variant="outlined" className="btnStyle" component={Link} to={"/Listings"}>Cancel</Button>
                    <Button variant="outlined" className="btnStyle btnOn" style={{float: 'right'}}
                            onClick={save}>Save</Button>
                </Grid>
            </Paper>
        </div>
    );
}