import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/register.scss";
import facebook from "../../Assets/facebook.png";
import google from "../../Assets/google.png";
import {
    changeHandle,
    registerAction,
    checkForRegisterErrors,
    clearErrors,
    clearInput,
} from "../../Redux/Actions/RegisterActions";
import { useHistory } from "react-router-dom";
import Spinner from "../Reusable/Spinner/Spinner";

export default function Register() {
    const {
        firstName,
        lastName,
        email,
        password,
        userName,
        errors,
        registered,
        registering,
    } = useSelector((state) => state.RegisterReducer);

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (registered) {
            dispatch(clearInput());
            history.push("/home");
        }

        if (history.location !== "/login") {
            dispatch(clearInput());
        }
    }, [registered, dispatch, history]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (dispatch(checkForRegisterErrors()) === false) {
            dispatch(registerAction());
        }
    };

    const handleChange = (event) => {
        dispatch(changeHandle(event));
    };

    const onFocus = () => {
        dispatch(clearErrors());
    };

    return (
        <div className="register">
            <div className="register-top">
                <h1>Sign up for LBO</h1>
                <p>Connect your business with comminity.</p>
                <p>
                    By continuing, you agree to{" "}
                    <a href="!#">LBO's Terms of Service</a> and <br />
                    <a href="!#">Privacy Policy</a>.
                </p>
            </div>
            <div className="column-section">
                <button className="social-button">
                    <img
                        className="icon"
                        src={facebook}
                        alt="Register with facebook"
                    />{" "}
                    Sign up with Facebook
                </button>
                <button className="social-button">
                    <img
                        className="icon"
                        src={google}
                        alt="Register with google"
                    />{" "}
                    Sign up with Google
                </button>
            </div>
            <h2>
                <span>OR</span>
            </h2>
            <form className="column-section">
                {errors.firstName && (
                    <span className="error">{errors.firstName}</span>
                )}
                <input
                    className="input"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleChange}
                    onFocus={onFocus}
                />
                {errors.lastName && (
                    <span className="error">{errors.lastName}</span>
                )}
                <input
                    className="input"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleChange}
                    onFocus={onFocus}
                />
                {errors.userName && (
                    <span className="error">{errors.userName}</span>
                )}
                <input
                    className="input"
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={handleChange}
                    onFocus={onFocus}
                />
                {errors.email && <span className="error">{errors.email}</span>}
                <input
                    className="input"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    onFocus={onFocus}
                />
                {errors.password && (
                    <span className="error">{errors.password}</span>
                )}
                <input
                    className="input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                    onFocus={onFocus}
                />
                {errors.accountType && (
                    <span className="error">{errors.accountType}</span>
                )}
                <select
                    name="accountType"
                    onChange={handleChange}
                    onFocus={onFocus}
                >
                    <option value="none">Choose Account Type</option>
                    <option value="customer">Customer</option>
                    <option value="business">Business</option>
                </select>
            </form>
            <div className="column-section">
                <button className="login-button" onClick={handleSubmit}>
                    {registering === true ? (
                        <Spinner loading={registering} size={"4rem"} />
                    ) : (
                        "Signup"
                    )}
                </button>
                <span className="span-text">
                    Already on LBO? <a href="!#">Log In</a>
                </span>
            </div>
        </div>
    );
}
