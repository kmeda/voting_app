import * as redux from 'redux';
import thunk from 'redux-thunk';

import {publicPollsReducer, authReducer, pollInputReducer} from '../reducers/reducers.jsx';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    publicPolls: publicPollsReducer,
    pollInput: pollInputReducer,
    auth: authReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
