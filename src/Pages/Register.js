import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleRegister = () => {
    if (username.trim() === '') {
      setUsernameError('Username is required');
    } else {
      setUsernameError('');
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    }

    if (username.trim() !== '' && password.trim() !== '' && password === confirmPassword) {
      console.log('Registration successful');
    }
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
      <div className="container">
        <h1 className='font1'><b>Smart Home Garden System</b></h1>
        <div className="container1">
          <img
            src="Screenshot__163_-removebg-preview.png"
            alt="Title"
            style={{ width: '200px', height: 'auto' }}
          />
          <div className="form">
            <h1>Register Here</h1>
            <input
              type="text"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleRegister}><Link to="/">Register</Link></button>
          </div>
          {usernameError && (
            <div className="error-box" style={{ left: '20%', top: '20%' }}>
              {usernameError}
            </div>
          )}
          {passwordError && (
            <div className="error-box" style={{ left: '20%', top: '50%' }}>
              {passwordError}
            </div>
          )}
        </div>
      </div>
  );
};

export default Register;
