import React from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { UsersList, UserInfo } from 'features/admin/users';
import { RolesList } from 'features/admin/roles';
import { Overlay } from '..';
import EditUserRoute from './EditUserRoute';

export const AppRouter = () => {
  return (
    <Router>
      <nav>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/admin/users">
              Users
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/admin/roles">
              Roles
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
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

export default AppRouter;
