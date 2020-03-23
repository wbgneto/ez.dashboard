import React, {useState} from 'react';
import SignIn from './pages/SignIn';
import Blank from './layouts/Blank';
import Dashboard from './pages/Dashboard';
import Listings from './pages/Listings/Listings';
import Realtors from './pages/Realtors/Realtors';
import Realtors_Edit from './pages/Realtors/Realtors_Edit';
import RealtorsView from './pages/Realtors/RealtorsView';
import EditListing from './pages/Listings/EditListing';
import ViewListing from './pages/Listings/ViewListing';
import CreateListing from './pages/Listings/CreateListing';
import New_Realtor from './pages/Realtors/New_Realtor';
import Help from './pages/Help';
import Admin from "./layouts/Admin";
import New_Realtor2 from './pages/Realtors/New_Realtor2';
import New_Realtor3 from './pages/Realtors/New_Realtor3';
import New_Realtor4 from './pages/Realtors/New_Realtor4';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./style/Style.scss";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from '@material-ui/lab/Alert';

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    {/* Auth */}
                    <RouteWrapper path="/" exact layout={Blank} component={SignIn}></RouteWrapper>

                    {/* Dashboard */}
                    <RouteWrapper path="/dashboard" layout={Admin} component={Dashboard}></RouteWrapper>

                    {/* Listings */}
                    <RouteWrapper path="/listings/new" layout={Admin} component={CreateListing}></RouteWrapper>
                    <RouteWrapper path="/listings/edit/:id" layout={Admin} component={EditListing}></RouteWrapper>
                    <RouteWrapper path="/listings/:id" layout={Admin} component={ViewListing}></RouteWrapper>
                    <RouteWrapper path="/listings" exact layout={Admin} component={Listings}></RouteWrapper>

                    {/* Realtors */}
                    <RouteWrapper path="/realtors/edit" layout={Admin} component={Realtors_Edit}></RouteWrapper>
                    <RouteWrapper path="/realtors/:id" layout={Admin} component={RealtorsView}></RouteWrapper>
                    <RouteWrapper path="/realtors" layout={Admin} component={Realtors}></RouteWrapper>
                    <RouteWrapper path="/newrealtor" layout={Admin} component={New_Realtor}></RouteWrapper>
                    <RouteWrapper path="/newrealtor2" layout={Admin} component={New_Realtor2}></RouteWrapper>
                    <RouteWrapper path="/newrealtor3" layout={Admin} component={New_Realtor3}></RouteWrapper>
                    <RouteWrapper path="/newrealtor4" layout={Admin} component={New_Realtor4}></RouteWrapper>

                    {/* Help */}
                    <RouteWrapper path="/help" layout={Admin} component={Help}></RouteWrapper>
                </Switch>
            </Router>
        </div>
    );
}

function RouteWrapper({component: Component, layout: Layout, ...rest}) {
    const [snackbar, setSnackbar] = useState({
        show: false,
        severity: "success",
        message: "Test",
    });

    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} showSnackbar={(severity, message) => setSnackbar({ show: true, severity, message})}/>
                <Snackbar open={snackbar.show} autoHideDuration={3000} onClose={() => setSnackbar({ ...snackbar, show: false})}>
                    <Alert onClose={() => setSnackbar({ ...snackbar, show: false})} severity={snackbar.severity}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Layout>
        }/>
    );
}