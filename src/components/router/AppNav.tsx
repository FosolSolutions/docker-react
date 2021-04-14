import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { UsersList, UserInfo } from 'features/admin/users';
import { RolesList } from 'features/admin/roles';
import { Overlay, Nav } from '..';
import EditUserRoute from './EditUserRoute';

/**
 * Application react router to control SPA.
 * @returns Router component.
 */
export const AppNav = () => {
  return (
    <Router>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/roles">Roles</Link>
      </Nav>
      <main>
        <Overlay message="Content is being loaded"></Overlay>
        <Switch>
          <Route path="/admin/users/0" component={UserInfo}></Route>
          <Route path="/admin/users/:id" component={EditUserRoute}></Route>
          <Route path="/admin/users" component={UsersList}></Route>
          <Route path="/admin/roles" component={RolesList}></Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default AppNav;
