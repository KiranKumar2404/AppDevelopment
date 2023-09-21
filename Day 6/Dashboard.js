import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleRegister = () => {
    navigate('/Check');
  };

const handleTimer = () => {
  navigate('/Timerpage');
  };

const handleDash = () => {
  navigate('/Home');
  };

const handleLogout = () => {
  navigate('/');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
    const body = document.querySelector('body');
    body.classList.toggle('dark');
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
      <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>About Us</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>Contact Us</a>
          </li>
        </ul>
      </nav>
      <nav className={`sidebar ${isSidebarOpen ? '' : 'close'} ${isDarkMode ? 'dark' : ''}`}>
        <header>
          <div className="image-text">
            {isSidebarOpen ? (
              <div className="text logo-text">
                <span className="name">PlantPro</span>
                <span className="profession">GardenSystem</span>
              </div>
            ) : (
              <>
                <img src="weather.png" alt="Weather" className={`weath ${isSidebarOpen ? 'hidden' : ''}`} />
                <img src="scan.png" alt="scan" className={`scann ${isSidebarOpen ? 'hidden' : ''}`} />
                <img src="time.png" alt="timer" className={`timee ${isSidebarOpen ? 'hidden' : ''}`} />
                <img src="Dashboard.png" alt="dashboard" className={`dash ${isSidebarOpen ? 'hidden' : ''}`} />
              </>
            )}
          </div>

          <i className={`bx ${isSidebarOpen ? 'bx-chevron-right' : 'bx-chevron-left'} toggle`} onClick={toggleSidebar}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
            <li className="nav-link">
                <a href="#">
                  <i className='bx bx-cloud icon'></i>
                  <span className="text nav-text" onClick={handleDash}>Dashboard</span>
                  <img src="Dashboard.png" alt="dashboard" className={`dashb ${isSidebarOpen ? 'hidden' : ''}`} />
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-cloud icon'></i>
                  <span className="text nav-text" onClick={handleRegister}>Weather</span>
                  <img src="weather.png" alt="Weather" className={`weat ${isSidebarOpen ? 'hidden' : ''}`} />
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-scan icon'></i>
                  <span className="text nav-text">Scan</span>
                  <img src="scan.png" alt="scan" className={`scan ${isSidebarOpen ? 'hidden' : ''}`} />
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-time icon'></i>
                  <span className="text nav-text" onClick={handleTimer}>Timer</span>
                  <img src="time.png" alt="timer" className={`time ${isSidebarOpen ? 'hidden' : ''}`} />
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li>
              <a href="#">
                <i className='bx bx-log-out icon'></i>
                <span className="text nav-text" onClick={handleLogout}>Logout</span>
              </a>
            </li>

            <li className="mode" onClick={toggleDarkMode}>
              <div className="sun-moon">
                <i className={`bx bx-moon icon moon ${isDarkMode ? 'hidden' : ''}`}></i>
                <i className={`bx bx-sun icon sun ${isDarkMode ? '' : 'hidden'}`}></i>
              </div>
              <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>

      <div className="page-content">
        <h1>
          Welcome to <span className="highlight"> Plant Pro </span> GardenSystem
        </h1>
      </div>
      </div>
  );
}

export default Dashboard;
