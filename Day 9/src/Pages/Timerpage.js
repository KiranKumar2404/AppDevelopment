import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Timerpage.css';
import { useLight } from './context';

function TimerPage() {
  const [turnOnTime, setTurnOnTime] = useState('');
  const [turnOffTime, setTurnOffTime] = useState('');
  const [isAutomaticMode, setIsAutomaticMode] = useState(false);
  const { isLightOn, setIsLightOn } = useLight();
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/Dashboard');
  };

  const toggleLight = () => {
    const newLightState = !isLightOn;
    setIsLightOn(newLightState);
    localStorage.setItem('isLightOn', newLightState.toString());
  };

  const toggleAutomaticMode = () => {
    const newAutomaticModeState = !isAutomaticMode;
    setIsAutomaticMode(newAutomaticModeState);
    localStorage.setItem('isAutomaticMode', newAutomaticModeState.toString());
  };

  const handleTurnOnTimeChange = (event) => {
    setTurnOnTime(event.target.value);
  };

  const handleTurnOffTimeChange = (event) => {
    setTurnOffTime(event.target.value);
  };

  useEffect(() => {
    const savedLightState = localStorage.getItem('isLightOn');
    if (savedLightState !== null) {
      setIsLightOn(savedLightState === 'true');
    }

    const savedAutomaticModeState = localStorage.getItem('isAutomaticMode');
    if (savedAutomaticModeState !== null) {
      setIsAutomaticMode(savedAutomaticModeState === 'true');
    }

    const savedTurnOnTime = localStorage.getItem('turnOnTime');
    if (savedTurnOnTime !== null) {
      setTurnOnTime(savedTurnOnTime);
    }

    const savedTurnOffTime = localStorage.getItem('turnOffTime');
    if (savedTurnOffTime !== null) {
      setTurnOffTime(savedTurnOffTime);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(checkTimeAndToggleLight, 1000);
    return () => clearInterval(interval);
  }, [turnOnTime, turnOffTime, isAutomaticMode]);

  const checkTimeAndToggleLight = () => {
    if (isAutomaticMode) {
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const currentTimeStr = `${hours}:${minutes}`;

      if (currentTimeStr === turnOnTime) {
        setIsLightOn(true);
      } else if (currentTimeStr === turnOffTime) {
        setIsLightOn(false);
      }
    }
  };

  return (
    <div className="timer-page">
      <div className='timer'>
        <h2>Light Timer</h2>
        <div>
          <label>Turn On Time (HH:MM)</label>
          <input
            type="text"
            value={turnOnTime}
            onChange={handleTurnOnTimeChange}
            placeholder="24 Hrs Time"
            onBlur={() => localStorage.setItem('turnOnTime', turnOnTime)}
          />
        </div>
        <div>
          <label>Turn Off Time (HH:MM)</label>
          <input
            type="text"
            value={turnOffTime}
            onChange={handleTurnOffTimeChange}
            placeholder="24 Hrs Time"
            onBlur={() => localStorage.setItem('turnOffTime', turnOffTime)}
          />
        </div>
        <div>
          <label>Automatic Mode </label>
          <label className="switch">
            <input type="checkbox" onChange={toggleAutomaticMode} checked={isAutomaticMode} />
            <span className="slider"></span>
          </label>
        </div>
        <div className={`white-square ${isLightOn ? 'glow' : ''}`}></div>

        <div>
          <button onClick={toggleLight}>
            {isLightOn ? 'Light is On' : 'Light is Off'}
          </button>
        </div>
        <div>
          <button onClick={handleRegister}> Back </button>
        </div>
      </div>
    </div>
  );
}

export default TimerPage;
