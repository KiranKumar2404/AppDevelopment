import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  useEffect(() => {
    const apiKey = 'bacb834cc85e54f2bf251d01056604d1';
    const city = 'Coimbatore';
    const country = 'IN'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div className={`weather ${isDarkMode ? 'dark' : ''}`}>
      <h2>Weather</h2>
      {weatherData ? (
        <div className='text1'>
          <p>Location: {weatherData.name ? `${weatherData.name}, ${weatherData.sys.country}` : 'N/A'}</p>
          <p>Temperature: {weatherData.main ? `${weatherData.main.temp}°C` : 'N/A'}</p>
          <p>Weather Condition: {weatherData.weather ? weatherData.weather[0].description : 'N/A'}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
