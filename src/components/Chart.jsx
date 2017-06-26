import React, {Component} from "react";
import * as Redux from 'react-redux';
import {Doughnut} from 'react-chartjs-2';


class Chart extends Component {
  constructor(props){
    super(props);

  }

  render(){
    var {poll} = this.props;

    var get_random_color = ()=>{
       var letters = 'ABCDE'.split('');
       var color = '#';
       for (var i=0; i<3; i++ ) {
           color += letters[Math.floor(Math.random() * letters.length)];
       }
       return color;
     };

    if (poll) {
      var pollResults = poll.pollResults;

      var datalabels = pollResults.map((option)=>{
        return Object.keys(option)[0];
      });
      var datavalues = pollResults.map((option)=>{
        return Object.values(option)[0];
      });
      var colors = [];
      for (var i = 0; i <= datalabels.length; i++) {
        colors.push(get_random_color());
      }

      //construct your data here
      var data = {
        labels: datalabels,
        datasets: [{
          label: "Poll",
          data : datavalues,
          backgroundColor: colors
        }
        ]
      }

      var options = {
        legend: {
          display: true,
          position: "bottom",
          fontColor: "#000"
        }
      }

      return (
        <div className="chart-container">
          <Doughnut data={data} options={options}/>
        </div>
      );
    } else {
      return <div><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</div>
    }
  }
};

export default Redux.connect(
  (state) => {
    return {
      poll: state.poll
    }
  }
)(Chart);
