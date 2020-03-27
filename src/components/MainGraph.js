import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import LineGraph from "./LineGraph";

class MainGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: {
        labels: this.props.data.labels,
        datasets: [
          {
            label: props.data.datasets[0].label,
            data: props.data.datasets[0].data,
            backgroundColor: props.data.datasets[0].backgroundColor // Line color
          }
        ]
      },
      graphDataRealtorIds: props.graphDataId,
      lineGraphData: {},
      isLineGraphDataLoading: false,
      lineGraphLabel: props.lineGraphLabel
    };

    let display = this.props.salesType;
    let labels = [];
    let dataSet = [];
    let data = {};
    this.setState({ isLineGraphDataLoading: false });

    fetch(
      `http://api.easyrealtysystem.wmdd.ca/reports/overall-sales?display=${display}`
    )
      .then(res => res.json())
      .then(res => {
        res.forEach(item => {
          labels.push(item.label);
          dataSet.push(item.value);
        });
        data = {
          labels: labels,
          datasets: [
            {
              label: "Sales in last 12 months",
              data: dataSet
            }
          ]
        };
        this.setState({ lineGraphData: data });
        this.setState({ isLineGraphDataLoading: false });
      })
      .catch(err => {
        console.log(err, "Fetch error");
      });
  }

  getOverallSales = e => {
    this.setState({ isLineGraphDataLoading: false });
    let type = this.props.distributionType;
    let display = this.props.salesType;
    let id = [];
    let outputGraphDataLabels = [];
    let outputGraphDataSet = [];
    let outputGraphData = {};
    let url;
    let topLabel = "";
    if (type === "realtors" || type === "houses") {
      id = this.props.graphDataId[e.target.id];
    }

    topLabel = this.props.data.labels[e.target.id];

    url = `http://api.easyrealtysystem.wmdd.ca/reports/overall-sales?type=${type}&id=[${id}]&display=${display}`;

    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        res.forEach(item => {
          outputGraphDataLabels.push(item.label);
          outputGraphDataSet.push(item.value);
        });
        outputGraphData = {
          labels: outputGraphDataLabels,
          datasets: [
            {
              label: `Sales of ${topLabel} in last 12 months `,
              data: outputGraphDataSet
            }
          ]
        };
        this.setState({ lineGraphData: outputGraphData });
        this.setState({ isLineGraphDataLoading: false });
      })
      .catch(err => {
        console.log(err, "Fetch error");
      });
  };

  render() {
    return (
      <>
        <div>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={4}
            style={{ width: "100%", margin: "auto", marginTop: "1em" }}
          >
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "2em"
                }}
              >
                {" "}
                Sales Distribution
              </label>
              {!this.props.isLoading && (
                <Doughnut
                  ref={ref => (this.doughnut = ref)}
                  data={{
                    labels: this.props.data.labels,
                    datasets: [
                      {
                        label: this.props.data.datasets[0].label,
                        data: this.props.data.datasets[0].data,
                        backgroundColor: [
                          "#2B879E",
                          "#34AAC7",
                          "#FCC29A",
                          "#fde9c9"
                        ]
                      }
                    ]
                  }}
                  options={options}
                />
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              style={{ paddingLeft: "2em", paddingRight: "2em" }}
            >
              {!this.props.isLoading && (
                <ul>
                  {this.props.data.labels.length &&
                    this.props.data.labels.map((item, key) => {
                      return (
                        <>
                          <li key={key} style={listItemStyle}>
                            <div
                              style={{
                                display: "inline",
                                marginRight: "8px",
                                width: "20px",
                                height: "20px",
                                border: `2px solid ${this.props.data.datasets[0].backgroundColor[key]}`,
                                borderRadius: "100%"
                              }}
                            />
                            <label
                              style={{
                                flex: "0 0 35%"
                              }}
                            >
                              {item}
                            </label>
                            <label
                              style={{
                                flex: "0 0 10%"
                              }}
                            >
                              {this.props.data.datasets[0].data[key]}
                            </label>

                            <button
                              id={key}
                              style={{
                                border: "none",
                                backgroundColor: "white",
                                color: "blue",
                                textDecoration: "underline",
                                fontWeight: "bold",
                                flex: "0 0 5%"
                              }}
                              onClick={e => this.getOverallSales(e)}
                            >
                              Details
                            </button>
                          </li>
                          <hr style={{ margin: "10px 0" }} />
                        </>
                      );
                    })}
                </ul>
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
              <div
                style={{
                  width: "100%",
                  margin: "auto",
                  marginTop: "2em",
                  backgroundColor: "white"
                }}
              >
                <label
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    position: "absolute",
                    left: "0",
                    paddingLeft: "16px",
                    paddingTop: "16px"
                  }}
                >
                  Last Year Sales
                </label>
                {!this.props.isLoading && (
                  <LineGraph
                    maxWidth="lg"
                    minWidth="sm"
                    data={this.state.lineGraphData}
                  ></LineGraph>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

MainGraph.propTypes = {
  data: PropTypes.object
};

const listItemStyle = {
  textAlign: "left",
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "row",
  alignContent: "flex-start",
  alignItems: "flex-start"
};

const options = {
  legend: {
    display: false
  }
};
export default MainGraph;
