import React, { Component } from "react";
import {  Doughnut } from "react-chartjs-2";

export default class MainGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show_by_type: "quantity",
      data: {
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
           
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ show_by_type: event.target.value });
  }

  handleLegendClick(event,legendItem){
    console.log(event);
    console.log(legendItem.text)
    // this.getSalesforRealtors(legendItem.text)
  }

  
  handleSubmit(event) {
    alert("You have selected: " + this.state.show_by_type);

    if (this.state.show_by_type === "moneyValue") {
      this.setState({
        data: {
          datasets: [
            {
              label: "sales earned",
              data: [4000000, 5000000, 1000000, 10000000],
              backgroundColor: [
                "#2B879E",
                "#34AAC7",
                "#FCC29A",
                "#fde9c9",
              ]
            }
          ]
        }
      });
      this.render();
    } else {
      this.setState({
        data: {
          datasets: [
            {
              label: "No. of Houses Sold",
              data: [36, 24, 10, 17],
              backgroundColor: [
                  "#2B879E",
                  "#34AAC7",
                  "#FCC29A",
                  "#fde9c9",
                
              ]
            }
          ]
        }
      });
      this.render();
    }

    event.preventDefault();
  }

  // getSalesforRealtors = realtor => {

  // }
  // setGradientColor = (canvas,color) => {
  //   const ctx = canvas.getContext('2d');
  //   const gradient = ctx.createLinearGradient(0,0, 600,550);
  //   gradient.addColorStop(0,color);
  //   gradient.addColorStop(0.95,"rgba(133,122,144,0.5)");
  //   return gradient;
  // }
  getChartData = canvas => {
    const data = this.state.data;

    // if(data.datasets){
    //   let colors = [ '#B21F00',
    //   '#C9DE00',
    //   '#2FDE00',
    //   '#00A6B4',
    //   '#6800B4'];
    //   data.datasets.forEach((set, i) => {
    //     set.backgroundColor = this.setGradientColor(canvas, colors[i]);
    //     set.borderColor="white";
    //     set.borderWidth=2;
    //   })
    // }
    return data;
  };

   
  render() {
    return (
      <div>
        <div
          style={{ position: "relative", width: 600, height: "auto", textAlign:"center" }}
          
        >
          <form
          onSubmit={this.handleSubmit}>
            <label>
              Visualize sales by:
              <select
                value={this.state.show_by_type}
                onChange={this.handleChange}
              >
                <option value="moneyValue">Value($)</option>
                <option value="quantity">No of Houses</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <h3>Top Sales</h3>
          <Doughnut
            id=""
            options={{
              responsive: true,
                legend: {
                  position: "right",
                  fullWidth:false,
                  onClick: this.handleLegendClick,
                  labels:{
                    fontColor: '#f00'
                  }
                }
              
            }}
            data={this.getChartData}
          />
        </div>
      </div>
    );
  }
}
