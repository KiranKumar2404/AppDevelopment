import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="clock">
      <span className="clock-icon">🕒</span>
      <span className="clock-time">{formattedTime}</span>
    </div>
  );
}

export default Clock;
