import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Dashboard.css';
import './Responsive.css';
import { useDarkMode } from './context/DarkModeContext';

function AboutUS() {
    const { isDarkMode } = useDarkMode();
    const navigate = useNavigate();

    const handleTerms = () => {
      navigate("/terms");
    };
  
    const handlePrivacy = () => {
      navigate("/privacy");
    };

    const handleHome = () => {
      navigate("/Dashboard");
    };

    const [imageIndex, setImageIndex] = useState(0);
  const images = ['image 1.png', 'image 21.jpg', 'image 31.jpg', 'image 7.png', 'image 10.png', 'image 41.jpg', 'image 9.png', 'image 11.png']; 

  useEffect(() => {
    const cycleImages = () => {
      const nextIndex = (imageIndex + 1) % images.length;
      setImageIndex(nextIndex);
    };
  

    const intervalId = setInterval(cycleImages, 2500);

    return () => clearInterval(intervalId);
  }, [imageIndex, images]);

    return (
        <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
          <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
            <ul>
            <button className="home-buttond" onClick={handleHome}>Home</button>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : '' }>About Us</a>
              </li>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''}>Contact Us</a>
              </li>
            </ul>
          </nav>
          <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
        <li className="copyright">
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>&copy; 2023 Copyright claimed. All rights reserved.</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlePrivacy}>Privacy policy</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleTerms}>Terms and conditions</a>
          </li>
          
        </ul>
      </nav>
      <div className="image-container">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            className={`fade ${index === imageIndex ? 'visible' : ''}`}
            src={imageUrl}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
       <div className='aboutuscont'><div className='aboutheading'>AboutUS</div> <br/><br/>
<p>
At PLANT PRO, we are passionate about merging technology with nature to create a greener, smarter, and more sustainable world. We believe that gardening should be accessible and enjoyable for everyone, regardless of their level of expertise. That's why we've developed the PlantPro Smart Garden System, a revolutionary solution that empowers individuals to cultivate thriving gardens with ease.
Our mission at PlantPro is to redefine the way people interact with their gardens. We aim to provide a seamless and intelligent gardening experience by harnessing the power of cutting-edge technology. We are committed to promoting environmental consciousness and fostering a sense of connection to the natural world through our innovative services and products.We provide real-time weather updates to help you make informed decisions about your garden. 
Whether it's rain, sunshine, or frost, PlantPro keeps you in the know.Take control of your garden's lighting and irrigation systems with our customizable timers. 
Set the perfect schedule to ensure your plants receive the right amount of care.</p><p>Our user-friendly app interface allows you to monitor and manage your garden effortlessly. 
Track plant growth, view statistics, and receive notifications all in one place.Gain insights into the global community of PlantPro users. Compare your gardening progress with others, share tips, and be part of a growing network of green enthusiasts.
At PlantPro, we are committed to sustainability and eco-conscious practices. We understand the importance of responsible gardening and strive to minimize environmental impact. Our products are designed to conserve water, reduce energy consumption, and promote biodiversity.
We invite you to join us on our mission to make gardening smarter and more accessible. Whether you're a seasoned gardener or just getting started, PlantPro is here to support you on your journey to greener living. Together, we can create a world where every garden thrives.</p><b/><br/>
<div className='lastline'>Thank you for choosing PLANT PRO. Let's grow together!</div>
</div>
        </div>
    );
}
export default AboutUS;