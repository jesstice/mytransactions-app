import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home/';
import NotFound from '../containers/NotFound/';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
