import React, { useState } from 'react'
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
// import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default function Header() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    <Link to='/' class='mlGuruLogo'>ML GURU</Link>
                </Typography>
                <div className='appBarIcons'>
                    <a className='iconContainer' style={{ marginRight: '1vw' }}><Link to='/about'><InfoIcon id='icon' /></Link></a>
                    <a className='iconContainer' style={{ marginRight: '1vw' }}><Link to='/contact'><PermContactCalendarIcon id='icon' /></Link></a>
                    <a className='iconContainer' style={{ marginRight: '1vw' }}>
                        <FormDialog />
                    </a>
                    <a className='iconContainer' style={{ marginRight: '1vw' }}>
                        <LongMenu />
                    </a>
                </div>
            </Toolbar>
        </AppBar>
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



const options = [
    'Regression',
    'Classification',
    'Clustering',
    'Recommendor Systems',
];

const ITEM_HEIGHT = 48;

function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <a
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon id='icon' />
            </a>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '30ch',
                    },
                }}
            >
                {options.map((option) => (
                    <Link to='/about'>
                        <MenuItem  key={option} selected={option === 'Pyxis'}>
                            {option}
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </div >
    );
}