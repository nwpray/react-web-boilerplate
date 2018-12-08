import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '@/pages/Home';

export default () => (
  <Router>
    <React.Fragment>
      <Route exact route="/" component={Home} />
    </React.Fragment>
  </Router>
);
