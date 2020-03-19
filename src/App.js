import React from 'react';
import './App.css';
//import './style/Style.css';
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
import New_Realtor2 from './pages/New_Realtor2';
import New_Realtor3 from './pages/New_Realtor3';
import New_Realtor4 from './pages/New_Realtor4';
import Help from './pages/Help';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Admin from "./layouts/Admin";
import New_Listing2 from './pages/New_Listing2';
import New_Listing3 from './pages/New_Listing3';
import New_Listing4 from './pages/New_Listing4';
import "./style/Style.scss";

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <RouteWrapper path="/auth" layout={Blank} component={SignIn}></RouteWrapper>
                    <RouteWrapper path="/dashboard" layout={Admin} component={Dashboard}></RouteWrapper>
                    <RouteWrapper path="/realtors/edit/:id" layout={Admin} component={Realtors_Edit}></RouteWrapper>
                    <RouteWrapper path="/realtors/:id" layout={Admin} component={Realtors_View}></RouteWrapper>
                    <RouteWrapper path="/newlisting" layout={Admin} component={New_Listing}></RouteWrapper>
                    <RouteWrapper path="/newrealtor" layout={Admin} component={New_Realtor}></RouteWrapper>
                    <RouteWrapper path="/newrealtor2" layout={Admin} component={New_Realtor2}></RouteWrapper>
                    <RouteWrapper path="/newrealtor3" layout={Admin} component={New_Realtor3}></RouteWrapper>
                    <RouteWrapper path="/newrealtor4" layout={Admin} component={New_Realtor4}></RouteWrapper>
                    <RouteWrapper path="/realtors" layout={Admin} component={Realtors}></RouteWrapper>
                    {/* <RouteWrapper path="/listings/edit/1" layout={Admin} component={Listings_Edit}></RouteWrapper> */}
                    <RouteWrapper path="/listings/edit/:id" layout={Admin} component={Listings_Edit}></RouteWrapper>
                    <RouteWrapper path="/listings/:id" layout={Admin} component={Listings_View}></RouteWrapper>
                    <RouteWrapper path="/listings" exact layout={Admin} component={Listings}></RouteWrapper>
                    <RouteWrapper path="/newlisting" layout={Admin} component={New_Listing}></RouteWrapper>
                    <RouteWrapper path="/help" layout={Admin} component={Help}></RouteWrapper>
                    <RouteWrapper path="/newlisting2" layout={Admin} component={New_Listing2}></RouteWrapper>
                    <RouteWrapper path="/newlisting3" layout={Admin} component={New_Listing3}></RouteWrapper>
                    <RouteWrapper path="/newlisting4" layout={Admin} component={New_Listing4}></RouteWrapper>
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