import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';

import Router from '@/components/Router';
import { reducer } from '@/store';

const logger = createLogger({
  stateTransformer: state =>
    Object.keys(state).reduce(
      (newState, key) => ({
        ...newState,
        [key]: Immutable.Iterable.isIterable(state[key]) ? state[key].toJS() : state[key]
      }),
      {}
    )
});

const store = createStore(reducer, applyMiddleware(logger));

const App = () => (
  <Provider {...{ store }}>
    <Router />
  </Provider>
);

export default App;
