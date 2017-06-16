import React, {Component} from "react";
import twitter_bird from '../assets/twitter-logo.png';
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
              <img src={twitter_bird}  alt="boohoo"/>
            </div>
            <span className="login-link">Login</span>

          </div>
          <div className="routes-container">
            <Link to="/home" className="routes">Home</Link>
            <Link to="/allpolls" className="routes">All Polls</Link>
            <Link to="/mypolls" className="routes">My Polls</Link>
            <Link to="/newpoll" className="routes">New Poll</Link>
            <Link to="/dashboard" className="routes">Dashboard</Link>

            </div>
        </div>

        <div className="logout">Logout</div>
      </div>
    );
  }
};

export default Sidebar;
