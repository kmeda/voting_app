{/*import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


import Polls from './Polls.jsx';
import MakePoll from './MakePoll.jsx';

class AllPolls extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="app-body-inner">
        <Polls />
      </div>
    );
  }
};

export default AllPolls;
*/}

import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import * as Redux from 'react-redux';
import firebase, {firebaseRef} from '../firebase/index.js';
const actions = require('../actions/actions.jsx');

import MakePoll from './MakePoll.jsx';

class AllPolls extends Component {
  constructor(props){
    super(props);
  }


componentDidUpdate(){
  //clear polls and fetch new polls
}

renderPollList(){

  var myPolls = this.props.publicPolls[0];

  if (myPolls) {
      return (
        <ul className="list-group">
        {  [myPolls].map((allPolls)=>{
          console.log("All Polls: ",allPolls)
            return allPolls.map((polls)=>{
              var pollKeys= Object.keys(polls);

              return pollKeys.map((key)=>{
                return <Link to="/mypolls/123" key={key}><li className="list-group-item">{polls[key].pollName}</li></Link>
              })
            })
          })
        }
        </ul>
      )
    } else {
      return <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
    }
  }

render(){
    return (
      <div className="polls-container">
        <h4>All Polls</h4>
        <hr/>
        {this.renderPollList()}
      </div>
    );
  }
}

export default Redux.connect(
  (state) => {
    return {
      publicPolls: state.publicPolls
    }
  }
)(AllPolls);


// State polls
// firebase fetch user polls once and on everytime component mounts
// All polls with nested routes

// On fetch Get all polls into the state.
// Map the state and create nested routes.
