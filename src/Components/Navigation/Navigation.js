import React from 'react';
import '../../Styles/navigation.scss';
import { useHistory } from "react-router-dom";

export default function Navigation() {
    const history = useHistory();

    const login = () => {
        history.push('/login');
    }

    const register = () => {
        history.push('/register');
    }

    return(
        <nav className = 'navigation'>
            <button className = 'button' onClick = {login}>Login</button>
            <button className = 'button' onClick = {register}>Register</button>
        </nav>
    )
}