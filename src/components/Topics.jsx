import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import UserAppBar from './UserAppBar';
import AddProperty from './AddProperty';
import GetProperty from './GetProperty';

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
          {/* add the money component here -which shows the moeny made and all */}
        </Route>
        <Route path={`${path}/property/add`}>
          <AddProperty />
        </Route>
        <Route path={`${path}/property/`}>
          <GetProperty />
        </Route>
      </Switch>
    </div>
  );
}
