import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../Styles/navigation.scss';
import { useLocation } from 'react-router-dom';
import { logoutAction } from '../../Redux/Actions/LogoutActions';

import getStorePersistor from '../../Redux/store';
import NavigationItem from './NavigationItem';

const { persistor } = getStorePersistor();

export default function Navigation() {
    const { loggedin } = useSelector((state) => state.LoginReducer);
    const location = useLocation().pathname;

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

    return (
        <nav className='navigation'>
            <div className='inner-nav'>
                <NavigationItem 
                    to='/'
                    className={location === '/' ? 'nav-link active' : 'nav-link'}
                    name='Home'
                />
                
                {loggedin ? (
                    <>
                        <NavigationItem 
                            to='/account'
                            className={location === '/account' ? 'nav-link active' : 'nav-link'}
                            name='Account'
                        />
                        <NavigationItem
                            to='/'
                            className='nav-link'
                            name='Logout'
                            onClick={logout}
                        />
                    </>
                ) : (
                    <>
                        <NavigationItem
                            to='/login'
                            className={location === '/login' ? 'nav-link active' : 'nav-link'}
                            name='Login'
                        />
                        <NavigationItem 
                            to='/register'
                            className={location === '/register' ? 'nav-link active' : 'nav-link'}
                            name='Register'
                        />
                    </>
                )}
            </div>
        </nav>
    );
}
