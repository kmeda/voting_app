import React, {Component} from "react";
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
