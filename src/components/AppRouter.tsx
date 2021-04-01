import React from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { UsersList } from 'features/admin/users';
import { RolesList } from 'features/admin/roles';
import { Overlay } from '../components';

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
          <Route path="/admin/users">
            <UsersList></UsersList>
          </Route>
          <Route path="/admin/roles">
            <RolesList></RolesList>
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default AppRouter;
