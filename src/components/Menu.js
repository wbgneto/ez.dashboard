import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
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
            <ListItem button component={Link} to={"/dashboard"} className="listStyle menu01">
                <span className="lineHeight">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                        <g id="Group_87" data-name="Group 87" transform="translate(-139 -4299)">
                            <rect id="Rectangle_164" data-name="Rectangle 164" width="200" height="200" transform="translate(139 4299)" fill="none"/>
                            <g id="Group_69" data-name="Group 69">
                            <g id="Group_66" data-name="Group 66" transform="translate(4174.279 3598.482) rotate(90)">
                                <rect id="Rectangle_106" data-name="Rectangle 106" width="37" height="198" rx="10" transform="translate(701.518 3952.28) rotate(-90)" fill="#2b879e"/>
                            </g>
                            <g id="Group_67" data-name="Group 67" transform="translate(4116.279 3697.482) rotate(90)">
                                <rect id="Rectangle_106-2" data-name="Rectangle 106" width="37" height="99" rx="10" transform="translate(701.518 3952.279) rotate(-90)" fill="#2b879e"/>
                            </g>
                            <g id="Group_68" data-name="Group 68" transform="translate(4232.279 3650.248) rotate(90)">
                                <rect id="Rectangle_106-3" data-name="Rectangle 106" width="37" height="147" rx="10" transform="translate(701.752 3952.279) rotate(-90)" fill="#2b879e"/>
                            </g>
                          </g>
                        </g>
                    </svg>
                </span>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/listings" className="listStyle menu02">
                <span className="lineHeight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="199.999" viewBox="0 0 200 199.999">
                        <g id="Group_1362" data-name="Group 1362" transform="translate(-658 -4300)">
                        <g id="Group_62" data-name="Group 62" transform="translate(658 4300)">
                        <rect id="Rectangle_104" data-name="Rectangle 104" width="28" height="138" rx="10" transform="translate(0 28) rotate(-90)" fill="#2b879e"/>
                        <rect id="Rectangle_105" data-name="Rectangle 105" width="28" height="138" rx="10" transform="translate(0 83) rotate(-90)" fill="#2b879e"/>
                        <rect id="Rectangle_106" data-name="Rectangle 106" width="28" height="80" rx="10" transform="translate(0 138) rotate(-90)" fill="#2b879e"/>
                        </g>
                        <path id="Exclusion_4" data-name="Exclusion 4" d="M34.631,107H0V57.232L0,31.983,47,0,94,31.981V84.605L94,107l-34.633,0V60.744a6.007,6.007,0,0,0-6-6H40.631a6.007,6.007,0,0,0-6,6V107Z" transform="translate(764 4392.999)" fill="#2b879e"/>
                        </g>
                    </svg>
                </span>
                <ListItemText primary="Listings" />
            </ListItem>
            <ListItem button component={Link} to="/realtors" className="listStyle menu03">
                <span className="lineHeight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
                        <g id="Group_65" data-name="Group 65" transform="translate(-946 -4300)">
                            <g id="Group_63" data-name="Group 63" transform="translate(946 4300)">
                            <rect id="Rectangle_104" data-name="Rectangle 104" width="28" height="138" rx="10" transform="translate(0 28) rotate(-90)" fill="#2b879e"/>
                            <rect id="Rectangle_105" data-name="Rectangle 105" width="28" height="138" rx="10" transform="translate(0 83) rotate(-90)" fill="#2b879e"/>
                            <rect id="Rectangle_106" data-name="Rectangle 106" width="28" height="81" rx="10" transform="translate(0 138) rotate(-90)" fill="#2b879e"/>
                            </g>
                            <path id="Subtraction_15" data-name="Subtraction 15" d="M95,108H0V78.7A60.811,60.811,0,0,1,15.711,68.686a58.961,58.961,0,0,1,18.378-4.725V55.58A29.771,29.771,0,0,1,27.7,8.7a29.566,29.566,0,0,1,50.451,21A29.721,29.721,0,0,1,64.179,54.94V64.2A59.013,59.013,0,0,1,86.4,71.721,61.539,61.539,0,0,1,95,77.738V108Z" transform="translate(1051 4392)" fill="#2b879e"/>
                        </g>
                    </svg>
                </span>
                <ListItemText primary="Realtors" />
            </ListItem>
            <ListItem button component={Link} to="/help" className="listStyle menu04">
                <span className="lineHeight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
                        <g id="Group_70" data-name="Group 70" transform="translate(-410 -4300)">
                            <path id="Subtraction_16" data-name="Subtraction 16" d="M100,200a100.74,100.74,0,0,1-20.154-2.032,99.453,99.453,0,0,1-35.758-15.047,100.292,100.292,0,0,1-36.231-44,99.492,99.492,0,0,1-5.827-18.771,100.974,100.974,0,0,1,0-40.307A99.454,99.454,0,0,1,17.078,44.089a100.292,100.292,0,0,1,44-36.23A99.5,99.5,0,0,1,79.847,2.032a100.979,100.979,0,0,1,40.307,0,99.452,99.452,0,0,1,35.757,15.047,100.29,100.29,0,0,1,36.23,44,99.494,99.494,0,0,1,5.827,18.771,100.976,100.976,0,0,1,0,40.307,99.454,99.454,0,0,1-15.047,35.758,100.291,100.291,0,0,1-44,36.231,99.5,99.5,0,0,1-18.771,5.827A100.737,100.737,0,0,1,100,200Zm0-171.859A71.525,71.525,0,0,0,59.823,40.413,72.068,72.068,0,0,0,33.788,72.029a71.764,71.764,0,0,0,6.625,68.148,72.069,72.069,0,0,0,31.616,26.035,71.764,71.764,0,0,0,68.148-6.625,72.071,72.071,0,0,0,26.035-31.616,71.764,71.764,0,0,0-6.625-68.148,72.069,72.069,0,0,0-31.616-26.035A71.408,71.408,0,0,0,100,28.141Z" transform="translate(410 4300)" fill="#2b879e"/>
                            <rect id="Rectangle_132" data-name="Rectangle 132" width="28" height="80" rx="10" transform="translate(495.497 4344.37)" fill="#2b879e"/>
                            <rect id="Rectangle_133" data-name="Rectangle 133" width="28" height="28" rx="14" transform="translate(495.497 4432.772)" fill="#2b879e"/>
                        </g>
                    </svg>
                </span>
                <ListItemText primary="Help" />
            </ListItem>
        </List>

    </div>
}