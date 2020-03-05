import React, { useState } from 'react';
import '../../Styles/login.scss';
import facebook from '../../Assets/signin-assets/facebookLogin.png';
import google from '../../Assets/signin-assets/googleLogin.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const handleEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    return (
        <div className = 'column-section'>
            <div>
                <h1>Log In to LBB</h1>
                <p>New to LBB? <a href = '#'> Register</a> </p>
                <p>By logging in, you agree to <a href = '#'>LBB's Terms of Service</a> and <a href = '#'>Privacy Policy</a></p>
            </div>
            <div className = 'column-section'>
                <button className = 'social-button'><img src = {facebook} /></button>
                <button className = 'social-button'><img src = {google} /></button>
            </div>
            <hr/>
            <div className = 'column-section'>
                <input 
                    className = 'input'
                    placeholder = 'Email'
                    value = {email}
                    onChange = {handleEmail}
                />
                <input
                    className = 'input'
                    type = 'password'
                    placeholder = 'Password'
                    value = {password}
                    onChange = {handlePassword}
                />
            <span className = 'span-text'><a href = '#'>Forgot password?</a></span>
            </div>
            <div className = 'column-section'>
                <button className = 'login-button'>Log In</button>
                <span className = 'span-text'>New to LBB? <a href = '#'>Register</a></span>
            </div>
        </div>
    )
}