import React from 'react';
import './App.css';
//import './style/Style.css';
import SignIn from './pages/SignIn';
import Blank from './layouts/Blank';
import Dashboard from './pages/Dashboard';
import Listings from './pages/Listings/Listings';
import Realtors from './pages/Realtors/Realtors';
import Realtors_Edit from './pages/Realtors/Realtors_Edit';
import RealtorsView from './pages/Realtors/RealtorsView';
import Listings_Edit from './pages/Listings/Listings_Edit';
import ListingView from './pages/Listings/ListingView';
import CreateListing from './pages/Listings/CreateListing';
import New_Realtor from './pages/Realtors/New_Realtor';
import Help from './pages/Help';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Admin from "./layouts/Admin";
import CreateListing2 from './pages/Listings/CreateListing2';
import CreateListing3 from './pages/Listings/CreateListing3';
import CreateListing4 from './pages/Listings/CreateListing4';
import New_Realtor2 from './pages/Realtors/New_Realtor2';
import New_Realtor3 from './pages/Realtors/New_Realtor3';
import New_Realtor4 from './pages/Realtors/New_Realtor4';
import "./style/Style.scss";

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <RouteWrapper path="/auth" layout={Blank} component={SignIn}></RouteWrapper>
                    <RouteWrapper path="/dashboard" layout={Admin} component={Dashboard}></RouteWrapper>
                    <RouteWrapper path="/realtors/edit" layout={Admin} component={Realtors_Edit}></RouteWrapper>
                    <RouteWrapper path="/realtors/:id" layout={Admin} component={RealtorsView}></RouteWrapper>
                    <RouteWrapper path="/newlisting" layout={Admin} component={CreateListing}></RouteWrapper>
                    <RouteWrapper path="/newrealtor" layout={Admin} component={New_Realtor}></RouteWrapper>
                    <RouteWrapper path="/realtors" layout={Admin} component={Realtors}></RouteWrapper>
                    {/* <RouteWrapper path="/listings/edit/1" layout={Admin} component={Listings_Edit}></RouteWrapper> */}
                    <RouteWrapper path="/listings/edit/:id" layout={Admin} component={Listings_Edit}></RouteWrapper>
                    <RouteWrapper path="/listings/:id" layout={Admin} component={ListingView}></RouteWrapper>
                    <RouteWrapper path="/listings" exact layout={Admin} component={Listings}></RouteWrapper>
                    <RouteWrapper path="/help" layout={Admin} component={Help}></RouteWrapper>
                    <RouteWrapper path="/newlisting2" layout={Admin} component={CreateListing2}></RouteWrapper>
                    <RouteWrapper path="/newlisting3" layout={Admin} component={CreateListing3}></RouteWrapper>
                    <RouteWrapper path="/newlisting4" layout={Admin} component={CreateListing4}></RouteWrapper>
                    <RouteWrapper path="/newrealtor2" layout={Admin} component={New_Realtor2}></RouteWrapper>
                    <RouteWrapper path="/newrealtor3" layout={Admin} component={New_Realtor3}></RouteWrapper>
                    <RouteWrapper path="/newrealtor4" layout={Admin} component={New_Realtor4}></RouteWrapper>
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