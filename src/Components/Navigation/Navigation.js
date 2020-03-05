import React from 'react';
import '../../Styles/navigation.scss';
import { useHistory } from "react-router-dom";

export default function Navigation() {
    const history = useHistory();

    const login = () => {
        history.push('/login');
    }

    return(
        <header>
            <nav className = 'navigation'>
                <button className = 'button' onClick = {login}>Login</button>
                <button className = 'button'>Register</button>
            </nav>
        </header>
    )
}