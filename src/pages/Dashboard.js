import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GraphContainer from '../components/GraphContainer';

const useStyles = makeStyles(theme => ({

  title:{
    fontSize:"3.157em",
    fontWeight:"700",
    color:"#2B879E",
  }
}));
export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div style={{width:"100%"}}>
      <Typography className="title">DASHBOARD</Typography>
      <GraphContainer></GraphContainer>
    </div>
  );
}

