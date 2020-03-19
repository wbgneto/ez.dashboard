import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';

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

export default function CenteredGrid({match}) {
  const classes = useStyles();
  // selectBox
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
  useEffect(() => { 
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
    address : {},
    features : [ {} ]
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://api.easyrealtysystem.wmdd.ca/listings/${
        match.params.id
      }`
    );
    const item = await fetchItem.json();
    setItem(item.data);
    console.log(item.data);
  }




  return (
    <div className={classes.root}>
      <Typography className="title">Listings</Typography>
      <Paper className={classes.paper}>
        <div>
          <div className="backtolist" style={{float:'left'}}>
          <Tooltip title="" component={Link} to={"/Listings"}>
            <IconButton aria-label="back to list">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 200 200">
              <g id="Group_1444" data-name="Group 1444" transform="translate(-945 -5840)">
                <g id="Group_1441" data-name="Group 1441" transform="translate(266 1)">
                  <path id="Subtraction_23" data-name="Subtraction 23" d="M487,945H307a10.011,10.011,0,0,1-10-10V755a10.011,10.011,0,0,1,10-10H487a10.011,10.011,0,0,1,10,10V935A10.011,10.011,0,0,1,487,945ZM327,765a10.011,10.011,0,0,0-10,10V915a10.011,10.011,0,0,0,10,10H467a10.011,10.011,0,0,0,10-10V775a10.011,10.011,0,0,0-10-10Z" transform="translate(382 5094)" fill="#2b879e"/>
                </g>
                <path id="Union_25" data-name="Union 25" d="M333.77,827.033,302.656,795.92a12.4,12.4,0,0,1,0-14.151l31.113-31.113a8,8,0,0,1,11.314,11.314l-26.874,26.874,26.874,26.874a8,8,0,0,1-11.314,11.314Z" transform="translate(720.686 5150.686)" fill="#2b879e"/>
              </g>
            </svg>
            </IconButton>
          </Tooltip>
          </div>
          <div className="btnBox" style={{float:'right'}}>
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200">
                <g id="Group_1373" data-name="Group 1373" transform="translate(-944 -4320)">
                  <g id="Group_73" data-name="Group 73" transform="translate(-1 265)">
                    <rect id="Rectangle_108" data-name="Rectangle 108" width="34" height="162" rx="10" transform="translate(964 4124) rotate(-90)" fill="#2b879e"/>
                    <rect id="Rectangle_117" data-name="Rectangle 117" width="28" height="49" rx="10" transform="translate(1030 4104) rotate(180)" fill="#2b879e"/>
                    <rect id="Rectangle_118" data-name="Rectangle 118" width="28" height="49" rx="10" transform="translate(1084 4104) rotate(180)" fill="#2b879e"/>
                    <rect id="Rectangle_119" data-name="Rectangle 119" width="28" height="77" rx="10" transform="translate(1082.5 4055.5) rotate(90)" fill="#2b879e"/>
                    <rect id="Rectangle_112" data-name="Rectangle 112" width="28" height="111" rx="10" transform="translate(993 4255) rotate(-90)" fill="#2b879e"/>
                    <rect id="Rectangle_114" data-name="Rectangle 114" width="12" height="87" rx="6" transform="translate(1035.5 4214.5) rotate(180)" fill="#2b879e"/>
                    <rect id="Rectangle_115" data-name="Rectangle 115" width="12" height="87" rx="6" transform="translate(1051.5 4214.5) rotate(180)" fill="#2b879e"/>
                    <rect id="Rectangle_116" data-name="Rectangle 116" width="12" height="87" rx="6" transform="translate(1067.5 4214.5) rotate(180)" fill="#2b879e"/>
                    <rect id="Rectangle_109" data-name="Rectangle 109" width="28" height="159" rx="10" transform="translate(1014 4255) rotate(180)" fill="#2b879e"/>
                    <rect id="Rectangle_111" data-name="Rectangle 111" width="28" height="155" rx="10" transform="translate(1104 4255) rotate(180)" fill="#2b879e"/>
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
                        <path id="Union_16" data-name="Union 16" d="M76.682,153.062a98.568,98.568,0,0,1-35.429-14.894,99.281,99.281,0,0,1-35.9-43.547A98.507,98.507,0,0,1,0,77.978c.033-.147.067-.3.1-.442-.034-.147-.068-.3-.1-.442A98.377,98.377,0,0,1,14.491,43.639,99.165,99.165,0,0,1,187.944,60.452,98.4,98.4,0,0,1,193.3,77.094c-.033.147-.067.3-.1.442.034.147.068.295.1.442a98.379,98.379,0,0,1-14.491,33.455,99.373,99.373,0,0,1-43.592,35.861,98.7,98.7,0,0,1-18.6,5.767,100.154,100.154,0,0,1-39.937,0ZM31.046,83.779a71.259,71.259,0,0,0,131.207,0q1.3-3.078,2.305-6.243-1-3.163-2.305-6.243a71.259,71.259,0,0,0-131.207,0q-1.3,3.078-2.305,6.243Q29.743,80.7,31.046,83.779Z" transform="translate(0 0)" fill="#2b879e"/>
                        <rect id="Rectangle_142" data-name="Rectangle 142" width="63" height="63" rx="31.5" transform="translate(65.588 45.595)" fill="#2b879e"/>
                      </g>
                      <rect id="Rectangle_143" data-name="Rectangle 143" width="27.886" height="254.957" rx="10" transform="translate(180.282 0) rotate(45)" fill="#2b879e"/>
                    </g>
                    <rect id="Rectangle_171" data-name="Rectangle 171" width="199.182" height="199.182" transform="translate(144 4805)" fill="none"/>
                  </g>
                </svg>
              </IconButton>
            </Tooltip>
            <Tooltip title="Sold">
              <IconButton aria-label="sold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200">
                <g id="Group_1374" data-name="Group 1374" transform="translate(-409 -4322)">
                  <g id="Group_1363" data-name="Group 1363" transform="translate(0 4)">
                    <g id="Group_72" data-name="Group 72" transform="translate(3 253.98)">
                      <path id="Union_3" data-name="Union 3" d="M173.227,111.118,97.835,33.531l-75.39,77.588a9.8,9.8,0,0,1-14.143,0l-5.374-5.53a10.5,10.5,0,0,1,0-14.554L88.457,3.014A9.806,9.806,0,0,1,97.836.277a9.8,9.8,0,0,1,9.378,2.738l39.323,40.468V22.525a10,10,0,0,1,10-10h7.6a10,10,0,0,1,10,10V69.476a10.036,10.036,0,0,1-.236,2.168l18.841,19.39a10.5,10.5,0,0,1,0,14.554l-5.373,5.53a9.8,9.8,0,0,1-14.143,0Z" transform="translate(407.651 4064.02)" fill="#2b879e"/>
                      <path id="Path_36" data-name="Path 36" d="M2.392,3.147,16.653,1.714a24.737,24.737,0,0,0,1.886,8.49q2.316,4.723,6.618,4.723A5.73,5.73,0,0,0,30.1,12.512a9.335,9.335,0,0,0,1.737-5.6A9.277,9.277,0,0,0,30.186,1.5Q28.532-.886,22.51-3.009,12.65-6.564,8.447-12.454,4.212-18.344,4.212-27.47A29.8,29.8,0,0,1,6.379-38.8,18.43,18.43,0,0,1,12.9-47.183q4.351-3.051,11.928-3.051,9.3,0,14.178,5.545t5.807,17.643L30.683-25.719q-.563-5.253-2.366-7.641a5.894,5.894,0,0,0-4.98-2.388A4.6,4.6,0,0,0,19.4-33.97a7.037,7.037,0,0,0-1.324,4.325A5.506,5.506,0,0,0,19.168-26.3q1.059,1.539,5.029,2.865,9.827,3.4,14.079,6.872a20.074,20.074,0,0,1,6.188,8.623A32.505,32.505,0,0,1,46.4,3.571a36.121,36.121,0,0,1-2.581,13.8,21.074,21.074,0,0,1-7.213,9.578,19.8,19.8,0,0,1-11.68,3.263q-12.375,0-17.14-7.641T2.392,3.147ZM52.058-9.96q0-19.049,6.618-29.662t18.43-10.612q12.11,0,18.662,10.427T102.32-10.6q0,13.637-2.862,22.366T91.185,25.353A19.44,19.44,0,0,1,77.7,30.208q-8.206,0-13.583-4.192T55.4,12.751Q52.058,3.677,52.058-9.96Zm14.989.106q0,11.78,2.73,16.927t7.428,5.147q4.831,0,7.478-5.041T87.33-10.915q0-10.984-2.763-16.051t-7.495-5.067q-4.533,0-7.279,5.147T67.047-9.854Zm43.346-39.054h14.989V9.726h23.394V28.882H110.393Zm45.4,0h22.269q6.585,0,10.638,2.865a21.394,21.394,0,0,1,6.7,8.225,44.778,44.778,0,0,1,3.838,12.47,91.187,91.187,0,0,1,1.191,15.07q0,12.47-1.77,19.341a36.793,36.793,0,0,1-4.914,11.514q-3.143,4.643-6.75,6.182a22.882,22.882,0,0,1-8.934,2.122H155.791ZM170.78-31.291v42.5h3.673q4.7,0,6.684-1.671t3.11-5.837q1.125-4.165,1.125-13.5,0-12.363-2.515-16.927t-8.338-4.563Z" transform="translate(404.608 4233.812)" fill="#2b879e"/>
                    </g>
                    <rect id="Rectangle_168" data-name="Rectangle 168" width="200" height="200" transform="translate(409 4318)" fill="none"/>
                  </g>
                </g>
              </svg>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <Grid container spacing={2} className="marginT viewGrid">
          {/* this grid for uploading image */}
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
          {/* input field*/}
          <Grid item xs={12} md={8} className="inputEdit">
            <div>
              <TextField id="outlined-basic" variant="outlined" className={classes.formControl} defaultValue={item.title}
              />
            </div>
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                  Realtor
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handleChange}
                  labelWidth={labelWidth}
                >
                  <MenuItem value="Michael">Michael</MenuItem>
                  <MenuItem value="Mark">Mark</MenuItem>
                  <MenuItem value="Lee">Lee</MenuItem>
                  <MenuItem value="Harry">Harry</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handleChange}
                  labelWidth={labelWidth}
                >
                  <MenuItem value="Condo">Condo</MenuItem>
                  <MenuItem value="House">House</MenuItem>
                  <MenuItem value="Townhouse">Townhouse</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div><TextField id="outlined-basic" defaultValue={item.price} variant="outlined"  className={classes.formControl}/></div>
            <Grid container spacing={1} className="twoColumnGrid">
              <Grid item xs={12} md={6}>
                <div><TextField id="outlined-basic" defaultValue={item.square_foot} variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div><TextField id="outlined-basic" defaultValue={item.created_at} variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div><TextField id="outlined-basic" defaultValue="Bedroom" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div><TextField id="outlined-basic" defaultValue="Garage" variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div><TextField id="outlined-basic" defaultValue={item.address.street} variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div><TextField id="outlined-basic" defaultValue={item.address.number} variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div><TextField id="outlined-basic" defaultValue={item.address.city} variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div><TextField id="outlined-basic" defaultValue={item.address.province} variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div><TextField id="outlined-basic" defaultValue={item.address.country} variant="outlined"  className={classes.formControl}/></div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div><TextField id="outlined-basic" defaultValue={item.address.postal_code} variant="outlined"  className={classes.formControl}/></div>
              </Grid>
            </Grid>
            <div><TextField id="outlined-multiline-static" defaultValue={item.description} multiline rows="4" variant="outlined"  className={classes.formControl}/></div>
            <div>
              <Button variant="outlined" className="btnStyle" color="primary" component={Link} to={"/Listings"}>Cancel</Button>
              <Button variant="outlined" className="btnStyle btnOn" color="primary" component={Link} to={"/newlisting2"} style={{float:'right'}}>Save</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}