import React, { Component, useState } from "react";
import LineGraph from "./LineGraph";
import MainGraph from "./MainGraph";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200
    }
  }
});
const dateToday = new Date();
const useStyles = makeStyles(theme => ({
  formContainer: {
    display: "grid",
    width: "90%",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "1em"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    textDecoration: "none"
  },
  graphFlex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    height: "100%"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  formElements: {
    border: "1px solid #34AAC7",
    width: "100%"
  },
  InputsWrapper: {
    height: "2em",
    display: "grid",
    gridGap: "1em",
    gridTemplateColumns: "1fr 1fr"
  },
  inputBoxes: {
    margin: "1px"
  }
}));

export default () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    startDate: dateToday,
    endDate: dateToday.setMonth(dateToday.getMonth() + 8),
    graphDataMeasure: "qty",
    graphDistributionFactor: "realtor"
  });

  const handleStartDateChange = startDate => event => {
    setState({
      ...state,
      [startDate]: event.target.value
    });

    alert(
      `${state.startDate} ${state.endDate} ${state.graphDistributionFactor}`
    );
  };

  const handleEndDateChange = endDate => event => {
    setState({
      ...state,
      [endDate]: event.target.value
    });

    alert(state);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="graphFlex">
        <div style={{ width: "90%", margin: "auto", backgroundColor: "white" }}>
          <div className={classes.formContainer}>
            <Grid container>
              <Grid
                className={classes.inputBoxes}
                container
                item
                xm={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
              >
                From:
                <input
                  className={classes.formElements}
                  type="date"
                  id="startDate"
                  label="start date"
                  value={state.startDate}
                  onChange={handleStartDateChange("startDate")}
                />
              </Grid>

              <Grid
                className={classes.inputBoxes}
                container
                item
                xm={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
              >
                To:
                <input
                  className={classes.formElements}
                  type="date"
                  id="endDate"
                  label="end date"
                  value={state.endDate}
                  onChange={handleEndDateChange("endDate")}
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid
                className={classes.inputBoxes}
                container
                item
                xm={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
              >
                Show Sales By:
                <select id="datameasure" className={classes.formElements}>
                  <option value="qty">Quantity</option>
                  <option value="val">Value</option>
                </select>
              </Grid>
              <Grid
                className={classes.inputBoxes}
                container
                item
                xm={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
              >
                Show Sales of:
                <select
                  id="distributionFactor"
                  className={classes.formElements}
                >
                  <option value="realtor">Realtor</option>
                  <option value="houseType">Type of Property</option>
                </select>
              </Grid>
            </Grid>
          </div>

          <h2>Sales Distribution</h2>
          <MainGraph
            data={{
              labels: ["Realtor1", "Realtor2", "Realtor3", "Others"],
              datasets: [
                {
                  label: "No. of Houses Sold",

                  data: [4, 5, 1, 10],
                  backgroundColor: ["#2B879E", "#34AAC7", "#FCC29A", "#fde9c9"]
                }
              ]
            }}
          ></MainGraph>
        </div>
        <div
          style={{
            width: "90%",
            margin: "auto",
            marginTop: "2em",
            backgroundColor: "white"
          }}
        >
          <h2>Overall Sales</h2>
          <LineGraph maxWidth="lg" minWidth="sm"></LineGraph>
        </div>
      </div>
    </ThemeProvider>
  );
};
