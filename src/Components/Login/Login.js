import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/login.scss";
import facebook from "../../Assets/facebook.png";
import google from "../../Assets/google.png";
import { loginAction, resetErrors, setUsername, setPassword, changeHandle, checkForErrors } from "../../Redux/Actions/LoginActions";
import { useHistory } from "react-router-dom";
import Spinner from "../Reusable/Spinner/Spinner";

export default function Login() {
    const history = useHistory();
    const {
        errors,
        logingin, 
        loggedin,
        userName,
        password
    } = useSelector((state) => state.LoginReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        if (loggedin) {
            dispatch(setUsername(""));
            dispatch(setPassword(""));
            history.push("/");
        }

        if (history.location !== '/login') {
            dispatch(setUsername(''));
            dispatch(setPassword(''))
        }
    }, [loggedin, dispatch, history]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here will be dispatched action with data
        if (dispatch(checkForErrors()) === false) {
            dispatch(loginAction());
        }
    };

    const handleChange = event => {
        dispatch(changeHandle(event));
    }

    const onFocus = () => {
        dispatch(resetErrors());
    }

    return (
        <div className='login'>
            <div className='login-top'>
                <h1>Log In to LBO</h1>
                <p>
                    New to LBO? <a href='!#'> Sign Up</a>.
                </p>
                <p>
                    By logging in, you agree to{" "}
                    <a href='!#'>LBO's Terms of Service</a> and <br />
                    <a href='!#'>Privacy Policy</a>.
                </p>
            </div>
            <div className='column-section'>
                <button className='social-button'>
                    <img
                        className='icon'
                        src={facebook}
                        alt='Log in with facebook'
                    />{" "}
                    Log in with Facebook
                </button>
                <button className='social-button'>
                    <img
                        className='icon'
                        src={google}
                        alt='Log in with google'
                    />{" "}
                    Log in with Google
                </button>
            </div>
            <h2>
                <span>OR</span>
            </h2>
            <form className='column-section' onSubmit={handleSubmit}>
                {errors.Username && <span>{errors.Username}</span>}
                {errors.LoginDetails && <span>{errors.LoginDetails}</span>}
                <input
                    className='input'
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={userName}
                    onChange={handleChange}
                    onFocus={onFocus}
                />
                {errors.Password && <span>{errors.Password}</span>}
                {errors.LoginDetails && <span>{errors.LoginDetails}</span>}
                <input
                    className='input'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={handleChange}
                    onFocus={onFocus}
                />
                <span className='span-text'>
                    <a href='!#'>Forgot password?</a>
                </span>
            </form>
            <div className='column-section'>
                <button className='login-button' onClick={handleSubmit}>
                    {logingin === true ? <Spinner loading={logingin} size={'4rem'}/> : 'Log In'}
                </button>
                <span className='span-text'>
                    New to LBO? <a href='!#'>Sign Up</a>
                </span>
            </div>
        </div>
    );
}
