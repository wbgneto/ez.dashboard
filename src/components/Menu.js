import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ViewListIcon from '@material-ui/icons/ViewList';
import PeopleIcon from '@material-ui/icons/People';
import HelpIcon from '@material-ui/icons/Help';
import BarChartIcon from '@material-ui/icons/BarChart';
import Logo from './../images/Logo1.png';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    logo: {
        marginTop:13,
    }
}));

export default () => {
    const classes = useStyles();

    return <div>
        <div className={classes.toolbar} />

        <Typography 
        variant="h6" 
        align="center" 
        className="logo" 
        button component={Link} to={"/dashboard"}
        >
        <img className={classes.logo} src={Logo} alt="logo"></img>
        </Typography>

        <List>
            <ListItem button component={Link} to={"/dashboard"} className="listStyle">
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/listings" className="listStyle">
                <ListItemIcon>
                    <ViewListIcon />
                </ListItemIcon>
                <ListItemText primary="Listings" />
            </ListItem>
            <ListItem button component={Link} to="/realtors" className="listStyle">
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Realtors" />
            </ListItem>
            <ListItem button component={Link} to="/help" className="listStyle">
                <ListItemIcon>
                    <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
            </ListItem>
        </List>

    </div>
}