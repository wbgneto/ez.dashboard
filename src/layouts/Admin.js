import React, { useRef } from 'react';
import {makeStyles, useTheme, withTheme} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from "../components/Menu";
import IconButton from "@material-ui/core/IconButton";
import Avatar from '@material-ui/core/Avatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        backgroundColor:'#2B879E',
    },
    drawerPaper: {
        width: drawerWidth,
        boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.05)',
        borderRight: 'none',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: 45,
        backgroundColor:'#fafafa'
    },
}));
function ResponsiveDrawer(props) {
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const signOutRef = useRef(null);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const showSignOut = (e) => {
        signOutRef.current.style.display='block'; 
    }
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen(prevOpen => !prevOpen);
    };
  
    const handleClose = event => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className="appbarStyle">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {/* App Bar */}
                    </Typography>
                    <div className="userBox">
                        <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        className="displayNone"
                        >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 200 200">
                                <g id="Group_78" data-name="Group 78" transform="translate(-139.44 -4789)">
                                    <g id="Group_77" data-name="Group 77" transform="translate(139.44 4789)">
                                    <rect id="Rectangle_144" data-name="Rectangle 144" width="25" height="84" rx="10" transform="translate(24.5 75.607)" fill="#2b879e"/>
                                    <rect id="Rectangle_145" data-name="Rectangle 145" width="25" height="86" rx="10" transform="translate(154.5 75.655)" fill="#2b879e"/>
                                    <path id="Union_18" data-name="Union 18" d="M10,158.5a10,10,0,0,1-10-10v-5a10,10,0,0,1,10-10H49.493c-.734-.677-1.453-1.367-2.143-2.053a77.139,77.139,0,0,1-16.585-24.476A76.6,76.6,0,0,1,37.9,33.948a77.518,77.518,0,0,1,135.475,13.08,76.612,76.612,0,0,1-7.134,73.023,77.772,77.772,0,0,1-9.45,11.4c-.7.693-1.416,1.382-2.145,2.053H190a10,10,0,0,1,10,10v5a10,10,0,0,1-10,10Zm144.333-25V75h-.038a51.7,51.7,0,0,0-15.269-34.77A52.365,52.365,0,0,0,53.916,56.759,51.4,51.4,0,0,0,49.847,75H49.81v58.5Z" transform="translate(0 7.001)" fill="#2b879e"/>
                                    <path id="Intersection_5" data-name="Intersection 5" d="M0,0H103.99c-12.018,13.99-30.84,23-52,23S12.018,13.99,0,0Z" transform="translate(50.082 177)" fill="#2b879e"/>
                                    <path id="Intersection_6" data-name="Intersection 6" d="M0,0H39.99a25.07,25.07,0,0,1-20,10A25.07,25.07,0,0,1,0,0Z" transform="translate(122.063 10) rotate(180)" fill="#2b879e"/>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span className="spanMar">|</span>
                        <span className="displayNone">
                            <b>Harry Tran</b>
                        </span>
                        <span className="spanMar">
                            <Avatar alt="" src="././images/profile.png" />
                        </span>
                        </Button>
                        <span className="alarmIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 200 200">
                                <g id="Group_78" data-name="Group 78" transform="translate(-139.44 -4789)">
                                    <g id="Group_77" data-name="Group 77" transform="translate(139.44 4789)">
                                    <rect id="Rectangle_144" data-name="Rectangle 144" width="25" height="84" rx="10" transform="translate(24.5 75.607)" fill="#ffffff"/>
                                    <rect id="Rectangle_145" data-name="Rectangle 145" width="25" height="86" rx="10" transform="translate(154.5 75.655)" fill="#ffffff"/>
                                    <path id="Union_18" data-name="Union 18" d="M10,158.5a10,10,0,0,1-10-10v-5a10,10,0,0,1,10-10H49.493c-.734-.677-1.453-1.367-2.143-2.053a77.139,77.139,0,0,1-16.585-24.476A76.6,76.6,0,0,1,37.9,33.948a77.518,77.518,0,0,1,135.475,13.08,76.612,76.612,0,0,1-7.134,73.023,77.772,77.772,0,0,1-9.45,11.4c-.7.693-1.416,1.382-2.145,2.053H190a10,10,0,0,1,10,10v5a10,10,0,0,1-10,10Zm144.333-25V75h-.038a51.7,51.7,0,0,0-15.269-34.77A52.365,52.365,0,0,0,53.916,56.759,51.4,51.4,0,0,0,49.847,75H49.81v58.5Z" transform="translate(0 7.001)" fill="#ffffff"/>
                                    <path id="Intersection_5" data-name="Intersection 5" d="M0,0H103.99c-12.018,13.99-30.84,23-52,23S12.018,13.99,0,0Z" transform="translate(50.082 177)" fill="#ffffff"/>
                                    <path id="Intersection_6" data-name="Intersection 6" d="M0,0H39.99a25.07,25.07,0,0,1-20,10A25.07,25.07,0,0,1,0,0Z" transform="translate(122.063 10) rotate(180)" fill="#ffffff"/>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>
                                        <span style={{ lineHeight:'1', margin: '0px 8px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200">
                                                <g id="Group_1372" data-name="Group 1372" transform="translate(-142 -5296)">
                                                    <path id="Subtraction_28" data-name="Subtraction 28" d="M100,185.832a101.242,101.242,0,0,1-20.154-2.021A99.954,99.954,0,0,1,7.859,125.061a98.6,98.6,0,0,1-5.828-18.677,100,100,0,0,1,0-40.106A98.711,98.711,0,0,1,17.078,30.7,100.314,100.314,0,0,1,44.089,3.825C45.764,2.7,47.5,1.608,49.246.583V35.715l-.022.022-.037.036a72.122,72.122,0,0,0-8.774,10.582,71.254,71.254,0,0,0,8.774,90.535,72.037,72.037,0,0,0,110.4-10.582,71.138,71.138,0,0,0,0-79.952,72.129,72.129,0,0,0-8.775-10.582c-.348-.346-.706-.695-1.064-1.037V0c2.1,1.2,4.174,2.488,6.163,3.825A100.293,100.293,0,0,1,182.921,30.7a98.994,98.994,0,0,1,0,111.263,99.974,99.974,0,0,1-62.768,41.847A101.25,101.25,0,0,1,100,185.832Z" transform="translate(142 5310.167)" fill="#2b879e"/>
                                                    <rect id="Rectangle_132" data-name="Rectangle 132" width="28" height="80" rx="10" transform="translate(228 5296)" fill="#2b879e"/>
                                                </g>
                                            </svg>
                                        </span>
                                        <span>
                                            Log out
                                        </span>
                                    </MenuItem>
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <Menu/>
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <Menu/>
                    </Drawer>
                </Hidden>
            </div>
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    );
}
ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any,
};
export default ResponsiveDrawer;