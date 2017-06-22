import React, {Component} from "react";

class MakePoll extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var {match} = this.props;
    console.log(match);
    return (
      <div className="chart-container">
        <h3>Submit your vote.</h3>
    </div>
    );
  }
};

export default MakePoll;
