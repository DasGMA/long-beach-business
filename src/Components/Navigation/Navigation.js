import React, { useState } from 'react';
import { AppBar, IconButton, makeStyles, SwipeableDrawer, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import DrawerList from './DrawerList';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    navigation: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    activeButton: {
        marginLeft: theme.spacing(1),
        border: '0.1rem solid white'
    },
    button: {
        marginLeft: theme.spacing(1),
        '&:hover': {
            border: '0.1rem solid white'
        }
    }
  }));
  

export default function Navigation() {
    const { loggedin } = useSelector((state) => state.LoginReducer);
    const location = useLocation().pathname;
    const classes = useStyles();
    const [drawyerOpened, setDrawyerOpened] = useState(false);

    const toggleDrawer = () => {
        if (loggedin === false) return;
        setDrawyerOpened(!drawyerOpened);
    }

    return (
        <>
            <AppBar position='fixed' className={classes.navigation}>
                <Toolbar>
                    {loggedin === true && <IconButton 
                        edge='start'
                        className={classes.menuButton} 
                        color='inherit' 
                        aria-label='menu'
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>}
                    <div className={classes.root}>
                        <NavigationItem 
                            to='/'
                            className={location === '/' ? classes.activeButton : classes.button}
                            name='Home'
                        />
                    </div>
                    {loggedin ? (
                    <>
                        {/* Maybe will display full menu while not on mobile. Will see later on */}
                    </>
                    ) : (
                    <>
                        <NavigationItem
                            to='/login'
                            className={location === '/login' ? classes.activeButton : classes.button}
                            name='Login'
                        />
                        <NavigationItem 
                            to='/register'
                            className={location === '/register' ? classes.activeButton : classes.button}
                            name='Register'
                        />
                    </>
                    )}
                </Toolbar>
            </AppBar>
            <Toolbar />
            <SwipeableDrawer
                anchor='left'
                open={drawyerOpened}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
                color='inherit'
                disableBackdropTransition
            >
                <DrawerList onClick={toggleDrawer} path={location}/>
            </SwipeableDrawer>
        </>
    );
}
