import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import './Dashboard.css';
import './Responsive.css';
import { useDarkMode } from './context/DarkModeContext';
import videoFile from './videobg.mp4';
import { BsSearch, BsHouse, BsFillCloudSunFill, BsCamera, BsAlarm, BsHeart, BsWallet, BsCloud, BsScan, BsClock } from 'react-icons/bs';
import { BiLogOutCircle } from "react-icons/bi";



const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); 
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { name } = location.state || {}; 
  

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
const handleAbout = () => {
  navigate('/about');
  };
const handleLogout = () => {
  navigate('/');
  };
const handlePrivacy = () => {
  navigate("/privacy");
};
const handleTerms = () => {
  navigate("/terms");
};
const handleContact = () => {
  navigate("/contact");
};
const handleFaq = () => {
  navigate("/faq");
};

const handleScan = () => {
  navigate("/scan");
};

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
      <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
        <h2 className={isDarkMode ? 'dark-text' : ''}>Welcome to Plant Pro, {name ? name.toUpperCase() : 'USER'}!</h2>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleAbout}>About Us</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleContact}>Contact Us</a>
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
            <BsHouse className='icon' onClick={handleDash}/>
            <span className="text nav-text" onClick={handleDash}>Dashboard</span>
          </a>
        </li>

        <li className="nav-link">
          <a href="#">
            <BsFillCloudSunFill className='icon' onClick={handleRegister}/>
            <span className="text nav-text" onClick={handleRegister}>Weather</span>
          </a>
        </li>

        <li className="nav-link">
          <a href="#">
            <BsCamera className='icon' />
            <span className="text nav-text" onClick={handleScan}>Scan</span>
          </a>
        </li>

        <li className="nav-link">
          <a href="#">
            <BsAlarm className='icon' onClick={handleTimer}/>
            <span className="text nav-text" onClick={handleTimer}>Timer</span>
          </a>
        </li>
      </ul>
          </div>

          <div className="bottom-content">
            <li>
              <a href="#">
              <BiLogOutCircle className='icon' onClick={handleLogout}/>
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

      
      <div className="video-container">
      <video controls autoPlay loop>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
        <li className="copyright">
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>&copy; 2023 Copyrights claimed. All rights reserved.</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleFaq}>FAQ'S</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlePrivacy}>Privacy policy</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleTerms}>Terms and conditions</a>
          </li>
          
        </ul>
      </nav>
      </div>
  );
}

export default Dashboard;
