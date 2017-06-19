import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import * as Redux from 'react-redux';
import firebase, {firebaseRef} from '../firebase/index.js';
const actions = require('../actions/actions.jsx');

import MakePoll from './MakePoll.jsx';

class UserPolls extends Component {
  constructor(props){
    super(props);

  }

  render(){
    var {userPolls, user} = this.props;
    var renderPollList = ()=>{
      var myPolls = userPolls[0];
      if (myPolls) {
        myPolls.map((poll)=>{
          return <li className="list-group-item" key={poll.id}>{poll.pollName}</li>
        })

      } else {
        return <div>Loading...</div>
      }
    }

    return (
      <div className="polls-container">

        <h4>My Polls</h4>
        <hr/>
        <ul className="list-group">
          {renderPollList()}
        </ul>

      </div>
    );
  }
};

export default Redux.connect(
  (state) => {
    return {
      polls: state.polls,
      user: state.auth.uid
    }
  }
)(UserPolls);


// State polls
// firebase fetch user polls once and on everytime component mounts
// All polls with nested routes

// On fetch Get all polls into the state.
// Map the state and create nested routes.
