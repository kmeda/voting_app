import React, {Component} from "react";

import UserPolls from './UserPolls.jsx';
import MakePoll from './MakePoll.jsx';

class MyPolls extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="app-body-inner">
      <UserPolls />
      </div>
    );
  }
};

export default MyPolls;
