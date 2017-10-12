import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home/';
import NotFound from '../containers/NotFound/';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
