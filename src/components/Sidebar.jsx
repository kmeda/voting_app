import React, {Component} from "react";
import twitter_bird from '../assets/twitter-logo.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
  }

  componentDidUpdate(){
    this.renderLoggedin();
    this.renderRoutes();
    this.renderLogout();
  }

  renderLoggedin(){
    var {user, username, photoURL} = this.props;
    if (user) {
      return (
        <div className="login-container">
          <div className="twitter-logo">
            <img src={photoURL}  alt="boohoo"/>
          </div>
          <span className="logged-in">Logged in as</span>
          <br/>
          <span className="user-name">{username}</span>
        </div>
      )
    } else {
      return (
        <div className="login-container">
          <div className="twitter-logo">
            <img src={twitter_bird}  alt="boohoo"/>
          </div>
          <span className="login-link"
            onClick={this.handleLogin.bind(this)}>Login</span>
        </div>
      )
    }
  }

  renderRoutes = ()=>{
    var {user} = this.props;
      if (user) {
        return (
          <div>
            <div className="routes-container">
              <Link to="/home" className="routes">Home</Link>
              <Link to="/allpolls" className="routes">All Polls</Link>
              <Link to="/mypolls" className="routes">My Polls</Link>
              <Link to="/dashboard" className="routes">Dashboard</Link>
            </div>
          </div>
        )
      } else {
        return (
          <div className="routes-container">
            <Link to="/home" className="routes">Home</Link>
            <Link to="/allpolls" className="routes">All Polls</Link>
            <Link to="/dashboard" className="routes">Dashboard</Link>
          </div>
        )
      }
  }

  renderLogout(){
    var {user} = this.props;
    if (user) {
      return (
        <div className="logout"
          onClick={this.handleLogout.bind(this)}>Logout
        </div>
      );
    } else {
      return
    }
  }

  render(){

    return (
      <div className="side-bar">
            {this.renderLoggedin()}
            {this.renderRoutes()}
            {this.renderLogout()}
      </div>
    );
  }
};

export default Redux.connect(
  (state) => {
    return {
      user: state.auth.uid,
      username: state.auth.name,
      photoURL: state.auth.photoURL
    }

  }
)(Sidebar);
