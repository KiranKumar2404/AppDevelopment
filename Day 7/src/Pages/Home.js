import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Weather from './weather';
import { connect } from 'react-redux';
import {
  toggleSidebar,
  toggleDarkMode,
  addTodo,
  removeTodo,
  toggleLight,
} from './actions';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isWeatherImageHovered, setIsWeatherImageHovered] = useState(false);
  const [isScanImageHovered, setIsScanImageHovered] = useState(false);
  const [isTimerImageHovered, setIsTimerImageHovered] = useState(false);
  const [isLogoutImageHovered, setIsLogoutImageHovered] = useState(false);
  const [isDashboardImageHovered, setIsDashboardImageHovered] = useState(false);
  const [isTodoBoxOpen, setIsTodoBoxOpen] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [light1On, setLight1On] = useState(false); 
  const [light2On, setLight2On] = useState(false); 
  const [motorOn, setMotorOn] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleRegister = () => {
    navigate("/Check");
  };

  const handleHomepage = () => {
    navigate("/Dashboard");
  };
  
  const handleTimer = () => {
    navigate("/Timerpage");
  };
  const openTodoBox = () => {
    setIsTodoBoxOpen(true);
  };

  const closeTodoBox = () => {
    setIsTodoBoxOpen(false);
  };

  const handleTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
      setShowTodos(true);
      closeTodoBox();
    }
  };
  
  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  const toggleLight1 = () => {
    setLight1On(!light1On);
  };

  const toggleLight2 = () => {
    setLight2On(!light2On);
  };

  const toggleMotor = () => {
    setMotorOn(!motorOn);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.querySelector("body");
    const modeText = document.querySelector(".mode-text");
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      modeText.innerText = "Dark mode";
    } else {
      body.classList.add("dark");
      modeText.innerText = "Light mode";
    }
  };

  const handleDashboardImageHover = () => {
    if (!isSidebarOpen) {
      setIsDashboardImageHovered(!isDashboardImageHovered);
    }
  };

  const handleWeatherImageHover = () => {
    if (!isSidebarOpen) {
      setIsWeatherImageHovered(!isWeatherImageHovered);
    }
  };

  const handleScanImageHover = () => {
    if (!isSidebarOpen) {
      setIsScanImageHovered(!isScanImageHovered);
    }
  };

  const handleTimerImageHover = () => {
    if (!isSidebarOpen) {
      setIsTimerImageHovered(!isTimerImageHovered);
    }
  };

  const handleLogoutImageHover = () => {
    if (!isSidebarOpen) {
      setIsLogoutImageHovered(!isLogoutImageHovered);
    }
  };


  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
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
                <img
                  src="weather.png"
                  alt="Weather"
                  className={`weath ${isSidebarOpen ? 'hidden' : ''} ${isWeatherImageHovered ? 'highlighted' : ''}`}
                  onMouseEnter={handleWeatherImageHover}
                  onMouseLeave={handleWeatherImageHover}
                />
                <img
                  src="scan.png"
                  alt="Scan"
                  className={`scann ${isSidebarOpen ? 'hidden' : ''} ${isScanImageHovered ? 'highlighted' : ''}`}
                  onMouseEnter={handleScanImageHover}
                  onMouseLeave={handleScanImageHover}
                />
                <img
                  src="time.png"
                  alt="Timer"
                  className={`timee ${isSidebarOpen ? 'hidden' : ''} ${isTimerImageHovered ? 'highlighted' : ''}`}
                  onMouseEnter={handleTimerImageHover}
                  onMouseLeave={handleTimerImageHover}
                />
              </>
            )}
          </div>
          <i className={`bx bx-chevron-right toggle ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></i>
        </header>
      
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-cloud icon'></i>
                  <span className="text nav-text" onClick={handleRegister}>Weather</span>
                  <img src="weather.png" alt="Weather " className={`weat ${isSidebarOpen ? 'hidden' : ''}`} />
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-scan icon'></i>
                  <span className="text nav-text">Scan</span>
                  <img src="scan.png" alt="Scan" className={`scan ${isSidebarOpen ? 'hidden' : ''}`} />
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-time icon'></i>
                  <span className="text nav-text" onClick={handleTimer}>Timer</span>
                  <img src="time.png" alt="Timer " className={`time ${isSidebarOpen ? 'hidden' : ''}`} />
                </a>
              </li>
            </ul>
          </div>
          <div className={`top-navbar1 ${isDarkMode ? 'dark' : ''}`}>
            <div className={`logo-text ${isDarkMode ? 'dark' : ''}`}>PlantPro Dashboard</div>
            <button className="todo-button" onClick={openTodoBox}>+ Todo</button>
            <button className="home-button" onClick={handleHomepage}>Home</button>
          </div>
        </div>

        {isTodoBoxOpen && (
          <div className={`todo-box ${isDarkMode ? 'dark' : ''}`}>
            <h2>Todo</h2>
            <input
              type="text"
              placeholder="Enter your next todo"
              value={newTodo}
              onChange={handleTodoChange}
            />
            <button onClick={addTodo}>Add</button>
          </div>
        )}

        <div className={`todos-container ${showTodos ? 'open' : 'close'}`}>
          <h2>Todos</h2>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => removeTodo(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bottom-content">
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
      </nav>
      <Weather />
      <div className="light-container">
      <span className="container1-label">Light 1</span>
      <label className="switch">
        <input type="checkbox" checked={isLightOn} onChange={toggleLight} />
        <span className="slider"></span>
      </label>
    </div>
    
        <div className="light-container">
          <span className="container1-label">Light 2</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="motor-container">
          <span className="container1-label">Motor1</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="humidity-container">
          <img src="humidity.png" alt="Humidity" />
          <span className="container-label">Humidity</span>
          <span className="container-value">65%</span>
        </div>

        <div className="soil-moisture-container">
          <img src="soil moisture.png" alt="Soil Moisture" />
          <span className="container-label">Soil Moisture</span>
          <span className="container-value">40%</span>
        </div>
        <img src="graph.jpg" className="graph" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isSidebarOpen: state.isSidebarOpen,
  isDarkMode: state.isDarkMode,
  todos: state.todos,
  // ... other props
});

const mapDispatchToProps = {
  toggleSidebar,
  toggleDarkMode,
  addTodo,
  removeTodo,
  toggleLight,
  // ... other actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);