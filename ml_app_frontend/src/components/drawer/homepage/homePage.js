import React from 'react'
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
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
// import { Switch } from '@material-ui/core';
import HomeComponent from '../homepage/homeComponet';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import About from './aboutComponent'

export default function HomePage(props) {
    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            {/* <CssBaseline /> */}
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        <Link to='/' class='mlGuruLogo'>ML GURU</Link>
                    </Typography>
                    <div className='appBarIcons'>
                        <IconButton ><Link to='/about'><InfoIcon id='icon' /></Link></IconButton>
                        <IconButton  ><Link to='/contact'><PermContactCalendarIcon id='icon' /></Link></IconButton>
                        <IconButton >
                            <FormDialog />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div style={{ marginTop: '10vh' }}></div>
            <div id='marginControlDiv'>
                <h2>ML GURU</h2>
                <h3>Your Learning Curve!</h3>
            </div>
            <HomeComponent />
        </div>
    )
}


function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <MailIcon id='icon' onClick={handleClickOpen} />
            
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
          </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}