import React, {Component} from "react";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="side-bar">
        <div>
          <div className="login-container">
            <div className="twitter-logo">
              <img src="/src/assets/twitter-logo.png"  alt="boohoo"/>
            </div>
            <span className="login-link">Login</span>

          </div>
          <div className="routes-container">
            <Link to="/">Home</Link>
            <Link to="/mypolls">My Polls</Link>
            <Link to="/newpoll">New Poll</Link>
            <Link to="/dashboard">Dashboard</Link>

            </div>
        </div>

        <div className="logout">Logout</div>
      </div>
    );
  }
};

export default Sidebar;
