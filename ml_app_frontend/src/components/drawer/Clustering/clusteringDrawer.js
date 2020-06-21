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
import { Link, } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import ClusteringComponent from '../Clustering/clusteringComponent'


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

function ResponsiveDrawerClustering(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let obj = props;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let match = useRouteMatch();
    console.log(match.url)

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
                <Link to={'/clustering/blogs/clustering-introduction'}>
                    <ListItem button key='Clustering'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Clustering' />
                    </ListItem>
                </Link>
                <Link to={'/clustering/blogs/kmeans'}>
                    <ListItem button key='K-Means'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='K-Means' />
                    </ListItem>
                </Link>
                <Link to='/clustering/blogs/kmedians'>
                    <ListItem button key='K-Medians'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='K-Medians' />
                    </ListItem>
                </Link>
                <Link to='/clustering/blogs/dbscan'>
                    <ListItem button key='DBScan'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='DBScan' />
                    </ListItem>
                </Link>
                <Link to='/clustering/blogs/hierarchical-clustering'>
                    <ListItem button key='Hierarchical Clustering'>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary='Hierarchical Clustering' />
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
                    <Route path='/clustering/blogs/clustering-introduction' >
                        {/* Till date there is no component available for the stuff,yet passed a heading to fill the space. */}
                        <h1>Clustering-introduction</h1>
                    </Route>
                    <Route path='/clustering/blogs/kmeans' >
                        <h1>K-Means</h1>
                    </Route>
                    <Route path='/clustering/blogs/kmedians' >
                        <h1>K-Medians</h1>
                    </Route>
                    <Route path='/clustering/blogs/dbscan' >
                        <h1>DBScan</h1>
                    </Route>
                    <Route path='/clustering/blogs/hierarchical-clustering' >
                        <h1>Hierarchical-Clustering</h1>
                    </Route>
                    <Route exact path='/clustering/blogs/'>
                        <ClusteringComponent />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

ResponsiveDrawerClustering.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawerClustering;
