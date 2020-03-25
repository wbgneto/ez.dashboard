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
import RealtorForm from "./RealtorForm";
import {useDropzone} from "react-dropzone";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

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
    backgroundColor:'#eee',
    borderRadius: '5px',
    width:'100%',
    padding:'26% 0',
  }
}));
export default function EditRealtor ({showSnackbar, match, history}) {
  const classes = useStyles();

  const [formData, setFormData] = useState({});
  const [showDelete, setShowDelete] = useState(false);
  const [files, setFiles] = useState([]);

  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
        <div style={thumbInner}>
            <img
                src={file.preview}
                style={img}
            />
        </div>
    </div>
  ));


  //useDropZone
  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
          setFiles(acceptedFiles.map(file => Object.assign(file, {
              preview: URL.createObjectURL(file)
          })));
      }
  });

  //delete
  const handleDelete = async () => {
    await fetch(
        `http://api.easyrealtysystem.wmdd.ca/realtors/${
            match.params.id
        }`,
        {
            method: 'delete'
        }
    );

    showSnackbar("success", "Realtor deleted succesfully");
    history.push('/realtors');
  };

   // API
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);
  
  const [item, setItem] = useState({
    data : {}
  });
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://api.easyrealtysystem.wmdd.ca/realtors/${
        match.params.id
      }`
    );
    const item = await fetchItem.json();
    setItem(item.data);
    //setPhoto
  }

  const handleRemovePhoto = async (photoId) => {
    await fetch(
        `http://api.easyrealtysystem.wmdd.ca/realtors/${match.params.id}/photos/${photoId}`,
        {
            method: 'delete'
        }
    );
    await fetchItem();
  };
  

  const save = async () => {
    let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/realtors/${match.params.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...formData})
    });

    response = await response.json();

    if (response.status_code === 200) {
        // if (files.length) {
        //     uploadFiles(match.params.id);
        // } else {
            showSnackbar("success", "Realtor edited successfully");
            history.push('/realtors');
        // }
    } else {
        showSnackbar("error", "There was an error editing this realtor");
    }
};

const uploadFiles = async (realtorId) => {
  const formData = new FormData();

  files.forEach(file => {
      formData.append('files', file, file.name);
  });

  let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/realtors/${realtorId}/photos`, {
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
      <Typography className="title">Realtors</Typography>
      <Paper className={classes.paper}>
        <div>
        <div className="backtolist" style={{float: 'left'}}>
            <Tooltip title="" component={Link} to={"/Realtors"}>
                <IconButton aria-label="back to list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 200 200">
                        <g id="Group_1444" data-name="Group 1444" transform="translate(-945 -5840)">
                            <g id="Group_1441" data-name="Group 1441" transform="translate(266 1)">
                                <path id="Subtraction_23" data-name="Subtraction 23"
                                  d="M487,945H307a10.011,10.011,0,0,1-10-10V755a10.011,10.011,0,0,1,10-10H487a10.011,10.011,0,0,1,10,10V935A10.011,10.011,0,0,1,487,945ZM327,765a10.011,10.011,0,0,0-10,10V915a10.011,10.011,0,0,0,10,10H467a10.011,10.011,0,0,0,10-10V775a10.011,10.011,0,0,0-10-10Z"
                                  transform="translate(382 5094)" fill="#2B879E"/>
                            </g>
                            <path id="Union_25" data-name="Union 25"
                              d="M333.77,827.033,302.656,795.92a12.4,12.4,0,0,1,0-14.151l31.113-31.113a8,8,0,0,1,11.314,11.314l-26.874,26.874,26.874,26.874a8,8,0,0,1-11.314,11.314Z"
                              transform="translate(720.686 5150.686)" fill="#2B879E"/>
                        </g>
                    </svg>
                </IconButton>
            </Tooltip>
          </div>
          <div className="btnBox" style={{float:'right'}}>
          <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={() => {
                  setShowDelete(true)
              }}>
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
                  {thumbs}
              </aside>
          </section>
          </Grid>
          <Grid item xs={12} md={8} className="inputEdit">
            { item.id && 
              <RealtorForm 
                 onChange={(newState) => { 
                   setFormData({...newState, photos: undefined})}} 
                   initialData={{...item }}
            />}
          </Grid>
          <Grid item xs={12} md={12} className="marginT">
            <div>
              <Button variant="outlined" className="btnStyle" component={Link} to={"/Realtors"}>Cancel</Button>
              <Button variant="outlined" className="btnStyle btnOn" component={Link} to={"/Realtors"} style={{float: 'right'}}
                            onClick={save}>Save</Button>
            </div>
          </Grid>
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
          <DialogTitle id="alert-dialog-title">{`Remove listing "${item.name}"?`}</DialogTitle>
          <DialogContent>
              <DialogContentText id="alert-dialog-description">
                  Please confirm if you wish to remove this realtor permanently from the system, this is an
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
    </div>
  );
}





