
import React, { Component,useState }from "react";
import "../App.js";
import { Line } from "react-chartjs-2";

export default class LineGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show_by_type: "quantity",
      data: {
        labels: ["Jan", "Feb", "March", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "No. of Houses Sold",
            data: [32, 30, 26, 31, 29,33,30,24,29,30,23,38]
          }
        ]
      }
    };
  }



  setGradientColor = (canvas,color) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0,0, 0,300);
    gradient.addColorStop(0.50,color);
    gradient.addColorStop(0.75,"white");
    return gradient;
  }
  getChartData = canvas => {
    const data = this.state.data; 

    if(data.datasets){
      let colors = [ "#2B879E"];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor="#2B879E";
        set.borderWidth=1;
      })
    }
    return data;

    
  }

  render() {
    return (
      <div
        style={{   display:"flex",alignContent:"center", justifyContent:"space-around"}}
        
      >
          <div style={{width:"75%", textAlign:"center"}}>
          <h4>Overall Sales</h4>
        <Line
          options={{
            responsive: true,
          }}
          data={this.getChartData}
        />
          </div>
        
      </div>
    );
  }
}

