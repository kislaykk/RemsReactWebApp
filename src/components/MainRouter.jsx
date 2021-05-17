import React from 'react';

import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import SignIn from './SignIn';

const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/signIn">
        <SignIn />
      </Route>
    </Switch>
  </Router>
);

export default MainRouter;
