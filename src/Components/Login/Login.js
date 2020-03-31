import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/login.scss";
import facebook from "../../Assets/facebook.png";
import google from "../../Assets/google.png";
import { loginAction } from "../../Redux/Actions/LoginActions";
import { withRouter } from "react-router-dom";

function Login({history}) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const error = useSelector(state => state.LoginReducer.login_error);

  const dispatch = useDispatch();

  const data = {
    userName,
    password
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    if (userName.length < 2 || password.length < 2) return;
    // Here will be dispatched action with data
    dispatch(loginAction(data));
    if (error) {
      setErr("Login Error")
    } else {
      setUsername("");
      setPassword("");
      history.push("/");
    }
  };

  const handleUsername = event => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handlePassword = event => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <div className="login-top">
        <h1>Log In to LBB</h1>
        <p>
          New to LBB? <a href="!#"> Sign Up</a>.{" "}
        </p>
        <p>
          By logging in, you agree to <a href="!#">LBB's Terms of Service</a> and{" "}
          <br/><a href="!#">Privacy Policy</a>.
        </p>
      </div>
      <div className="column-section">
        <button className="social-button">
          <img className="icon" src={facebook} alt="Log in with facebook"/> Log in with Facebook
        </button>
        <button className="social-button">
          <img className="icon" src={google} alt="Log in with google"/> Log in with Google
        </button>
      </div>
      <h2><span>OR</span></h2>
      <div className="column-section">
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={userName}
          onChange={handleUsername}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <span className="span-text">
          <a href="!#">Forgot password?</a>
        </span>
      </div>
      <div className="column-section">
        <button className="login-button" onClick={handleSubmit}>
          Log In
        </button>
        <span className="span-text">
          New to LBB? <a href="!#">Sign Up</a>
        </span>
      </div>
    </div>
  );
}

export default withRouter(Login);
