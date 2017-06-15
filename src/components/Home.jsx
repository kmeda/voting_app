import React, {Component} from "react";

class Home extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <div>Fetch All polls from Firebase</div>
      <div>Open voting window and chart on click</div>
      <div>Select option and submit to vote</div>
      <div>If logged in editable options</div>
      </div>
    );
  }
};

export default Home;
