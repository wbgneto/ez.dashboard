import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import RealtorForm from "./RealtorForm";
import {useDropzone} from 'react-dropzone';

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

export default function CreateRealtor(props) {
  const classes = useStyles();

  const [formData, setFormData] = useState({});

  const [avatar, setAvatar] = useState({});

  const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      multiple: false,
      onDrop: files => {
          setAvatar(Object.assign(files[0], {
              preview: URL.createObjectURL(files[0])
          }));
      }
  });

    useEffect(() => () => {
        URL.revokeObjectURL(avatar.preview)
    }, [avatar]);

const save = async () => {
    let response = await fetch('http://api.easyrealtysystem.wmdd.ca/realtors', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...formData, status: 1})
    });

    response = await response.json();

    if (response.status === 200 || response.status === 201) {
        if (avatar.preview) {
            return uploadAvatar(response.data.id);
        }

        props.showSnackbar("success", "Realtor created successfully");
        props.history.push('/realtors');
    } else {
        props.showSnackbar("error", "Please fill all fields");
    }
};

const uploadAvatar = async (realtorId) => {
    const formData = new FormData();
    formData.append('avatar', avatar, avatar.name);

    let response = await fetch(`http://api.easyrealtysystem.wmdd.ca/realtors/${realtorId}/avatar`, {
        method: 'post',
        body: formData
    });

    response = await response.json();

    if (response.status_code === 200) {
        props.showSnackbar("success", "Realtor created successfully");
        props.history.push('/realtors');
    } else {
        props.showSnackbar("error", "There was an error uploading the photos");
    }
};

  return (
    <div className={classes.root}>
      <Typography className="title">Realtors</Typography>

      <Paper className={classes.paper}>
                <Grid container spacing={2} className="marginT">
                    <Grid item xs={12} md={4}>
                        <section>
                            <div {...getRootProps()} style={{ textAlign: 'center', padding: 100, border: "1px dashed #eee"}}>
                                <input {...getInputProps()} id="files-input"/>
                                <div style={{textAlign: 'center', marginBottom: 12}}>
                                    { avatar && <img
                                        src={avatar.preview}
                                        style={{ maxWidth: "100%", maxHeight: 200}}
                                    />}
                                </div>
                                <p>Upload Avatar</p>
                            </div>
                        </section>
                    </Grid>
                    <Grid item xs={12} md={8} className="inputEdit">
                        <RealtorForm onChange={setFormData}/>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={12} className="marginT">
                    <Button variant="outlined" className="btnStyle" component={Link} to={"/Realtors"}>Cancel</Button>
                    <Button variant="outlined" className="btnStyle btnOn" style={{float: 'right'}}
                            onClick={save}>Save</Button>
                </Grid>
            </Paper>
    </div>
  );
}