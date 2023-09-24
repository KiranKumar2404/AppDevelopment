import React, { useState, useEffect, } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { useLight } from './context';
import Clock from './Clock';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart, Pie} from 'recharts';
import {LineChart,Line,} from 'recharts';
import Weather from './weather';
import './Responsive.css';
import { BsSearch, BsHouse, BsFillCloudSunFill, BsCamera, BsAlarm, BsFillSunFill, BsFillCloudMoonFill, BsCloud, BsScan, BsClock } from 'react-icons/bs';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setStaticChartData } from './actions/chartactions';
import {toggleSidebar,toggleDarkMode,addTodo,removeTodo,toggleLight,} from './actions';
import { useDarkMode } from './context/DarkModeContext';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTodoBoxOpen, setIsTodoBoxOpen] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(false);
  const { isLightOn } = useLight();
  const { isDarkMode } = useDarkMode();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleLogout = () => {
    navigate('/');
    };

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

  const handlePrivacy = () => {
    navigate("/privacy");
  };

  const handleTerms = () => {
    navigate("/terms");
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
  
  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  
  useEffect(() => {
    dispatch(setStaticChartData());
  }, [dispatch]);   

  const barChartData = useSelector((state) => state.data);
  const pieChartData1 = useSelector((state) => state.data01);
  const pieChartData2 = useSelector((state) => state.data02);
  const lineChartData = useSelector((state) => state.dataa);
  console.log(barChartData )
  console.log(barChartData )
  console.log(barChartData )
  console.log(barChartData )

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
              <BsFillCloudSunFill className='icon' onClick={handleRegister}/>
              <span className="text nav-text" onClick={handleRegister}>Weather</span>
            </a>
          </li>
  
          <li className="nav-link">
            <a href="#">
              <BsCamera className='icon' />
              <span className="text nav-text">Scan</span>
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
            
            <li className="mode" onClick={toggleDarkMode}>
              <div className="sun-moon">
                <BsFillSunFill className={`icon ${isDarkMode ? 'hidden' : ''}`}></BsFillSunFill>
                <BsFillCloudMoonFill className={`icon ${isDarkMode ? '' : 'hidden'}`}></BsFillCloudMoonFill>
              </div>
              <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
          <div className={`top-navbar1 ${isDarkMode ? 'dark' : ''}`}>
            <div className={`logo-text ${isDarkMode ? 'dark' : ''}`}>PlantPro Dashboard</div>
            <button className="todo-button" onClick={openTodoBox}>+ Todo</button>
            <button className="home-buttonD" onClick={handleHomepage}>Home</button>
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

      </nav>
      <Weather />
      <Clock />

      <div className='ResponsiveContainer' width="100%" height="100%">
      <BarChart
      width={500}
      height={300}
      data={barChartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="max" fill="#8884d8" />
          <Bar dataKey="min" fill="#82ca9d" />
        </BarChart>
      </div>

      <div className='ResponsiveContainer1' width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie data={pieChartData1} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        <Pie data={pieChartData2} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
      </PieChart>
      </div>

      <div className="ResponsiveContainer2" width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={lineChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'No of plants(B)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="otherplant" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="gardenplants" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div className={`lightw ${isLightOn ? 'On' : ''}`}>
      <h2>Light is {isLightOn ? 'On' : 'Off'}</h2>
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

const mapStateToProps = (state) => ({
  isSidebarOpen: state.isSidebarOpen,
  isDarkMode: state.isDarkMode,
  isLightOn: state.isLightOn,
  todos: state.todos,
});

const mapDispatchToProps = {
  toggleSidebar,
  toggleDarkMode,
  addTodo,
  removeTodo,
  toggleLight,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);