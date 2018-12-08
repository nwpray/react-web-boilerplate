import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import Router from '@/components/Router';
import { reducer } from '@/store';

const store = createStore(reducer, applyMiddleware(logger));

const App = () => (
  <Provider {...{ store }}>
    <Router />
  </Provider>
);

export default App;
