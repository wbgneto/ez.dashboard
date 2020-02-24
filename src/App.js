import React from 'react';
import './App.css';
import './style/Style.css';
import Nav from './templates/Nav';
import SignIn from './templates/SignIn';
import SignUp from './templates/SignUp';
import Dashboard from './templates/Dashboard';
import Listings from './templates/Listings';
import Realtors from './templates/Realtors';
import Realtors_Edit from './templates/Realtors_Edit';
import Realtors_View from './templates/Realtors_View';
import Help from './templates/Help';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp />  */}
      <Router>
        <Nav />
        <Switch>
          <Route path="/Dashboard" component={Dashboard}></Route>
          <Route path="/Listings" component={Listings}></Route>
          <Route path="/Realtors" component={Realtors}></Route>
          <Route path="/Realtors_Edit" component={Realtors_Edit}></Route>
          <Route path="/Realtors_View" component={Realtors_View}></Route>
          <Route path="/Help" component={Help}></Route>
        </Switch>
      </Router>
    </div>
  );
}