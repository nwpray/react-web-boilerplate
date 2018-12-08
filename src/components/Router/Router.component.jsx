import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Example from '@/pages/Example';

export default () => (
  <Router>
    <React.Fragment>
      <Route exact route="/" component={Example} />
    </React.Fragment>
  </Router>
);
