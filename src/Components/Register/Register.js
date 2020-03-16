import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import "../../Styles/register.scss";
import facebook from "../../Assets/facebook.png";
import google from "../../Assets/google.png";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [username, setUsername] = useState("");

  //const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    if (
      email.length <= 3 ||
      password.length <= 3 ||
      firstName.length <= 3 ||
      lastName.length <= 3 ||
      zipCode.length === 0
    )
      return;
    // Here will be dispatched action with email and password
    // dispatch(someAction);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setZipCode("");
  };

  const handleFirstName = event => {
    event.preventDefault();
    setFirstName(event.target.value);
  };

  const handleLastName = event => {
    event.preventDefault();
    setLastName(event.target.value);
  };

  const handleEmail = event => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleZipCode = event => {
    event.preventDefault();
    setZipCode(event.target.value);
  };

  const handleUsername = event => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  return (
    <div className="register">
      <div className="register-top">
        <h1>Sign up for LBB</h1>
        <p>Connect your business with comminity.</p>
        <p>
          By continuing, you agree to <a href="!#">LBB's Terms of Service</a>{" "}
          and <br />
          <a href="!#">Privacy Policy</a>.
        </p>
      </div>
      <div className="column-section">
        <button className="social-button">
          <img className="icon" src={facebook} alt="Register with facebook" />{" "}
          Sign up with Facebook
        </button>
        <button className="social-button">
          <img className="icon" src={google} alt="Register with google" /> Sign
          up with Google
        </button>
      </div>
      <h2>
        <span>OR</span>
      </h2>
      <div className="column-section">
        <div className="name-section">
          <input
            className="name-input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstName}
          />
          <input
            className="name-input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastName}
          />
      </div>
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
        />
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
        <br />
        <input
          className="input"
          type="number"
          placeholder="Business ZIP code"
          value={zipCode}
          onChange={handleZipCode}
        />
      </div>
      <div className="column-section">
        <button className="login-button" onClick={handleSubmit}>
          Sign Up
        </button>
        <span className="span-text">
          Already on LBB? <a href="!#">Log In</a>
        </span>
      </div>
    </div>
  );
}
