import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [enteredData, setEnteredData] = useState([]);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    setUsernameError('');
    setPasswordError('');

    if (!username) {
      setUsernameError('Please fill in this field');
    }

    if (!password) {
      setPasswordError('Please fill in this field');
    }

    if (username && password) {
      setEnteredData([...enteredData, { username, password }]);
      setUsername('');
      setPassword('');
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
        src="Screenshot__163_-removebg-preview.png" alt="Title"
        style={{ width: '200px', height: 'auto' }} />
          <div className="form">
            <h1>Login To Explore</h1>
            <input type="text" placeholder="Enter your Username" value={username}  onChange={(e) => setUsername(e.target.value)} />
            <input type="password"  placeholder="Enter your Password"  value={password}  onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <p>Don't have an Account? <Link to="register"><b>Register</b></Link></p>
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
  );
};

export default Login;
