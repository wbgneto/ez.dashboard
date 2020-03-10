import React from 'react';
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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className="title">Realtors</Typography>
      <Paper className={classes.paper}>
        <div>
          <div className="backtolist" style={{float:'left'}}>
            <Tooltip title="" component={Link} to={"/Realtors"}>
              <IconButton aria-label="back to list">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 200 200">
                <g id="Group_1437" data-name="Group 1437" transform="translate(-947 -5839)">
                  <path id="Subtraction_27" data-name="Subtraction 27" d="M487,945H307a10.011,10.011,0,0,1-10-10V755a10.011,10.011,0,0,1,10-10H487a10.011,10.011,0,0,1,10,10V935A10.011,10.011,0,0,1,487,945ZM335,773a10.011,10.011,0,0,0-10,10V907a10.011,10.011,0,0,0,10,10H459a10.011,10.011,0,0,0,10-10V783a10.011,10.011,0,0,0-10-10Z" transform="translate(650 5094)" fill="#2b879e"/>
                  <path id="Union_22" data-name="Union 22" d="M332.356,825.619l-28.284-28.284a14.154,14.154,0,0,1,0-16.978l28.284-28.284a10,10,0,0,1,14.142,0l2.121,2.121a10,10,0,0,1,0,14.142l-20.511,20.511,20.511,20.51a10,10,0,0,1,0,14.142l-2.121,2.121a10,10,0,0,1-14.142,0Z" transform="translate(718.609 5151.701)" fill="#2b879e"/>
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
          </div>
        </div>
        <Grid container spacing={2} className="marginT">
          <Grid item xs={12} md={4}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button component="span" className={classes.uploadBtn}>
              Upload Pictures
            </Button>
          </label>
          </Grid>
          <Grid item xs={12} md={8} className="inputEdit">
            <div><TextField id="outlined-basic" label="Name of Realtor" variant="outlined" className={classes.formControl}/></div>
            <div><TextField id="outlined-basic" label="Email" variant="outlined"  className={classes.formControl}/></div>
            <div><TextField id="outlined-basic" label="Phone number" variant="outlined"  className={classes.formControl}/></div>
            <div><TextField id="outlined-basic" label="Address" variant="outlined"  className={classes.formControl}/></div>
            <div>
              <Button variant="outlined" color="primary" component={Link} to={"/Realtors"}>Cancel</Button>
              <Button variant="outlined" color="primary" component={Link} to={"/Realtors"} style={{float:'right'}}>Save</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={6} className="homeList">
          <Grid item xs={12} md={4}>
            <div className="homePic">
              <span><Typography>Home List1</Typography></span>
              <img src="https://dummyimage.com/300x200/ccc/000&text=home+picture"></img>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="homePic">
            <span><Typography>Home List2</Typography></span>
              <img src="https://dummyimage.com/300x200/ccc/000&text=home+picture"></img>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="homePic">
            <span><Typography>Home List3</Typography></span>
              <img src="https://dummyimage.com/300x200/ccc/000&text=home+picture"></img>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}