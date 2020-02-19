import React from 'react';
import Nav from './templates/Nav';
import Listings from './templates/Listings';
import Dashboard from './templates/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/Dashboard" component={Dashboard}></Route>
          <Route path="/Listings" component={Listings}></Route>
        </Switch>
      </Router>
    </div>
  );
}