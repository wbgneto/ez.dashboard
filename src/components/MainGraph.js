import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import LineGraph from "./LineGraph";

class MainGraph extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    console.log(props);
    this.defaultData = {
      labels: props.data.labels,
      datasets: {
        label: props.data.datasets[0].label,
        data: props.data.datasets[0].data,
        backgroundColor: props.data.datasets[0].backgroundColor // Line color
      }
    };
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
      graphDataRealtorIds : props.graphDataId,
      lineGraphData:{},
      isLineGraphDataLoading : true
    };

    let display = this.props.salesType
    let labels = []
    let dataSet=[]
    let data={}
  
    fetch(`http://api.easyrealtysystem.wmdd.ca/reports/overall-sales?null&null&${display}`)
    .then(res => res.json())
    .then(res => {
      res.data.forEach(item => {
        labels.push(item.label);
        dataSet.push(item.value);
      })
      data = {
        labels: labels,
        datasets: [
          {
            data: dataSet
          }
        ]
      }
      this.state.lineGraphData= data
      this.state.isLineGraphDataLoading =false
      console.log("main constructor")
      console.log(this.state.lineGraphData)
    })
    .catch(err => {
      console.log(err, 'Fetch error')
    })
   
  }


  getOverallSales = (e) => {
    this.state.isLineGraphDataLoading=true
    let type = this.props.distributionType
    let display = this.props.salesType
    let id=[]
    let outputGraphDataLabels = []
    let outputGraphDataSet=[]
    let outputGraphData={}
    if(type=="house"){
      id=null
    }
    if(type=="realtor"){
      id=this.props.graphDataId[e.target.id]
    }

    console.log(id);
    console.log(type)
    console.log(display)
    fetch(`http://api.easyrealtysystem.wmdd.ca/reports/overall-sales?${type}&${id}&${display}`)
    .then(res => res.json())
    .then(res => {
      res.data.forEach(item => {
        outputGraphDataLabels.push(item.label);
        outputGraphDataSet.push(item.value);
      })
      outputGraphData = {
        labels: outputGraphDataLabels,
        datasets: [
          {
            data: outputGraphDataSet
          }
        ]
      }
      this.state.lineGraphData= outputGraphData
      console.log(this.state.lineGraphData)
      this.state.isLineGraphDataLoading = false
    })
    .catch(err => {
      console.log(err, 'Fetch error')
    })
  }

  render() {
    
   
    return (
      <>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={4}
          style={{ width: "100%", margin: "auto" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
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
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            {!this.props.isLoading && (
              <ul className="mt-8">
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
                          <label>{item}</label>
                          <label>{this.props.data.datasets[0].data[key]}</label>

                          <button
                          id={key}
                            style={{
                              border: "none",
                              backgroundColor: "white",
                              color: "blue",
                              textDecoration: "underline",
                              fontWeight: "bold"
                            }}

                            onClick = {(e) => this.getOverallSales(e)}
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
        </Grid>
        <div
          style={{
            width: "90%",
            margin: "auto",
            marginTop: "2em",
            backgroundColor: "white"
          }}
        >
          <h2>Overall Sales</h2>
          {!this.props.isLoading && (
          <LineGraph maxWidth="lg" minWidth="sm" data={this.state.lineGraphData}></LineGraph>
          )}
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
  // margin: "8px",
  alignContent: "flex-start"
};

const options = {
  legend: {
    display: false
  }
};
export default MainGraph;
