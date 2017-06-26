import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import firebase, {firebaseRef, twitterProvider} from './firebase/index.js';


const actions = require('./actions/actions.jsx');
var store = require("./store/configureStore.jsx").configure();
import VotingApp from './components/VotingApp.jsx';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/main.scss';


store.dispatch(actions.startAddPublicPolls());


firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
    store.dispatch(actions.login(user.uid, user.displayName, user.photoURL));
    store.dispatch(actions.startAddUserPolls());

  } else {
    store.dispatch(actions.logout());
  }
});



ReactDOM.render(
  <Provider store={store}>
    <VotingApp />
  </Provider>,

document.getElementById('root'));
