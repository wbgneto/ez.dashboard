import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    // padding: '16px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className="title">Help</Typography>
      <Paper className={classes.paper}>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Thinking to upgrade your plan?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="textOverflow">
            <Typography>
              Easy Realty Systems offer three plans after the free trial. Each plan has different services regarding no. of users supported,
              storage provided. If you are thinking about choosing a different plan, Kindly visit <span style={{textDecoration:"underline"}}>http://easyrealtysystem.wmdd.ca/Pricing</span> and select the plan best suitable to you. 
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Have to mark a listing sold?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="textOverflow">
            <Typography>
              Easy Realty System makes it easy for you to update status of listing. If you want to mark a property sold or if you want to hide a listing. 
              Follow the following steps <br/>
              1. Go to the listings by clicking on 'listings' on the left navigation panel. <br/>
              2. Search the listing you want to update on the search bad or scroll and locate the listing.<br/>
              3. Click on edit on the right side of the listing. <br/>
              4. Click on the sold icon just below your profile image.
              5. Enter the price and date the listing was sold at and save.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Want to see just the active listings?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="textOverflow">
            <Typography>
              To see only the active listings. Follow the following steps.<br/>
              1. Go to the listings by clicking on 'listings' on the left navigation panel. <br/>
              2. Click on the status dropdown and select "active".

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
    </div>
  );
}