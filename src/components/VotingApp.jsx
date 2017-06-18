import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import * as Redux from 'react-redux';

import Sidebar from "./Sidebar.jsx";
import Home from './Home.jsx';
import AllPolls from "./AllPolls.jsx";
import MyPolls from "./MyPolls.jsx";
import NewPoll from "./NewPoll.jsx";
import MakePoll from "./MakePoll.jsx";
import Dashboard from "./Dashboard.jsx";


class VotingApp extends Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <Router>
      <div className="app-container">
        <div className="header">FCC Voting App</div>
        <div className="body-btm">
          <Sidebar />
          <div className="app-body">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/allpolls" component={AllPolls}/>
              <Route exact path="/mypolls" component={MyPolls}/>
              <Route path="/allpolls/123" component={MakePoll}/>
              <Route path="/mypolls/123" component={MakePoll}/>
              <Route path="/dashboard"  component={Dashboard}/>
            </Switch>
          </div>
        </div>
      </div>
      </Router>
    );
  }
};

export default VotingApp;
