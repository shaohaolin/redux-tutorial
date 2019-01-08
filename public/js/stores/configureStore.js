import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

var logger = createLogger({
  collapsed: true
});

// Redux store takes reducer as input.
var store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;