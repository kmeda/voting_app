import React, {Component} from "react";

class NewPoll extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="app-body-inner">
      <div>Create New Poll and push data to firebase</div>
      <div>Re-render new poll component</div>
      </div>

    );
  }
};

export default NewPoll;
