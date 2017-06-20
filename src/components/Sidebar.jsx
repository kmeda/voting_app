import React, {Component} from "react";
import twitter_bird from '../assets/twitter-logo.png';
import { BrowserRouter as Router, Route, Switch, NavLink, withRouter } from 'react-router-dom';
import * as Redux from 'react-redux';

const actions = require('../actions/actions.jsx');

class Sidebar extends Component {
  constructor(props){
    super(props);
  }

  handleLogin(){
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  }

  handleLogout(){
    var {dispatch} = this.props;
    dispatch(actions.startLogout());
    this.props.history.push("/home");

  }

  renderSidebar(){
    var {user, username, photoURL} = this.props;
    if (user) {
      return (
        <div>
          <div className="login-container">
            <div className="twitter-logo">
              <img src={photoURL}  alt="boohoo"/>
            </div>
            <span className="logged-in">Logged in as</span>
            <br/>
            <span className="user-name">{username}</span>
          </div>

          <div className="routes-container">
            <NavLink to="/home" className="routes">Home</NavLink>
            <NavLink to="/allpolls" className="routes">All Polls</NavLink>
            <NavLink to="/mypolls" className="routes">My Polls</NavLink>
            <NavLink to="/dashboard" className="routes">Dashboard</NavLink>
          </div>

          <div className="logout" onClick={this.handleLogout.bind(this)}>Logout</div>

        </div>
      );
    } else {
      return (
        <div>
          <div className="login-container">
            <div className="twitter-logo">
              <img src={twitter_bird}  alt="boohoo"/>
            </div>
            <span className="login-link"onClick={this.handleLogin.bind(this)}>Login</span>
          </div>

          <div className="routes-container">
            <NavLink to="/home" className="routes">Home</NavLink>
            <NavLink to="/allpolls" className="routes">All Polls</NavLink>
            <NavLink to="/dashboard" className="routes">Dashboard</NavLink>
          </div>
        </div>
      );
    }
  }

  render(){

    return (
      <div className="side-bar">
      {this.renderSidebar()}
      </div>
    );
  }
}

export default withRouter(Redux.connect(
  (state) => {
    return {
      user: state.auth.uid,
      username: state.auth.name,
      photoURL: state.auth.photoURL,
      polls: state.polls
    }

  }
)(Sidebar));
