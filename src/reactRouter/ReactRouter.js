import React from 'react';
import Allcommentpage from './Allcommentpage';
import Aboutus from './Aboutus';

import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  NavLink,
  Switch,
  Navigate,
} from 'react-router-dom';

class Links extends React.Component {
  render() {
    return (
      <nav>
        <NavLink to="/Comment/:id"> Comment </NavLink>
        <NavLink to="/Aboutus"> Aboutus </NavLink>
      </nav>
    );
  }
}

export default class ReactRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Links />
        <Routes>
          <Route path="/Comment/:id" element={<Allcommentpage />} />
          <Route path="/Aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
