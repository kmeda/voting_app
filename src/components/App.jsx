import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Sidebar from "./Sidebar.jsx";
import Home from "./Home.jsx";
import Dashboard from "./Dashboard.jsx";

import MyPolls from "./MyPolls.jsx";
import NewPoll from "./NewPoll.jsx";


class App extends Component {
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
              <Route path="/mypolls" component={MyPolls}/>
              <Route path="/newpoll"  component={NewPoll}/>
              <Route path="/dashboard"  component={Dashboard}/>
            </Switch>

          </div>

        </div>
      </div>
      </Router>
    );
  }
};

export default App;
