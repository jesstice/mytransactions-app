import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route path="/" />
    <Route path="/transactions" />
  </Switch>
);

export default Routes;
