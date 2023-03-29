import React from 'react';
import Allcommentpage from './Allcommentpage';
import {
  BrowserRouter as Router,
  Route,
  redirect,
  NavLink,
  Switch,
} from 'react-router-dom';

class Links extends React.Component {
  render() {
    return (
      <nav>
        <NavLink to="/"> Comment </NavLink>
        <NavLink to="/About"> About </NavLink>
      </nav>
    );
  }
}

export default class ReactRouter extends React.Component {
  render() {
    return (
      /*
      <Router>
        <>
          <Links />
          <Switch>
            <Route exact path="/">
              <Allcommentpage />
            </Route>

            <Route path="/"></Route>
          </Switch>
        </>
      </Router>
      */
      <h1>Welcome to Class Allcommentpage</h1>
    );
  }
}
