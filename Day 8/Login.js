import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

const Signin = () => {

  const handleRegister = () => {
    navigate("/admin");
  };

  const [isSignup, setIsSignup] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  });

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
  
    if (!signInData.email || !signInData.password) {
      alert("Please fill in all the fields.");
      return;
    }
  
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const location = `Latitude: ${latitude}, Longitude: ${longitude}`;
  
      const signInDate = new Date().toLocaleString();
      const name = extractName(signInData.email);
      const userData = { name, email: signInData.email, signInDate, location };
      const userHistory = JSON.parse(localStorage.getItem("userHistory")) || [];
      userHistory.push(userData);
      localStorage.setItem("userHistory", JSON.stringify(userHistory));
      navigate('/Dashboard', { state: { name } });
    });
  };
  

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!signUpData.name || !signUpData.email || !signUpData.password) {
      alert("Please fill in all the fields.");
      return;
    }

    navigate('/Dashboard', { state: { name: signUpData.name } });
  };

  const handleInputChange = (e, isSignUpForm) => {
    const name = e.target.name;
    const value = e.target.value;

    if (isSignUpForm) {
      setSignUpData({
        ...signUpData,
        [name]: value
      });
    } else {
      setSignInData({
        ...signInData,
        [name]: value
      });
    }
  };

  const extractName = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      return email.slice(0, atIndex);
    }
    return email;
  };

  return (
    <div className="Login">
    <button className="admin" onClick={handleRegister}>Admin</button>
    <div className={`container ${isSignup ? "right-panel-active" : ""}`}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={signUpData.name}
            onChange={(e) => handleInputChange(e, true)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signUpData.email}
            onChange={(e) => handleInputChange(e, true)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signUpData.password}
            onChange={(e) => handleInputChange(e, true)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          <span>Plant Pro</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signInData.email}
            onChange={(e) => handleInputChange(e, false)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signInData.password}
            onChange={(e) => handleInputChange(e, false)}
          />
          <a href="#">Forgot Your Password</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome!</h1>
            <p>
              already have an account Login Here
            </p>
            <button className="ghost" onClick={toggleForm}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and Explore Plant Pro</p>
            <button className="ghost" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signin;
