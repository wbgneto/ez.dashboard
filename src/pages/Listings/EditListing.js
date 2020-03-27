import React, {useEffect, useRef, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import moment from "moment";
import ListingForm from "./ListingForm";
import {useDropzone} from "react-dropzone";


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

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

export default function EditListing({showSnackbar, history, match}) {
    const classes = useStyles();

    let [photos, setPhotos] = useState([]);
    const [formData, setFormData] = useState({});
    const [showDelete, setShowDelete] = useState(false);
    const [showSold, setShowSold] = useState(false);
    const [labelWidth, setLabelWidth] = useState(0);
    const [files, setFiles] = useState([]);

    const [sold, setSold] = useState({
        price: null,
        sold_at: null,
        status: 3,
    });

    const thumbs = files.map(file => (
        <div key={file.name} style={{margin: '0 8px 8px 0'}}>
            <div style={{...thumb, margin: 0}}>
                <div style={thumbInner}>
                    <img
                        src={file.preview}
                        style={img}
                    />
                </div>
            </div>
            <div>
                <Button color="secondary" fullWidth onClick={() => {
                    handleRemoveNewPhoto(file.preview)
                }}>Remove</Button>
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles([
                ...files,
                ...acceptedFiles.map(file => {
                    console.log(file);
                    file.preview = URL.createObjectURL(file);
                    return file;
                })
            ]);
        }
    });

    const handleRemoveNewPhoto = (preview) => {
        const newFiles = files.filter(file => file.preview !== preview);
        setFiles(newFiles);
    };

    const today = moment().format('YYYY-MM-DD');

    const handleDelete = async () => {
        await fetch(
            `http://api.easyrealtysystem.wmdd.ca/listings/${
                match.params.id
            }`,
            {
                method: 'delete'
            }
        );

        showSnackbar("success", "Listing deleted succesfully");
        history.push('/listings');
    };

    // API
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({
        address: {},
        features: [{}]
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `http://api.easyrealtysystem.wmdd.ca/listings/${
                match.params.id
            }`
        );
        const item = await fetchItem.json();
        setItem(item.data);
        setSold({
            ...sold,
            sold_at: item.data.sold_at ? item.data.sold_at : today,
            price: item.data.price,
        })
        setPhotos(item.data.photos.map(photo => (
            <div key={photo.id} style={{margin: '0 8px 8px 0'}}>
                <div style={{...thumb, margin: 0}} key={photo.id}>
                    <div style={thumbInner}>
                        <img
                            src={`http://api.easyrealtysystem.wmdd.ca/listings/photos/${photo.filename}`}
                            style={img}
                        />
                    </div>
                </div>
                <div>
                    <Button color="secondary" fullWidth onClick={() => {
                        handleRemovePhoto(photo.id)
                    }}>Remove</Button>
                </div>
            </div>
        )));
    };

    const handleRemovePhoto = async (photoId) => {
        await fetch(
            `http://api.easyrealtysystem.wmdd.ca/listings/${match.params.id}/photos/${photoId}`,
            {
                method: 'delete'
            }
        );
        await fetchItem();
    };

    const handleToggleStatus = async (status) => {
        let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/listings/${
            match.params.id
        }`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status})
        });

        if (response.status === 200) {
            setItem({
                ...item,
                status
            });
        }
    };

    const handleSold = async () => {
        let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/listings/${
            match.params.id
        }`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sold)
        });

        response = await response.json();

        if (response.status_code === 200) {
            setShowSold(false);
            setItem({
                ...item,
                ...sold
            });
            showSnackbar("success", "Listing set to sold successfully");
        }
    };

    const save = async () => {
        let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/listings/${match.params.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...formData})
        });

        response = await response.json();

        if (response.status_code === 200) {
            if (files.length) {
                uploadFiles(match.params.id);
            } else {
                showSnackbar("success", "Listing edited successfully");
                history.push('/listings');
            }
        } else {
            showSnackbar("error", "There was an error editing this listing");
        }
    };

    const uploadFiles = async (listingId) => {
        const formData = new FormData();

        files.forEach(file => {
            formData.append('files', file, file.name);
        });

        let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/listings/${listingId}/photos`, {
            method: 'post',
            body: formData
        });

        response = await response.json();

        if (response.status_code === 200) {
            showSnackbar("success", "Listing edited successfully");
            history.push('/listings');
        } else {
            showSnackbar("error", "There was an error editing this listing");
        }
    };

    return (
        <div className={classes.root}>
            <Typography className="title">Listings</Typography>
            <Paper className={classes.paper}>
                <div>
                    <div className="backtolist" style={{float: 'left'}}>
                        <Tooltip title="" component={Link} to={"/Listings"}>
                            <IconButton aria-label="back to list">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 200 200">
                                    <g id="Group_1444" data-name="Group 1444" transform="translate(-945 -5840)">
                                        <g id="Group_1441" data-name="Group 1441" transform="translate(266 1)">
                                            <path id="Subtraction_23" data-name="Subtraction 23"
                                                  d="M487,945H307a10.011,10.011,0,0,1-10-10V755a10.011,10.011,0,0,1,10-10H487a10.011,10.011,0,0,1,10,10V935A10.011,10.011,0,0,1,487,945ZM327,765a10.011,10.011,0,0,0-10,10V915a10.011,10.011,0,0,0,10,10H467a10.011,10.011,0,0,0,10-10V775a10.011,10.011,0,0,0-10-10Z"
                                                  transform="translate(382 5094)" fill="#2b879e"/>
                                        </g>
                                        <path id="Union_25" data-name="Union 25"
                                              d="M333.77,827.033,302.656,795.92a12.4,12.4,0,0,1,0-14.151l31.113-31.113a8,8,0,0,1,11.314,11.314l-26.874,26.874,26.874,26.874a8,8,0,0,1-11.314,11.314Z"
                                              transform="translate(720.686 5150.686)" fill="#2b879e"/>
                                    </g>
                                </svg>
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className="btnBox" style={{float: 'right'}}>
                        <Tooltip title="Delete">
                            <IconButton aria-label="delete" onClick={() => {
                                setShowDelete(true)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200">
                                    <g id="Group_1373" data-name="Group 1373" transform="translate(-944 -4320)">
                                        <g id="Group_73" data-name="Group 73" transform="translate(-1 265)">
                                            <rect id="Rectangle_108" data-name="Rectangle 108" width="34" height="162"
                                                  rx="10" transform="translate(964 4124) rotate(-90)" fill="#2b879e"/>
                                            <rect id="Rectangle_117" data-name="Rectangle 117" width="28" height="49"
                                                  rx="10" transform="translate(1030 4104) rotate(180)" fill="#2b879e"/>
                                            <rect id="Rectangle_118" data-name="Rectangle 118" width="28" height="49"
                                                  rx="10" transform="translate(1084 4104) rotate(180)" fill="#2b879e"/>
                                            <rect id="Rectangle_119" data-name="Rectangle 119" width="28" height="77"
                                                  rx="10" transform="translate(1082.5 4055.5) rotate(90)"
                                                  fill="#2b879e"/>
                                            <rect id="Rectangle_112" data-name="Rectangle 112" width="28" height="111"
                                                  rx="10" transform="translate(993 4255) rotate(-90)" fill="#2b879e"/>
                                            <rect id="Rectangle_114" data-name="Rectangle 114" width="12" height="87"
                                                  rx="6" transform="translate(1035.5 4214.5) rotate(180)"
                                                  fill="#2b879e"/>
                                            <rect id="Rectangle_115" data-name="Rectangle 115" width="12" height="87"
                                                  rx="6" transform="translate(1051.5 4214.5) rotate(180)"
                                                  fill="#2b879e"/>
                                            <rect id="Rectangle_116" data-name="Rectangle 116" width="12" height="87"
                                                  rx="6" transform="translate(1067.5 4214.5) rotate(180)"
                                                  fill="#2b879e"/>
                                            <rect id="Rectangle_109" data-name="Rectangle 109" width="28" height="159"
                                                  rx="10" transform="translate(1014 4255) rotate(180)" fill="#2b879e"/>
                                            <rect id="Rectangle_111" data-name="Rectangle 111" width="28" height="155"
                                                  rx="10" transform="translate(1104 4255) rotate(180)" fill="#2b879e"/>
                                        </g>
                                        <rect id="Rectangle_170" data-name="Rectangle 170" width="200" height="200"
                                              transform="translate(944 4320)" fill="none"/>
                                    </g>
                                </svg>
                            </IconButton>
                        </Tooltip>
                        {item.status == 1 &&
                        <Tooltip title="Hide">
                            <IconButton aria-label="hide" onClick={() => {
                                handleToggleStatus(0)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200">
                                    <g id="Group_1364" data-name="Group 1364" transform="translate(-144 -4805)">
                                        <g id="Group_75" data-name="Group 75" transform="translate(144 4805)">
                                            <g id="Group_74" data-name="Group 74" transform="translate(3.469 22.496)">
                                                <path id="Union_16" data-name="Union 16"
                                                      d="M76.682,153.062a98.568,98.568,0,0,1-35.429-14.894,99.281,99.281,0,0,1-35.9-43.547A98.507,98.507,0,0,1,0,77.978c.033-.147.067-.3.1-.442-.034-.147-.068-.3-.1-.442A98.377,98.377,0,0,1,14.491,43.639,99.165,99.165,0,0,1,187.944,60.452,98.4,98.4,0,0,1,193.3,77.094c-.033.147-.067.3-.1.442.034.147.068.295.1.442a98.379,98.379,0,0,1-14.491,33.455,99.373,99.373,0,0,1-43.592,35.861,98.7,98.7,0,0,1-18.6,5.767,100.154,100.154,0,0,1-39.937,0ZM31.046,83.779a71.259,71.259,0,0,0,131.207,0q1.3-3.078,2.305-6.243-1-3.163-2.305-6.243a71.259,71.259,0,0,0-131.207,0q-1.3,3.078-2.305,6.243Q29.743,80.7,31.046,83.779Z"
                                                      transform="translate(0 0)" fill="#2b879e"/>
                                                <rect id="Rectangle_142" data-name="Rectangle 142" width="63"
                                                      height="63" rx="31.5" transform="translate(65.588 45.595)"
                                                      fill="#2b879e"/>
                                            </g>
                                            <rect id="Rectangle_143" data-name="Rectangle 143" width="27.886"
                                                  height="254.957" rx="10" transform="translate(180.282 0) rotate(45)"
                                                  fill="#2b879e"/>
                                        </g>
                                        <rect id="Rectangle_171" data-name="Rectangle 171" width="199.182"
                                              height="199.182" transform="translate(144 4805)" fill="none"/>
                                    </g>
                                </svg>
                            </IconButton>
                        </Tooltip>
                        }
                        {item.status == 0 &&
                        <Tooltip title="Show">
                            <IconButton aria-label="show" onClick={() => {
                                handleToggleStatus(1)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200">
                                    <g id="Group_1445" data-name="Group 1445" transform="translate(-144 -4805)">
                                        <g id="Group_75" data-name="Group 75" transform="translate(144 4805)">
                                            <g id="Group_74" data-name="Group 74" transform="translate(3.469 22.496)">
                                                <path id="Union_16" data-name="Union 16"
                                                      d="M76.682,153.062a98.568,98.568,0,0,1-35.429-14.894,99.281,99.281,0,0,1-35.9-43.547A98.507,98.507,0,0,1,0,77.978c.033-.147.067-.3.1-.442-.034-.147-.068-.3-.1-.442A98.377,98.377,0,0,1,14.491,43.639,99.165,99.165,0,0,1,187.944,60.452,98.4,98.4,0,0,1,193.3,77.094c-.033.147-.067.3-.1.442.034.147.068.295.1.442a98.379,98.379,0,0,1-14.491,33.455,99.373,99.373,0,0,1-43.592,35.861,98.7,98.7,0,0,1-18.6,5.767,100.154,100.154,0,0,1-39.937,0ZM31.046,83.779a71.259,71.259,0,0,0,131.207,0q1.3-3.078,2.305-6.243-1-3.163-2.305-6.243a71.259,71.259,0,0,0-131.207,0q-1.3,3.078-2.305,6.243Q29.743,80.7,31.046,83.779Z"
                                                      transform="translate(0 0)" fill="#2b879e"/>
                                                <rect id="Rectangle_142" data-name="Rectangle 142" width="63"
                                                      height="63" rx="31.5" transform="translate(65.588 45.595)"
                                                      fill="#2b879e"/>
                                            </g>
                                        </g>
                                        <rect id="Rectangle_171" data-name="Rectangle 171" width="199.182"
                                              height="199.182" transform="translate(144 4805)" fill="none"/>
                                    </g>
                                </svg>
                            </IconButton>
                        </Tooltip>
                        }

                        {item.status < 2 && <Tooltip title="Sold">
                            <IconButton aria-label="sold" onClick={() => {
                                setShowSold(true);
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200">
                                    <g id="Group_1374" data-name="Group 1374" transform="translate(-409 -4322)">
                                        <g id="Group_1363" data-name="Group 1363" transform="translate(0 4)">
                                            <g id="Group_72" data-name="Group 72" transform="translate(3 253.98)">
                                                <path id="Union_3" data-name="Union 3"
                                                      d="M173.227,111.118,97.835,33.531l-75.39,77.588a9.8,9.8,0,0,1-14.143,0l-5.374-5.53a10.5,10.5,0,0,1,0-14.554L88.457,3.014A9.806,9.806,0,0,1,97.836.277a9.8,9.8,0,0,1,9.378,2.738l39.323,40.468V22.525a10,10,0,0,1,10-10h7.6a10,10,0,0,1,10,10V69.476a10.036,10.036,0,0,1-.236,2.168l18.841,19.39a10.5,10.5,0,0,1,0,14.554l-5.373,5.53a9.8,9.8,0,0,1-14.143,0Z"
                                                      transform="translate(407.651 4064.02)" fill="#2b879e"/>
                                                <path id="Path_36" data-name="Path 36"
                                                      d="M2.392,3.147,16.653,1.714a24.737,24.737,0,0,0,1.886,8.49q2.316,4.723,6.618,4.723A5.73,5.73,0,0,0,30.1,12.512a9.335,9.335,0,0,0,1.737-5.6A9.277,9.277,0,0,0,30.186,1.5Q28.532-.886,22.51-3.009,12.65-6.564,8.447-12.454,4.212-18.344,4.212-27.47A29.8,29.8,0,0,1,6.379-38.8,18.43,18.43,0,0,1,12.9-47.183q4.351-3.051,11.928-3.051,9.3,0,14.178,5.545t5.807,17.643L30.683-25.719q-.563-5.253-2.366-7.641a5.894,5.894,0,0,0-4.98-2.388A4.6,4.6,0,0,0,19.4-33.97a7.037,7.037,0,0,0-1.324,4.325A5.506,5.506,0,0,0,19.168-26.3q1.059,1.539,5.029,2.865,9.827,3.4,14.079,6.872a20.074,20.074,0,0,1,6.188,8.623A32.505,32.505,0,0,1,46.4,3.571a36.121,36.121,0,0,1-2.581,13.8,21.074,21.074,0,0,1-7.213,9.578,19.8,19.8,0,0,1-11.68,3.263q-12.375,0-17.14-7.641T2.392,3.147ZM52.058-9.96q0-19.049,6.618-29.662t18.43-10.612q12.11,0,18.662,10.427T102.32-10.6q0,13.637-2.862,22.366T91.185,25.353A19.44,19.44,0,0,1,77.7,30.208q-8.206,0-13.583-4.192T55.4,12.751Q52.058,3.677,52.058-9.96Zm14.989.106q0,11.78,2.73,16.927t7.428,5.147q4.831,0,7.478-5.041T87.33-10.915q0-10.984-2.763-16.051t-7.495-5.067q-4.533,0-7.279,5.147T67.047-9.854Zm43.346-39.054h14.989V9.726h23.394V28.882H110.393Zm45.4,0h22.269q6.585,0,10.638,2.865a21.394,21.394,0,0,1,6.7,8.225,44.778,44.778,0,0,1,3.838,12.47,91.187,91.187,0,0,1,1.191,15.07q0,12.47-1.77,19.341a36.793,36.793,0,0,1-4.914,11.514q-3.143,4.643-6.75,6.182a22.882,22.882,0,0,1-8.934,2.122H155.791ZM170.78-31.291v42.5h3.673q4.7,0,6.684-1.671t3.11-5.837q1.125-4.165,1.125-13.5,0-12.363-2.515-16.927t-8.338-4.563Z"
                                                      transform="translate(404.608 4233.812)" fill="#2b879e"/>
                                            </g>
                                            <rect id="Rectangle_168" data-name="Rectangle 168" width="200" height="200"
                                                  transform="translate(409 4318)" fill="none"/>
                                        </g>
                                    </g>
                                </svg>
                            </IconButton>
                        </Tooltip>
                        }
                    </div>
                </div>

                <Grid container spacing={2} className="marginT">
                    <Grid item xs={12} md={4}>
                        <section>
                            <div {...getRootProps({className: 'dropzone'})} style={{ textAlign: 'center', padding: "100px 15px", border: "1px dashed #eee"}}>
                                <input {...getInputProps()} id="files-input"/>
                                <p>Drag 'n' drop some photos here,<br /> or click to select photos</p>
                            </div>
                            <aside style={thumbsContainer}>
                                {photos}
                                {thumbs}
                            </aside>
                        </section>
                    </Grid>
                    <Grid item xs={12} md={8} className="inputEdit">
                        {item.id && <ListingForm onChange={(newState) => {
                            setFormData({...newState, photos: undefined})
                        }} initialData={{...item, realtor: (item.realtor ? item.realtor.id : '')}}/>}
                    </Grid>
                </Grid>

                <Grid item xs={12} md={12} className="marginT">
                    <Button variant="outlined" className="btnStyle" component={Link} to={"/Listings"}>Cancel</Button>
                    <Button variant="outlined" className="btnStyle btnOn" style={{float: 'right'}}
                            onClick={save}>Save</Button>
                </Grid>
            </Paper>

            {/* Delete Dialog */}
            <Dialog
                open={showDelete}
                onClose={() => {
                    setShowDelete(false);
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Remove listing "${item.title}"?`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please confirm if you wish to remove this listing permanently from the system, this is an
                        irreversible action.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setShowDelete(false);
                    }}>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} autoFocus className="delete-btn">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Sold Dialog */}
            <Dialog open={showSold} onClose={() => {
                setShowSold(false);
            }} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Set listing as sold</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Permanently change the status of this listing to sold.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="Price"
                        className={classes.formControl}
                        defaultValue={sold.price}
                        onChange={(event) => setSold({...sold, price: event.target.value})}
                        type="number"
                        fullWidth
                    />

                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <KeyboardDatePicker
                            format="YYYY-MM-DD"
                            margin="normal"
                            label="Sold At"
                            variant="outlined"
                            value={sold.sold_at}
                            defaultValue={today}
                            className={classes.formControl}
                            onChange={(value) => setSold({...sold, sold_at: value.format('YYYY-MM-DD')})}
                            style={{width: '100%'}}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setShowSold(false);
                    }}>
                        Cancel
                    </Button>
                    <Button onClick={handleSold} style={{color: '#2B879E'}}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}