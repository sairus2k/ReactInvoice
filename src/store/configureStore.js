import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

export const configure = (initialState = {}) => {
  const composer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  return createStore(reducer, initialState, composer);
};
