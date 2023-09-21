import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Check from './Pages/Check';
import Timerpage from './Pages/Timerpage';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import rootReducer from './Pages/reducers';
import weather from './Pages/weather';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Check' element={<Check />} />
        <Route path='/Timerpage' element={<Timerpage />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </Router>
  </Provider>
  );
};

export default App;