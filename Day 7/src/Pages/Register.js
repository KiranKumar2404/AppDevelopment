import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();
  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
        setErrorMessage('Please fill in all fields');
        return;
      }
  
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
      navigate('/');
    };
    


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
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button onClick={handleRegister} type='submit'>Register</button>
          </div>
        </div>
      </div>
  );
};

export default Register;
