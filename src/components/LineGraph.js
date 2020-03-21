import React, { Component } from "react";
import "../App.js";
import { Line } from "react-chartjs-2";

export default class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_by_type: "quantity",
      lineGraphLabel: props.lineGraphLabel,
      data: props.data,
      options: {
        responsive: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    };
  }
  componentWillReceiveProps(prevProps, prevState) {
    if (prevState.data !== prevProps.data) {
      this.state.data = this.props.data;
    } else {
      return null;
    }
  }
  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0.7, color);
    gradient.addColorStop(0.95, "white");
    return gradient;
  };
  getChartData = canvas => {
    const data = this.state.data;

    if (data.datasets) {
      let colors = ["#2B879E"];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = "#2B879E";
        set.borderWidth = 1;
      });
    }
    return data;
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ width: "100%", textAlign: "center" }}>
          <Line
            style={{}}
            options={{
              responsive: true
            }}
            label={this.lineGraphLabel}
            data={this.getChartData}
            options={this.state.options}
          />
        </div>
      </div>
    );
  }
}
