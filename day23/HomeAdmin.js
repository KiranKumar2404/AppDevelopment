import React, { useState, useEffect, } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import './Responsive.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import {toggleSidebar,toggleDarkMode,addTodo,removeTodo,toggleLight,} from './actions';
import { useDarkMode } from './context/DarkModeContext';
import videoFile from './videobg.mp4';

function HomeAdmin() {
  const { isDarkMode } = useDarkMode();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleLogout = () => {
    navigate('/');
    };

  const handleRegister = () => {
    navigate("/Check");
  };

  const handleHomepage = () => {
    navigate("/Adash");
  };
  
  const handleTimer = () => {
    navigate("/Timerpage");
  };

  const handlePrivacy = () => {
    navigate("/Aprivacy");
  };

  const handleTerms = () => {
    navigate("/Aterms");
  };
  
  const handleScan = () => {
    navigate("/scan");
  };

  const handlegarden = () => {
    navigate("/garden");
  };
  const handlemachine = () => {
    navigate("/machine");
  };
  const handleTips = () => {
    navigate("/tipsUser");
  };
  const handlePlant = () => {
    navigate("/plantDetails");
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
    <div className="video-container">
    <video controls autoPlay loop>
      <source src={videoFile} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
          <div className={`top-navbar1 ${isDarkMode ? 'dark' : ''}`}>
            <div className={`logo-text ${isDarkMode ? 'dark' : ''}`}>PlantPro Admin HomePage</div>
            <button className="home-buttonD" onClick={handleHomepage}>Dashboard</button>
          </div>

      <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
        <li className="copyright">
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>&copy; 2023 Copyrights claimed. All rights reserved.</a>
          </li>
          
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : '' } onClick={handlePrivacy}>Privacy policy</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleTerms}>Terms and conditions</a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default HomeAdmin;