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


componentDidMount(){
  var {dispatch} = this.props;
  dispatch(actions.clearPublicPolls());
  dispatch(actions.startAddPublicPolls());
}

componentDidUpdate(){

}

renderPollList(){
  var {match} = this.props;
  var publicPolls = this.props.publicPolls[0];

  console.log(match);

  if (publicPolls) {
    var pollsArray = Object.values(publicPolls);
    return (
      <ul className="list-group">
        {
          pollsArray.map((poll)=>{
              return <Link to={`${match.url}/${poll.id}`} key={poll.id}><li className="list-group-item">{poll.pollName}</li></Link>
            })
          }
      </ul>
    )
    } else {
      return <div><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</div>
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
