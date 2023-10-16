import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from './context/DarkModeContext';

function LoginForm() {
  const [activeForm, setActiveForm] = useState("login");
  const { isDarkMode, } = useDarkMode();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
    role: "CUSTOMER",
  });
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/admin");
  };

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "CUSTOMER",
  });

  const handleFormChange = (formType) => {
    setActiveForm(formType);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!signInData.email || !signInData.password) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const emailParts = signInData.email.split("@");
      const username = emailParts[0];
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        signInData
      );
      const { name, token, id, role } = response.data;
      
      if (role !== "CUSTOMER") {
        alert("You do not have permission to sign in.");
        return;
      }
      
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        
        const locationResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bacb834cc85e54f2bf251d01056604d1`
          );
          
          const { name: locationName } = locationResponse.data;
          
          const userHistory =
          JSON.parse(localStorage.getItem("userHistory")) || [];
          userHistory.push({
            name: username,
            signInDate: new Date().toLocaleString(),
            location: locationName,
          });
          localStorage.setItem("userHistory", JSON.stringify(userHistory));
          localStorage.setItem("token", token);
          localStorage.setItem("userId", id);
          localStorage.setItem("role", role);
      });

      navigate("/Dashboard", { state: { name: username } });
    } catch (error) {
      console.error(error);
      alert("Sign in failed. Please check your credentials.");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!signUpData.name || !signUpData.email || !signUpData.password) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const signUpRequestData = {
        name: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
        role: "CUSTOMER",
      };

      await axios.post("http://localhost:8080/api/auth/register", signUpRequestData);
      alert("Signup Successful. You can now sign in.");
      setActiveForm("login");
    } catch (error) {
      console.error(error);
      alert("Sign up failed. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (activeForm === "login") {
      setSignInData({
        ...signInData,
        [name]: value,
      });
    } else {
      setSignUpData({
        ...signUpData,
        [name]: value,
      });
    }
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
    <div className="login-container">
    <img  src="Screenshot__163_-removebg-preview.png" className="logo" />
      <button className="admin" onClick={handleRegister}>
        Admin
      </button>
      <div className="title-text">
        <div className={`title ${activeForm === "login" ? "login" : "signup"}`}>
          {activeForm === "login" ? "Login Form" : "Signup Form"}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={activeForm === "login"}
            onChange={() => handleFormChange("login")}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={activeForm === "signup"}
            onChange={() => handleFormChange("signup")}
          />
          <label
            htmlFor="login"
            className={`slide ${activeForm === "login" ? "login" : ""}`}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className={`slide ${activeForm === "signup" ? "signup" : ""}`}
          >
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          {activeForm === "login" ? (
            <form onSubmit={handleSignIn} className="login">
              <div className="field">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email Address"
                  value={signInData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  value={signInData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member?{" "}
                <a href="#" onClick={() => handleFormChange("signup")}>
                  Signup now
                </a>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignUp} className="signup">
              <div className="field">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={signUpData.name}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="field">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={signUpData.email}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  value={signUpData.password}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;
