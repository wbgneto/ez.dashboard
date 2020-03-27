import React, { useState, useEffect } from "react";
import MainGraph from "./MainGraph";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";

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
const useStyles = makeStyles(theme => ({
  formContainer: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "0.5em"
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
    width: "100%",
    padding: "15px",
    borderRadius: "5px"
  },
  InputsWrapper: {
    height: "2em",
    display: "grid",
    gridGap: "1em",
    gridTemplateColumns: "1fr 1fr"
  },
  inputBoxes: {
    flexGrow: "0",
    margin: "1px"
  },
  input: {
    flexGrow: "0",
    borderRadius: "15%",
    padding: "32px"
  },
  paperComponent: {
    position: "relative"
  }
}));

const GraphContainer = () => {
  const classes = useStyles();
  var todayDate = new Date();
  var defaultStartDate = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth() - 4,
    todayDate.getDate()
  );
  var defaultEndDate = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() - 1
  );

  const [mainGraphdata, setMainGraphData] = React.useState([]);
  const [lineGraphLabel, setLineGraphLabel] = React.useState(
    "No. of Properties Sold"
  );
  const [startDate, setStartDate] = React.useState(
    defaultStartDate.toISOString().slice(0, 10)
  );
  const [endDate, setEndDate] = React.useState(
    defaultEndDate.toISOString().slice(0, 10)
  );
  const [salesType, setSalesType] = React.useState("quantity");
  const [distributionType, setDistributionType] = React.useState("realtors");
  const [isLoading, setisLoading] = useState(true);

  let graphDataLabels = [];
  let graphDataset = [];
  let graphDataId = [];

  const [mainGraphDataLabels, setMainGraphDataLabels] = React.useState(
    graphDataLabels
  );
  const [mainGraphDatasetsData, setMainGraphDatasetsData] = React.useState(
    graphDataset
  );
  const [mainGraphDataId, setMainGraphDataId] = React.useState(graphDataId);
  useEffect(() => {
    setisLoading(false);
    fetch(
      `http://api.easyrealtysystem.wmdd.ca/reports/sales-distribution?start_date=${startDate}&end_date=${endDate}&type=${distributionType}&display=${salesType}`
    )
      .then(res => res.json())
      .then(res => {
        setMainGraphData(res);
        console.log(res);
        setisLoading(false);
      })
      .catch(err => {
        console.log(err, "Fetch error");
        setisLoading(false);
      });

    if (salesType == "value") {
      setLineGraphLabel("Total Sales Amount");
    } else {
      setLineGraphLabel("No. of Properties Sold");
    }
  }, [startDate, endDate, distributionType, salesType]);

  useEffect(() => {
    mainGraphdata.forEach(item => {
      graphDataLabels.push(item.label);
      graphDataset.push(item.value);
      graphDataId.push(item.id);
    });

    setMainGraphDataLabels(graphDataLabels);
    setMainGraphDatasetsData(graphDataset);
    setMainGraphDataId(graphDataId);
  }, [mainGraphdata]);

  return (
    <ThemeProvider theme={theme}>
      <div className="graphFlex">
        <div>
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
                  value={startDate}
                  onChange={e => {
                    setStartDate(e.target.value);
                  }}
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
                  value={endDate}
                  onChange={e => {
                    setEndDate(e.target.value);
                  }}
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
                <select
                  id="datameasure"
                  className={classes.formElements}
                  defaultValue={salesType}
                  onChange={e => {
                    setSalesType(e.target.value);
                  }}
                >
                  <option value="quantity">Quantity</option>
                  <option value="revenue">Value</option>
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
                  defaultValue={distributionType}
                  onChange={e => {
                    setDistributionType(e.target.value);
                  }}
                >
                  <option value="realtors">Realtor</option>
                  <option value="houses">Type of Property</option>
                </select>
              </Grid>
            </Grid>
          </div>

          <Paper className={classes.paperComponent}>
            <MainGraph
              lineGraphLabel={lineGraphLabel}
              salesType={salesType}
              distributionType={distributionType}
              isLoading={isLoading}
              graphDataId={mainGraphDataId}
              data={{
                labels: mainGraphDataLabels,
                datasets: [
                  {
                    data: mainGraphDatasetsData,
                    backgroundColor: [
                      "#2B879E",
                      "#34AAC7",
                      "#FCC29A",
                      "#fde9c9"
                    ]
                  }
                ]
              }}
            ></MainGraph>
          </Paper>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default GraphContainer;
