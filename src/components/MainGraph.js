import React, {Component} from "react";
import {Doughnut} from "react-chartjs-2";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import LineGraph from "./LineGraph";

class MainGraph extends Component {

  
  constructor(props){
    super(props)
    console.log("constructor")
    console.log(props)
    this.defaultData = {
      
        labels: props.data.labels,
        datasets: 
          {
            label: props.data.datasets[0].label,
            data: props.data.datasets[0].data,
            backgroundColor: props.data.datasets[0].backgroundColor // Line color
          }
        
      
    }
    this.state = {
      graphData:{labels: this.props.data.labels,
        datasets: [{
          label: props.data.datasets[0].label,
          data: props.data.datasets[0].data,
          backgroundColor: props.data.datasets[0].backgroundColor // Line color
        }]
          }
    };
  
    
  }
  
  // componentWillReceiveProps=(props)=> {
  //   let newData = {
      
  //     labels: this.props.data.labels[0],
  //       datasets: [{
  //         label: props.data.datasets[0].label,
  //         data: props.data.datasets[0].data[0],
  //         backgroundColor: props.data.datasets[0].backgroundColor // Line color
  //       }]
      
    
  // }
  //   this.setState( newData)
  // }
  
  // componentWillReceiveProps(someProp) {
  //   // console.log(someProp)
  //   // this.setState({...this.state,someProp})
  // }
  componentDidMount() {
    // const component = this.doughnut;
//     console.log("props")
//     console.log(component.props)
//     this.setState({graphData : {
      
//       labels: this.props.data.labels,
//       datasets: 
//         {
//           label: this.props.data.datasets.label,
//           data: this.props.data.datasets.data,
//           backgroundColor:this.props.data.datasets.backgroundColor // Line color
//         }       
//   } 
// });
//     console.log(this.state.graphData)
  }

  // shouldComponentUpdate(prevProps,nextProps){
    // console.log(prevProps)
    // console.log(nextProps)
    // return (
    //   nextProps.data == prevProps.data
    // )
  // }

  render() {
    // console.log("graphdata")
    // console.log(this.state.graphData);
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
          data={{
            labels : this.props.data.labels,
            datasets : [{
              label: this.props.data.datasets[0].label,
              data: this.props.data.datasets[0].data,
              backgroundColor: ["#2B879E", "#34AAC7", "#FCC29A", "#fde9c9"]
            }
              
            ]
          }}
          options={options}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
      {!this.props.isLoading && <ul className="mt-8">
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

                  <button style={{border:"none" , backgroundColor:"white", color: "blue", textDecoration: "underline" , fontWeight:"bold" }}>Details</button>
                </li>
                <hr style={{margin:"10px 0"}}/>
                </>
              );
            })}
        </ul>}
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
          <LineGraph maxWidth="lg" minWidth="sm"></LineGraph>
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
