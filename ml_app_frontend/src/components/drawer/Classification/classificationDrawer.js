import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import {
    Link,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import ClassificationComponent from '../Classification/classificationComponent'


const drawerWidth = 200;
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

function ResponsiveDrawerClassification(props) {
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
                <Link to='/'>
                    <ListItem button key='Home'>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                </Link>
                <Link to='/classification/blogs/classification-introduction'>
                    <ListItem button key='Classification'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Classification' />
                    </ListItem>
                </Link>

                <Link to='/classification/blogs/knn'>
                    <ListItem button key='KNN'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='KNN' />
                    </ListItem>
                </Link>

                <Link to='/classification/blogs/decision-tree'>
                    <ListItem button key='Decesion Tree'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Decision Tree' />
                    </ListItem>
                </Link>

                <Link to='/classification/blogs/svm'>
                    <ListItem button key='Support Vector Machines'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Support Vector Machines' />
                    </ListItem>
                </Link>

                <Link to='/classification/blogs/logistic-regression'>
                    <ListItem button key='Logistic Regression'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Logistic Regression' />
                    </ListItem>
                </Link>

                <Link to='/classification/blogs/naive-bias'>
                    <ListItem button key='Naive Bias'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Naive Bias' />
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
                        <Link to='/' class='mlGuruLogo'>ML GURU</Link>
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
                {/* Component placed here will be seen inside the main body of Drawer */}
                <div className={classes.toolbar} />
                <Switch>
                    {/* Exact Route */}
                    <Route exact path='/classification/blogs'>
                        <ClassificationComponent />
                    </Route>
                    <Route path='/classification/blogs/classification-introduction'>
                        {/* Till date there is no component available for the stuff,yet passed a heading to fill the space. */}
                        <h1>Classification Introduction</h1>
                    </Route>
                    <Route path='/classification/blogs/knn'>
                        <h1>KNN</h1>
                    </Route>
                    <Route path='/classification/blogs/decision-tree'>
                        <h1>Decision Tree</h1>
                    </Route>
                    <Route path='/classification/blogs/svm'>
                        <h1>SVM</h1>
                    </Route>
                    <Route path='/classification/blogs/logistic-regression'>
                        <h1>Logisctic Regression</h1>
                    </Route>
                    <Route path='/classification/blogs/naive-bias'>
                        <h1>Naive Bias</h1>
                    </Route>
                </Switch>

            </main>
        </div>
    );
}

ResponsiveDrawerClassification.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawerClassification;
