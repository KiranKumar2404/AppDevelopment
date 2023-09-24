import React, { useState, useEffect } from 'react';
import './UserDetails.css';
import { Link, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const [userHistory, setUserHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserHistory = JSON.parse(localStorage.getItem('userHistory')) || [];
    setUserHistory(storedUserHistory);
  }, []);

  const removeUser = (index) => {
    const updatedUserHistory = [...userHistory];
    updatedUserHistory.splice(index, 1);
    setUserHistory(updatedUserHistory);
    localStorage.setItem('userHistory', JSON.stringify(updatedUserHistory));
  };

  const handleHomepage = () => {
    navigate('/Adash');
  };

  return (
    <div className="user-details-container">
      <button className="home-buttonU" onClick={handleHomepage}>Home</button>
      <h1 className="user-details-title">Signed-In Users</h1>
      <ul className="user-list">
        {userHistory.map((user, index) => (
          <li key={index} className="user-item">
            <div className="user-info">
              <p className="user-name1">
                <strong><b>Name:</b></strong> {user.name}
              </p>
              <p className="user-signin-date">
                <strong>Sign-In Date:</strong> {user.signInDate}
              </p>
              <p className="user-location">
                <strong>Location:</strong> {user.location}
              </p>
            </div>
            <button
              className="remove-user-button"
              onClick={() => removeUser(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
