import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import UserAppBar from './UserAppBar';
import AddProperty from './AddProperty';

export default function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path } = useRouteMatch();

  return (
    <div>
      <UserAppBar />

      <Switch>
        <Route exact path={path}>
          <h3>Home</h3>
        </Route>
        <Route path={`${path}/property/add`}>
          <AddProperty />
        </Route>
      </Switch>
    </div>
  );
}
