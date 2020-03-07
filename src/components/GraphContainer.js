import React, { Component, useState } from "react";
import Container from "@material-ui/core/Container";
import LineGraph from "./LineGraph";
import MainGraph from "./MainGraph";
import { makeStyles } from "@material-ui/core/styles";

export default () => {
    const classes = useStyles();
  return (
    <div class="graphFlex">
      <Container maxWidth="sm">
        <MainGraph></MainGraph>
      </Container>
      <Container fixed>
        <LineGraph></LineGraph>
      </Container>
    </div>
  );
};

const useStyles = makeStyles({
    graphFlex: {
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      alignContent:"center"
    }
  });
  
