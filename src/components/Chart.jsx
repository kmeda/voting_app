import React, {Component} from "react";
import * as Redux from 'react-redux';

class Chart extends Component {
  constructor(props){
    super(props);

  }

  render(){

    var {poll} = this.props;
    if (poll) {
      var pollResults = poll.pollResults;
      return (
        <div className="chart-container">
          Render Chart here.
          <hr/>
          {
            pollResults.map((option)=>{
              return(
                <li className="list-group-item" key={pollResults.indexOf(option)}>{Object.keys(option)} : {Object.values(option)}</li>
              )
            })
          }
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
