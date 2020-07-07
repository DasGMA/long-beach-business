import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/register.scss";
import facebook from "../../Assets/facebook.png";
import google from "../../Assets/google.png";
import { changeHandle, registerAction, checkForRegisterErrors, clearErrors, clearInput } from "../../Redux/Actions/RegisterActions";
import { useHistory } from "react-router-dom";
import Spinner from '../Reusable/Spinner/Spinner';

export default function Register() {
    const {
        firstName, 
        lastName, 
        email, 
        password, 
        zipcode, 
        userName, 
        accountType,
        errors,
        registered,
        registering
    } = useSelector(state => state.RegisterReducer);

    const history = useHistory();
    const dispatch = useDispatch();

    console.log(useSelector(state => state.RegisterReducer))

    useEffect(() => {
        if (registered) {
            dispatch(clearInput());
            history.push("/");
        }

        if (history.location !== "/login") {
            dispatch(clearInput());
        }
    }, [registered, dispatch, history]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (dispatch(checkForRegisterErrors()) === false) {
            dispatch(registerAction());
        };
    };

    const handleChange = (event) => {
        dispatch(changeHandle(event));
    };

    const onFocus = () => {
        dispatch(clearErrors());
    };

    return (
        <div className='register'>
            <div className='register-top'>
                <h1>Sign up for LBO</h1>
                <p>Connect your business with comminity.</p>
                <p>
                    By continuing, you agree to{" "}
                    <a href='!#'>LBO's Terms of Service</a> and <br />
                    <a href='!#'>Privacy Policy</a>.
                </p>
            </div>
            <div className='column-section'>
                <button className='social-button'>
                    <img
                        className='icon'
                        src={facebook}
                        alt='Register with facebook'
                    />{" "}
                    Sign up with Facebook
                </button>
                <button className='social-button'>
                    <img
                        className='icon'
                        src={google}
                        alt='Register with google'
                    />{" "}
                    Sign up with Google
                </button>
            </div>
            <h2>
                <span>OR</span>
            </h2>
            <form className='column-section'>
                <div className='name-section'>
                    <input
                        className='name-input'
                        name='firstName'
                        type='text'
                        placeholder='First Name'
                        value={firstName}
                        onChange={handleChange}
                        onFocus={onFocus}
                    />
                    <input
                        className='name-input'
                        name='lastName'
                        type='text'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={handleChange}
                        onFocus={onFocus}
                    />
                </div>
                <input
                    className='input'
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={userName}
                    onChange={handleChange}
                    onFocus={onFocus}
                />
                <input
                    className='input'
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={handleChange}
                    onFocus={onFocus}
                />
                <input
                    className='input'
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={handleChange}
                    onFocus={onFocus}
                />
                <select name='accountType' onChange={handleChange} onFocus={onFocus}>
                    <option value='none'>Choose Account Type</option>
                    <option value='customer'>Customer</option>
                    <option value='business'>Business</option>
                </select>
                <br />
                {accountType === 'business' && 
                    <input
                        className='input'
                        name='zip'
                        type='number'
                        maxLength='5'
                        placeholder='Business ZIP code'
                        value={zipcode}
                        onChange={handleChange}
                        onFocus={onFocus}
                    />
                }
            </form>
            <div className='column-section'>
                <button className='login-button' onClick={handleSubmit}>
                    {registering === true ? (
                        <Spinner loading={registering} size={"4rem"} />
                    ) : (
                        "Signup"
                    )}
                </button>
                <span className='span-text'>
                    Already on LBO? <a href='!#'>Log In</a>
                </span>
            </div>
        </div>
    );
}
