import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router for navigation
import './Faq.css';
import { useDarkMode } from './context/DarkModeContext';
import './Dashboard.css';

const FAQAccordion = () => {
  const { isDarkMode } = useDarkMode();
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // React Router navigate function

  const handlePrivacy = () => {
    navigate("/privacy");
  };

  const handleTerms = () => {
    navigate("/terms");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  const handleFaq = () => {
    navigate("/faq");
  };

  const handleHomepage = () => {
    navigate('/dashboard');
  };
  const handleAbout = () => {
    navigate('/about');
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
        question: 'How does the Smart Home Garden System work?',
        answer: 'The Smart Home Garden System uses a combination of sensors, automation, and smart technology to monitor and control various aspects of your garden, including watering, temperature, and light levels. It ensures that your plants receive the right amount of care and attention to thrive.'
      },
      {
        question: 'What are the benefits of using the Smart Home Garden System?',
        answer: 'Using the Smart Home Garden System offers several benefits, including efficient resource usage, automated care for your plants, and the ability to remotely monitor and control your garden. It can help you save time and ensure the health and growth of your plants.'
      },
      {
        question: 'Is the Smart Home Garden System compatible with different types of plants?',
        answer: 'Yes, the Smart Home Garden System is designed to be compatible with a wide range of plants, from flowers and herbs to vegetables and succulents. You can customize its settings to suit the specific needs of your plants.'
      },
      {
        question: 'Can I control the Smart Home Garden System using a mobile app?',
        answer: 'Absolutely! The Smart Home Garden System comes with a user-friendly mobile app that allows you to monitor and control your garden remotely. You can adjust watering schedules, check sensor readings, and receive notifications about your garden status.'
      },
      {
        question: 'What makes the Smart Home Garden System a sustainable choice for gardening?',
        answer: 'The Smart Home Garden System promotes sustainability by optimizing resource usage. It waters your plants based on their needs, reduces energy consumption, and minimizes water wastage. This eco-friendly approach not only benefits your garden but also the environment.'
      }      
  ];

  return (
    <div className='FAQ'>
    <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
            <ul>
            <button className="home-buttond" onClick={handleHomepage}>Home</button>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleAbout}>About Us</a>
              </li>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''}>Contact Us</a>
              </li>
            </ul>
          </nav>
      <div className="containerF">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          {faqItems.map((item, index) => (
            <div className="accordion-item" key={index}>
              <button className='buttonF'
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index ? 'true' : 'false'}
              >
                <span className="accordion-title">{item.question}</span>
                <span className="iconF" aria-hidden="true"></span>
              </button>
              <div
                className={`accordion-content ${activeIndex === index ? 'open' : ''}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
          <li className="copyright">
            <a href="#" className={isDarkMode ? 'dark-text' : ''}>
              &copy; 2023 Copyrights claimed. All rights reserved.
            </a>
          </li>
          <li>
            <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleFaq}>
              FAQ'S
            </a>
          </li>
          <li>
            <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlePrivacy}>
              Privacy policy
            </a>
          </li>
          <li>
            <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleTerms}>
              Terms and conditions
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FAQAccordion;
