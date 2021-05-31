import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import UserAppBar from './UserAppBar';
import AddProperty from './AddProperty';
import GetProperty from './GetProperty';
import EditProperty from './EditProperty';
import AddnDeleteExpense from './AddnDeleteExpense';
import AllPropertyList from './AllPropertyList';
import ListTenants from './ListTenants';
import Requests from './Requests';

const useQuery = () => new URLSearchParams(useLocation().search);

export default function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path } = useRouteMatch();
  const query = useQuery();
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
        <Route path={`${path}/property/edit`}>
          <EditProperty name={query.get('name')} id={query.get('id')} state={query.get('state')} street={query.get('street')} city={query.get('city')} pin={query.get('pin')} locality={query.get('locality')} />
        </Route>
        <Route path={`${path}/property/all`}>
          <AllPropertyList />
        </Route>
        <Route path={`${path}/property/tenants`}>
          <ListTenants propertyId={query.get('propertyId')} />
        </Route>
        <Route path={`${path}/property`}>
          <GetProperty />
        </Route>
        <Route path={`${path}/expense`}>
          <AddnDeleteExpense propertyId={query.get('propertyId')} />
        </Route>
        <Route path={`${path}/requests/`}>
          <Requests />
        </Route>
      </Switch>
    </div>
  );
}
