
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

  var publicPolls = this.props.publicPolls[0];

  if (publicPolls) {
    console.log(publicPolls);

    //reduce all polls into one object and feed the pols to link tag

    return (
      <ul className="list-group">
        <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Mapping in progress..{/*return <Link to="/mypolls/123" key={key}><li className="list-group-item">{polls[key].pollName}</li></Link>    */}
      </ul>
    )
    } else {
      return <div><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Mapping in progress...</div>
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
