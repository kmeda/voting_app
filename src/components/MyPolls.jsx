import React, {Component} from "react";
import * as Redux from 'react-redux';
import firebase, {firebaseRef} from '../firebase/index.js';
const actions = require('../actions/actions.jsx');

import UserPolls from './UserPolls.jsx';
import NewPoll from './NewPoll.jsx';

class MyPolls extends Component {
  constructor(props){
    super(props);

  }


  render(){
    return (
      <div className="app-body-inner">
      <UserPolls />
      <NewPoll />
      </div>
    );
  }
};

export default Redux.connect()(MyPolls);
