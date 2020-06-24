import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../Styles/navigation.scss';
import { useHistory } from "react-router-dom";
import { logoutAction } from '../../Redux/Actions/LogoutActions';

export default function Navigation() {
    const {loggedin} = useSelector((state) => state.LoginReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    const login = () => {
        history.push('/login');
    }

    const register = () => {
        history.push('/register');
    }

    const account = () => {
        history.push('/account');
    }

    const logout = () => {
        dispatch(logoutAction());
        history.push('/');
    }

    return(
        <nav className = 'navigation'>
            <div className="inner-nav">
                {loggedin ?
                    <>
                    <button className = 'button' onClick={account}>Account</button> 
                    <button className = 'button' onClick = {logout}>Logout</button>
                    </>
                    :
                    <>
                    <button className = 'button' onClick = {login}>Login</button>
                    <button className = 'button' onClick = {register}>Register</button>
                    </>
                }
            </div>
        </nav>
    )
}