import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '@/Pages/Home';

import ROUTES from '@/routes';

export default () => (
  <Router>
    <React.Fragment>
      <Route exact route={ROUTES} component={Home} />
    </React.Fragment>
  </Router>
);
