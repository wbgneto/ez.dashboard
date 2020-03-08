import React, { Component, PureComponent } from "react";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";

const listItemStyle = {
  textAlign: "left",
  justifyContent: "space-evenly",
  display: "flex",
  flexDirection: "row",
  margin: "8px",
  alignContent: "flex-start"
};

const options = {
  legend: {
    display: false
  }
};
class MainGraph extends Component {
  state = {
    legend: []
  };

  componentDidMount() {
    const component = this.doughnut;
    this.setState({ legend: component.chartInstance.legend.legendItems });
  }

  render() {
    const { legend } = this.state;
    console.log(this.props.data);
    return (
      <div>
        <h3>Top Sales</h3>
        <Doughnut
          ref={ref => (this.doughnut = ref)}
          data={this.props.data}
          options={options}
        />
        <ul className="mt-8">
          {legend.length &&
            legend.map((item, key) => {
              return (
                <li key={item.text} style={listItemStyle}>
                  <div
                    style={{
                      display: "inline",
                      marginRight: "8px",
                      width: "20px",
                      height: "20px",
                      border: `2px solid ${item.fillStyle}`,
                      borderRadius: "100%"
                    }}
                  />
                  <label>{item.text}</label>
                  <label>{this.props.data.datasets[0].data[key]}</label>
                  <label
                    style={{ color: "blue", textDecoration: "underline" }}
                  >
                    Details
                  </label>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

MainGraph.propTypes = {
  data: PropTypes.object
};

export default MainGraph;
