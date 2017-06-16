import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import MakePoll from './MakePoll.jsx';

class Polls extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (

      <div className="polls-container">

        <h4>All Polls</h4>
        <hr/>
        <ul className="list-group">
          <Link to="/allpolls/123"><li className="list-group-item">List of all public polls.</li></Link>
        </ul>

      </div>

    );
  }
};

export default Polls;
