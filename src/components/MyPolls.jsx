import React, {Component} from "react";

import UserPolls from './UserPolls.jsx';
import NewPoll from './NewPoll.jsx';

class MyPolls extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="app-body-inner">
      <UserPolls />
      <NewPoll />
      </div>
    );
  }
};

export default MyPolls;
