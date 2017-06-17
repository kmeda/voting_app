import React, {Component} from "react";



class Home extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="app-body-inner">
        <div className="welcome-message col-md-8 well">
          <h2>Welcome to freedcodecamp Voting App</h2>
          <br/>
          <h4>Use the sidebar to navigate.</h4>
        </div>
      </div>
    );
  }
};

export default Home;
