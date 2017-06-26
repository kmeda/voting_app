import * as redux from 'redux';
import thunk from 'redux-thunk';

import {  publicPollsReducer,
          userPollsReducer,
          authReducer,
          pollInputReducer,
          pollReducer,
          userIPReducer,
          selectedOptionReducer } from '../reducers/reducers.jsx';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    pollInput: pollInputReducer,
    publicPolls: publicPollsReducer,
    userPolls: userPollsReducer,
    selectedOption: selectedOptionReducer,
    poll: pollReducer,
    userIP: userIPReducer,
    auth: authReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
