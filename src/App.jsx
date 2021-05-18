/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainRouter from './components/MainRouter';
import Token from './context/token';

function ProtectedRoute({ children, ...rest }) {
  const { tokens } = React.useContext(Token);
  return (
    <Route
      {...rest}
      render={({ location }) => (tokens ? (
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
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainRouter />
          </Route>
          <ProtectedRoute path="/protected">
            <div><h1>Signed In</h1></div>
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
