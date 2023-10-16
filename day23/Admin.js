import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';
import axios from 'axios';

  const Login = () => {
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSignup, setIsSignup] = useState(false);
    const [signInData, setSignInData] = useState({
      email: "",
      password: "",
      role: "ADMIN", 
    });
  
    const navigate = useNavigate();
  
    const toggleForm = () => {
      setIsSignup(!isSignup);
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      if (!signInData.email || !signInData.password) {
        alert("Please fill in all the fields.");
        return;
      }
  
      try {
        const response = await axios.post('http://localhost:8080/api/auth/login', signInData);
        const { name, token, id, role } = response.data;
        if (role !== "ADMIN") {
          alert("You do not have permission to sign in.");
          return;
        }
  
        localStorage.setItem('token', token);
        localStorage.setItem('userId', id);
        localStorage.setItem("role",role);
  
        navigate('/HomeAdmin', { state: { name } });
      } catch (error) {
        console.error(error);
        alert("Sign in failed. Please check your credentials.");
      }
    };

    const handleInputChange = (e, isSignUpForm) => {
      const name = e.target.name;
      const value = e.target.value;
      
        setSignInData({
          ...signInData,
          [name]: value
        });
      };

  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      setUsernameError('');
      setPasswordError('');
    }, 2000);

    return () => {
      clearTimeout(errorTimeout);
    };
  }, [usernameError, passwordError]);

  return (
    <div className='loginbody'>
      <div className="containeraa">
        <h1 className='font1'><b>Smart Home Garden System</b></h1>
        <div className="containeraa1">
          <img
            src="Screenshot__163_-removebg-preview.png"
            alt="Title"
            style={{ width: '200px', height: 'auto' }} 
          />
          <div className="form">
            <h1>Admin Login</h1>
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
            <button onClick={handleLogin}>Login</button>
          </div>
          {usernameError && (
            <div className="error-box" style={{ left: '-90px', top: '280px' }}>
              {usernameError}
            </div>
          )}
          {passwordError && (
            <div className="error-box" style={{ left: '-90px', top: '340px' }}>
              {passwordError}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
