import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import RegressionComponent from '../Regression/regressionComponent'
import SlopeAndIntercept from './slope&interceptComp'

const drawerWidth = 230;
const useStyles = makeStyles((theme) => ({
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
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawerRegression(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let obj = props;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let match = useRouteMatch();

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
                <Link to='/'>
                    <ListItem button key='Home'>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                </Link>
                <Link to='/regression/blogs/regression-introduction'>
                    <ListItem button key='Regression'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Regression' />
                    </ListItem>
                </Link>

                <Link to='/regression/blogs/slope-and-intercept'>
                    <ListItem button key='Slope & Intercept'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Slope & Intercept' />
                    </ListItem>
                </Link>

                <Link to='/regression/blogs/linear-regression'>
                    <ListItem button key='Linear Regression'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Linear Regression' />
                    </ListItem>
                </Link>

                <Link to='/regression/blogs/multiple-linear-regression'>
                    <ListItem button key='Multiple Linear Regression'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Multiple Linear Regression' />
                    </ListItem>
                </Link>

                <Link to='/regression/blogs/polynomial-regression'>
                    <ListItem button key='Polynomial Regression'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Polynomial Regression' />
                    </ListItem>
                </Link>

                <Link to='/regression/blogs/bias-variance-tradeoff'>
                    <ListItem button key='Bias Variance tradeoff'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Bias Variance tradeoff' />
                    </ListItem>
                </Link>

                <Link to='/regression/blogs/regularization-in-regression'>
                    <ListItem button key='Regularization in Regression'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Regularization in Regression' />
                    </ListItem>
                </Link>

                <Link to='/regression/blogs/generalization-in-regression'>
                    <ListItem button key='Generalization in Regression'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Generalization in Regression' />
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <Link to='/' class='mlGuruLogo'>Regression</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
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
                        {drawer}
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
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content} id='mainGridHome'>
                <div className={classes.toolbar} />

                <Switch>
                    <Route exact path='/regression/blogs'>
                        <RegressionComponent />
                    </Route>
                    <Route  path='/regression/blogs/regression-introduction'>
                        <h1>Regression Introduction</h1>
                    </Route>
                    <Route  path='/regression/blogs/slope-and-intercept'>
                        <SlopeAndIntercept/>
                    </Route>
                    <Route  path='/regression/blogs/linear-regression'>
                        <h1>Linear Regression</h1>
                    </Route>
                    <Route  path='/regression/blogs/multiple-linear-regression'>
                        <h1>Multiple Linear Regression</h1>
                    </Route>
                    <Route  path='/regression/blogs/polynomial-regression'>
                        <h1>Polynomial Regression</h1>
                    </Route>
                    <Route  path='/regression/blogs/bias-variance-tradeoff'>
                        <h1>Bias Variance Tradeoff</h1>
                    </Route>
                    <Route  path='/regression/blogs/regularization-in-regression'>
                        <h1>Regularization in Regression</h1>
                    </Route>
                    <Route  path='/regression/blogs/generalization-in-regression'>
                        <h1>Generalization in Regression</h1>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

ResponsiveDrawerRegression.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawerRegression;
