import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import "../../Styles/login.scss";
import facebook from "../../Assets/facebook.png";
import google from "../../Assets/google.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const dispatch = useDispatch();

  const handleSubmit = event => {
    if (email.length === 0 || password.length === 0) return;
    console.log("Submited");
    event.preventDefault();
    // Here will be dispatched action with email and password
    // dispatch(someAction);
    setEmail("");
    setPassword("");
  };

  const handleEmail = event => {
    event.preventDefault();
    setEmail(event.target.value);
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
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
