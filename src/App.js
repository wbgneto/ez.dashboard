import React from 'react';
import './App.css';
import './style/Style.css';
import SignIn from './pages/SignIn';
import Blank from './layouts/Blank';
import Dashboard from './pages/Dashboard';
import Listings from './pages/Listings';
import Realtors from './pages/Realtors';
import Realtors_Edit from './pages/Realtors_Edit';
import Realtors_View from './pages/Realtors_View';
import Listings_Edit from './pages/Listings_Edit';
import Listings_View from './pages/Listings_View';
import New_Listing from './pages/New_Listing';
import New_Realtor from './pages/New_Realtor';
import Help from './pages/Help';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Admin from "./layouts/Admin";

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <RouteWrapper path="/auth" layout={Blank} component={SignIn}></RouteWrapper>
                    <RouteWrapper path="/dashboard" layout={Admin} component={Dashboard}></RouteWrapper>
                    <RouteWrapper path="/realtors/edit" layout={Admin} component={Realtors_Edit}></RouteWrapper>
                    <RouteWrapper path="/realtors/1" layout={Admin} component={Realtors_View}></RouteWrapper>
                    <RouteWrapper path="/newlisting" layout={Admin} component={New_Listing}></RouteWrapper>
                    <RouteWrapper path="/newrealtor" layout={Admin} component={New_Realtor}></RouteWrapper>
                    <RouteWrapper path="/realtors" layout={Admin} component={Realtors}></RouteWrapper>
                    <RouteWrapper path="/listings/edit/1" layout={Admin} component={Listings_Edit}></RouteWrapper>
                    <RouteWrapper path="/listings/1" layout={Admin} component={Listings_View}></RouteWrapper>
                    <RouteWrapper path="/listings" layout={Admin} component={Listings}></RouteWrapper>
                    <RouteWrapper path="/newlisting" layout={Admin} component={New_Listing}></RouteWrapper>
                    <RouteWrapper path="/help" layout={Admin} component={Help}></RouteWrapper>
                </Switch>
            </Router>
        </div>
    );
}

function RouteWrapper({component: Component, layout: Layout, ...rest}) {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        }/>
    );
}