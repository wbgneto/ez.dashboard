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

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
}));

export default () => {
    const classes = useStyles();

    return <div>
        <div className={classes.toolbar} />

        <Typography variant="h6" align="center" >
            LOGO
        </Typography>

        <List>
            <ListItem button component={Link} to={"/dashboard"}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/listings">
                <ListItemIcon>
                    <ViewListIcon />
                </ListItemIcon>
                <ListItemText primary="Listings" />
            </ListItem>
            <ListItem button component={Link} to="/realtors">
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Realtors" />
            </ListItem>
            <ListItem button component={Link} to="/help">
                <ListItemIcon>
                    <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
            </ListItem>
        </List>

    </div>
}