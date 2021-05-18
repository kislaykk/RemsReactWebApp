/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Tokens from '../context/token';
import Home from './Home';
import Register from './Register';
import SignIn from './SignIn';
import Topics from './Topics';
// import AddProperty from './AddProperty';

function ProtectedRoute({ children, ...rest }) {
  const tokens = React.useContext(Tokens);
  return (
    <Route
      {...rest}
      render={({ location }) => (tokens.tokens ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

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
      <ProtectedRoute path="/user">
        <Topics />
      </ProtectedRoute>
    </Switch>
  </Router>
);

export default MainRouter;
