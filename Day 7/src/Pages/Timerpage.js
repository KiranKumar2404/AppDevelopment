import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Timerpage.css';

function TimerPage() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [turnOnTime, setTurnOnTime] = useState(''); 
  const [turnOffTime, setTurnOffTime] = useState(''); 
  const [isAutomaticMode, setIsAutomaticMode] = useState(false); 
  const navigate = useNavigate();
  
  const handleRegister = () => {
    navigate('/Dashboard');
  };

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  const toggleAutomaticMode = () => {
    setIsAutomaticMode(!isAutomaticMode);
  };

  const handleTurnOnTimeChange = (event) => {
    setTurnOnTime(event.target.value);
  };

  const handleTurnOffTimeChange = (event) => {
    setTurnOffTime(event.target.value);
  };

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

  useEffect(() => {
    const interval = setInterval(checkTimeAndToggleLight, 1000); 
    return () => clearInterval(interval); 
  }, [turnOnTime, turnOffTime, isAutomaticMode]);

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
          />
        </div>
        <div>
          <label>Turn Off Time (HH:MM)</label>
          <input
            type="text"
            value={turnOffTime}
            onChange={handleTurnOffTimeChange}
            placeholder="24 Hrs Time"
          />
        </div>
        <div>
          <label>Automatic Mode </label>
          <label className="switch">
            <input type="checkbox" onChange={toggleAutomaticMode} checked={isAutomaticMode} />
            <span className="slider"></span>
          </label>
        </div>
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
