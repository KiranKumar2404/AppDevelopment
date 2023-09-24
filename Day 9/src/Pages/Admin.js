import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [enteredData, setEnteredData] = useState([]);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setUsernameError('');
    setPasswordError('');

    if (username === 'kiran24@gmail.com' && password === '123456') {
      setIsLoggedIn(true);
      navigate('/adash');
    } else {
      if (!username) {
        setUsernameError('Please fill in the email field');
      }

      if (!password) {
        setPasswordError('Please fill in the password field');
      }
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
            <h1>Login To Explore</h1>
            <input
              type="text"
              placeholder="Enter your Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
