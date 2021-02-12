import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useSelector, useDispatch } from 'react-redux';
//import '../../Styles/navigation.scss';
import { useLocation } from 'react-router-dom';
import { logoutAction } from '../../Redux/Actions/LogoutActions';

import getStorePersistor from '../../Redux/store';
import NavigationItem from './NavigationItem';

const { persistor } = getStorePersistor();

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    navigation: {
        backgroundColor: '#000000',
        opacity: '0.7'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    activeButton: {
        '&:active': {
            borderBottom: 'white'
        }
    },
    button: {
        '&:hover': {
            borderBottom: 'white'
        }
    }
  }));
  

export default function Navigation() {
    const { loggedin } = useSelector((state) => state.LoginReducer);
    const location = useLocation().pathname;
    const classes = useStyles();
    const dispatch = useDispatch();


    const logout = () => {
        dispatch(logoutAction());
        persistor.purge()
            .then(() => {
            return persistor.flush()
            })
            .then(() => {
            persistor.pause()
            });
    };
console.log({location})
    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.navigation}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color='inherit' aria-label='menu'>
                        <MenuIcon />
                    </IconButton>
                    {loggedin ? (
                    <>
                        <NavigationItem 
                            to='/account'
                            className={location === '/account' && classes.button}
                            name='Account'
                        />
                        <NavigationItem
                            to='/'
                            className={classes.button}
                            name='Logout'
                            onClick={logout}
                        />
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
                            className={classes.button}
                            name='Register'
                        />
                    </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
        // <nav className='navigation'>
        //     <div className='inner-nav'>
        //         <NavigationItem 
        //             to='/'
        //             className={location === '/' ? 'nav-link active' : 'nav-link'}
        //             name='Home'
        //         />
                
        //         {loggedin ? (
        //             <>
        //                 <NavigationItem 
        //                     to='/account'
        //                     className={location === '/account' ? 'nav-link active' : 'nav-link'}
        //                     name='Account'
        //                 />
        //                 <NavigationItem
        //                     to='/'
        //                     className='nav-link'
        //                     name='Logout'
        //                     onClick={logout}
        //                 />
        //             </>
        //         ) : (
        //             <>
        //                 <NavigationItem
        //                     to='/login'
        //                     className={location === '/login' ? 'nav-link active' : 'nav-link'}
        //                     name='Login'
        //                 />
        //                 <NavigationItem 
        //                     to='/register'
        //                     className={location === '/register' ? 'nav-link active' : 'nav-link'}
        //                     name='Register'
        //                 />
        //             </>
        //         )}
        //     </div>
        // </nav>
    );
}
