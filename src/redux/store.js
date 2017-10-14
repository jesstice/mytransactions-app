import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './combineReducers';

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);
