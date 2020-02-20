import React from 'react';
import './App.css';
import './style/Style.css';
import Nav from './templates/Nav';
import SignIn from './templates/SignIn';
import SignUp from './templates/SignUp';
import Listings from './templates/Listings';
import Dashboard from './templates/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



export default function App() {
  return (
    <div>
      {/*<SignIn />
       <SignUp /> */}
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