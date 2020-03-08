import React, { Component, useState } from "react";
import Container from "@material-ui/core/Container";
import LineGraph from "./LineGraph";
import MainGraph from "./MainGraph";
import { makeStyles } from "@material-ui/core/styles";

export default () => {
    const classes = useStyles();
  return (
    <div className="graphFlex">
      <Container maxWidth="sm">
        <MainGraph
        data={ {
        labels: ["Realtor1", "Realtor2", "Realtor3", "Others"],
        datasets: [
          {
            label: "No. of Houses Sold",
            
            data: [4, 5, 1, 10],
            backgroundColor: [
              "#2B879E",
              "#34AAC7",
              "#FCC29A",
              "#fde9c9",
            ]
          }
        ]          
      }}
        ></MainGraph>
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
  
