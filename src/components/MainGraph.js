import React, {Component} from "react";
import {Doughnut} from "react-chartjs-2";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

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
      <>
        

        
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={4}
          style={{ width: "100%", margin: "auto"  }}
        >
        {/* <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", alignContent:"center", alignItems:"center"}}> */}
        <Grid  item xs={12} sm={12} md={12} lg={6} xl={6} >
        <Doughnut
          
          ref={ref => (this.doughnut = ref)}
          data={this.props.data}
          options={options}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
      <ul className="mt-8">
          {legend.length &&
            legend.map((item, key) => {
              return (
                <>
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
                <hr style={{margin:"10px 0"}}/>
                </>
              );
            })}
        </ul>
      </Grid>
        </Grid>
        
        {/* </div> */}
        
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
