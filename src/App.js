import React from 'react';
// import Dashboard from './templates/Dashboard';
import ResponsiveDrawer from './templates/ResponsiveDrawer';


export default function App() {
  return (
    <div>
      
      {/* @TODO: Implement routing here
      -> Create a route for SignIn
      -> SignIn route should not be wrapped Dashboard component
      -> Separate sidebar in a diferent component
      -> Separate top bar in diferent component

      (We want to have different templates per route, because Sign In should not render the dashboard template) */}

      {/* <Dashboard>
        My content goes here
      </Dashboard> */}
      <ResponsiveDrawer>
        My content goes here
      </ResponsiveDrawer>
    </div>
  );
}