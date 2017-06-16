import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import MakePoll from './MakePoll.jsx';

class UserPolls extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div className="polls-container">

        <h4>My Polls</h4>
        <hr/>
        <ul className="list-group">
          <Link to="/mypolls/123"><li className="list-group-item">List of all private polls.</li></Link>
        </ul>

      </div>
    );
  }
};

export default UserPolls;
