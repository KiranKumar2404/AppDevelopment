import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Check.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(true); 
  const navigate = useNavigate();

  const apiKey = 'bacb834cc85e54f2bf251d01056604d1'; 
  let api;

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const inputChangeHandler = (e) => {
    setCity(e.target.value);
  };

  const fetchWeatherData = () => {
    setError('');
    setWeatherData(null);

    if (city.trim() === '') {
      setError('Please enter a city name.');
      return;
    }

    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetchData();
  };

  const getLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      alert("Your browser does not support geolocation API");
    }
  };

  const onSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    fetchData();
  };

  const onError = (error) => {
    setError(error.message);
    setError('Something went wrong, API Error');
  };

  const fetchData = () => {
    setError('Getting weather details...');

    fetch(api)
      .then((res) => res.json())
      .then((result) => weatherDetails(result))
      .catch(() => {
        setError('Something went wrong, API Error');
      });
  };

  const weatherDetails = (info) => {
    if (info.cod === 404) {
      setError(`${city} isn't a valid city name`);
    } else {
      const city = info.name;
      const country = info.sys.country;
      const { description, id } = info.weather[0];
      const { temp, feels_like, humidity } = info.main;

      let wIconUrl = '';

      if (id === 800) {
        wIconUrl = 'https://drive.google.com/uc?export=view&id=13TlzPFrICsSEB3llo6PWuywWpoL6ywxb';
      } else if (id >= 200 && id <= 232) {
        wIconUrl = 'https://drive.google.com/uc?export=view&id=13eqt-OgtVphxXYpIHd9Q7QOBNocK0Onq';
      } else if (id >= 600 && id <= 622) {
        wIconUrl = 'https://drive.google.com/uc?export=view&id=13Z9FbAC1FJ-ptr55vUWUufLBCrhgjbF1';
      } else if (id >= 701 && id <= 781) {
        wIconUrl = 'https://drive.google.com/uc?export=view&id=13YVPMlryJ3168jk-VR_zfTvVBL6Xeaqs';
      } else if (id >= 801 && id <= 804) {
        wIconUrl = 'https://drive.google.com/uc?export=view&id=13TVP9iuZz8A9cf3OtJCgTmeS9AtJ-B3R';
      } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
        wIconUrl = 'https://drive.google.com/uc?export=view&id=13YoLrgIqfw6UHTu0x4yqTRLIyCbT1O6e';
      }

      setWeatherData({
        city,
        country,
        description,
        temp: Math.floor(temp),
        feels_like: Math.floor(feels_like),
        humidity,
        wIconUrl,
      });

      setError('');
      setCity('');
    }
  };
  
  const handleHomepage = () => {
    navigate("/Dashboard");
  };

  const arrowBackClickHandler = () => {
    setWeatherData(null);
  };

  return (
      <div className={`wrapper ${weatherData ? 'active' : ''}`}>
      <button className="home-button" onClick={handleHomepage}>Home</button>
        <header>
          {weatherData ? (
            <i className='bx bx-left-arrow-alt' onClick={arrowBackClickHandler}></i>
          ) : null}
          PLANT PRO WEATHER CHECK
        </header>
        <section className="input-part">
          <p className={`info-txt ${error ? 'error' : ''}`}>{error}</p>
          <div className="content">
            <input
              type="text"
              spellCheck="false"
              placeholder="Enter city name"
              required
              value={city}
              onChange={inputChangeHandler}
            />
            <div className="separator"></div>
            <button onClick={fetchWeatherData}>Get Weather</button>
            {!weatherData && (
              <div className='loc'> <button onClick={getLocationWeather}>Get Device Location</button></div>
            )}
          </div>
        </section>
        {weatherData && (
          <section className="weather-part">
            <img src={weatherData.wIconUrl} alt="Weather Icon" />
            <div className="temp">
              <span className="numb">{weatherData.temp}</span>
              <span className="deg">°</span>C
            </div>
            <div className="weather">{weatherData.description}</div>
            <div className="location">
              <i className='bx bx-map'></i>
              <span>{`${weatherData.city}, ${weatherData.country}`}</span>
            </div>
            <div className="bottom-details">
              <div className="column feels">
                <i className='bx bxs-thermometer'></i>
                <div className="details">
                  <div className="temp">
                    <span className="numb-2">{weatherData.feels_like}</span>
                    <span className="deg">°</span>C
                  </div>
                  <p>Feels like</p>
                </div>
              </div>
              <div className="column humidity">
                <i className='bx bxs-droplet-half'></i>
                <div className="details">
                  <span>{`${weatherData.humidity}%`}</span>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
  );
};

export default WeatherApp;
