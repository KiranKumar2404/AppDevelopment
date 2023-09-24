import React, { useState, useEffect,} from 'react';
import './Dashboard.css';
import { useNavigate, } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart, Pie} from 'recharts';
import {LineChart,Line,} from 'recharts';
import './Responsive.css';
import { BsSearch, BsFillCloudSunFill, BsCamera, BsAlarm, BsFillSunFill, BsFillCloudMoonFill, BsCloud, BsScan, BsClock } from 'react-icons/bs';
import { BiLogOutCircle, BiUser, BiSolidUserDetail } from "react-icons/bi";
import { connect, useDispatch, useSelector } from 'react-redux';
import { setStaticChartData } from './actions/chartactions';
import {toggleSidebar,toggleDarkMode,addTodo,removeTodo,toggleLight,} from './actions';
import { useDarkMode } from './context/DarkModeContext';
import OrderButton from './OrderButton'; 

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTodoBoxOpen, setIsTodoBoxOpen] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [adminReply, setAdminReply] = useState('');
  const [message, setUserMessage] = useState('');
  const [name, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [userHistory, setUserHistory] = useState([]);
  const totalUsers = userHistory.length;
  const activeUsers = totalUsers - todos.length;
  const removedUsers = totalUsers - activeUsers;

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const sendAdminReply = () => {
    localStorage.setItem('adminReply', adminReply);
    setAdminReply(''); 
  };
  const handleOrder = () => {
    localStorage.setItem('adminReply', adminReply);
    setAdminReply(''); 
  };
  
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

  const handleuserd = () => {
    navigate("/userdetails");
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
    const storedUserMessage = localStorage.getItem('userMessage');
    const storedUserName = localStorage.getItem('userName');
    const storedUserEmail = localStorage.getItem('userEmail');
  
    if (storedUserMessage) {
      setUserMessage(storedUserMessage);
    }
    if (storedUserName) {
      setUserName(storedUserName);
    }
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  
    const storedAdminReply = localStorage.getItem('adminReply');
    if (storedAdminReply) {
      setAdminReply(storedAdminReply);
    }
  
    const storedUserHistory = JSON.parse(localStorage.getItem('userHistory'));
  
    if (storedUserHistory) {
      setUserHistory(storedUserHistory);
    }
  }, []);
  
  
  const removeUser = (email) => {
    setUserHistory((prevHistory) => prevHistory.filter((user) => user.email !== email));
  
    const updatedUserHistory = userHistory.filter((user) => user.email !== email);
    localStorage.setItem('userHistory', JSON.stringify(updatedUserHistory));
  };
  
  const lineChartData = useSelector((state) => state.dataa1);
  console.log(lineChartData )

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
    <div className="user-count-container">
    <div className="count-box">
      <h2>Total Users</h2>
      <p>{totalUsers}</p>
    </div>
    <div className="count-box">
      <h2>Active Users</h2>
      <p>{activeUsers}</p>
    </div>
    <div className="count-box">
      <h2>Removed Users</h2>
      <p>{removedUsers}</p>
    </div>
  </div>
    <div className="user-list-container">
    <h1>Users</h1>
    {userHistory.length > 0 ? (
      <ul>
        {userHistory.map((user, index) => (
          <li key={index}>
            <div>
              <div className='namee'>Name: {user.name}</div>
              <div className='emaill'>Email: {user.email}</div>
            </div>
            <button className="buttonA" onClick={() => removeUser(user.email)}>Remove</button>
          </li>
        ))}
      </ul>
    ) : (
      <p>No users have signed in yet.</p>
    )}
  </div>
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
              <BiUser className='icon' onClick={handleRegister}/>
              <span className="text nav-text" onClick={handleRegister}>Users</span>
            </a>
          </li>
          
          <li className="nav-link">
            <a href="#">
              <BiSolidUserDetail className='icon' onClick={handleuserd}/>
              <span className="text nav-text" onClick={handleuserd}>User Login Details</span>
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
            <div className={`logo-text ${isDarkMode ? 'dark' : ''}`}>Admin Dashboard</div>
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

       
      </nav>


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
      <div className="chat-container">
      <h3>User Messages</h3><br></br>
      <div className="chat-box">
        <div className="user-info">
          <div className="user-name">{name}</div>
          <div className="user-email">{email}</div>
        </div>
        <div className="user-message">{message}</div>
        <div className="admin-message">{adminReply}</div>
      </div>
      <textarea
        className="chat-textarea"
        value={adminReply}
        onChange={(e) => setAdminReply(e.target.value)}
        placeholder="Type your reply..."
      />
      <button className="send-button" onClick={sendAdminReply}>
      <OrderButton onOrderClick={handleOrder} />
      </button>
    </div>

    <div className="ResponsiveContainer3" width="50%" height="50%">
        <LineChart
          width={460}
          height={250}
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
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="UsersCount" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Appcount" stroke="#82ca9d" />
        </LineChart>
      </div>
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