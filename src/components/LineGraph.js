import React, { Component, useState ,useEffect, useRef} from "react";
import "../App.js";
import {Line} from "react-chartjs-2";

export default class LineGraph extends Component {
  constructor(props) {
    super(props);
    console.log("in line graph")
    console.log(props)
    this.state = {
      show_by_type: "quantity",
      data:props.data,
      options: {
        responsive: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
        }
      }
    };
  }

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0.70, color);
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
          justifyContent: "space-around"
        }}
      >
        <div style={{ width: "70%", textAlign: "center" }}>
         
          <Line
          style={{}}
            options={{
              responsive: true
            }}
            data={this.getChartData}
            options={this.state.options}
          />
        </div>
      </div>
    );
  }
}
