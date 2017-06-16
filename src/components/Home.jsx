import React, {Component} from "react";



class Home extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="app-body-inner">
      Welcome to freedcodecamp Voting App
      <br/>
      Use the sidebar to navigate.
      </div>
    );
  }
};

export default Home;
