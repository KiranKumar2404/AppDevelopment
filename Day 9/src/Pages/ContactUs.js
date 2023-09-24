import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Dashboard.css';
import './Responsive.css';
import { useDarkMode } from './context/DarkModeContext';
import {BsFacebook , BsTwitter,BsInstagram, BsPhone, BsEnvelope} from  'react-icons/bs';
import OrderButton from './OrderButton'; 


function ContactUs() {
  const { isDarkMode } = useDarkMode();
    const navigate=useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [userMessage, setUserMessage] = useState('');
    const [adminMessage, setAdminMessage] = useState('');
    const [adminReply, setAdminReply] = useState("");


  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
  
      setSuccessMessage("Your message has been sent successfully!");
  
      setName("");
      setEmail("");
      setMessage("");
    };
    
    const sendUserMessage = () => {
        localStorage.setItem('userMessage', message); 
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        setAdminReply('');
      };

      const handleOrder = () => {
        localStorage.setItem('userMessage', message); 
        localStorage.setItem('userName', name); 
        localStorage.setItem('userEmail', email); 
        setAdminReply('');
      };
    
      const sendAdminReply = () => {
      const adminReplyMessage = adminReply;
      console.log("Admin's Reply:", adminReplyMessage);
      setAdminReply('');
    };

    useEffect(() => {
        const storedAdminReply = localStorage.getItem('adminReply');
        if (storedAdminReply) {
          setAdminReply(storedAdminReply);
        }

        const storedUserMessage = localStorage.getItem('userMessage');
    if (storedUserMessage) {
      setUserMessage(storedUserMessage);
    }
      }, []);

    const handleHomepage = () => {
    navigate('/Dashboard');
    };
    const handlePrivacy = () => {
        navigate('/privacy');
    };
    const handleAbout = () => {
        navigate('/about');
    };
    const handleTerms = () => {
        navigate('/terms');
    };

    return (
      <div className='contactbody'>
        <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
        <div className='BGG'>
        <img src="contact.jpg" alt="contact" />
        </div>
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
          <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
        <li className="copyright">
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>&copy; 2023 All rights reserved.</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlePrivacy}>Privacy policy</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleTerms}>Terms and conditions</a>
          </li>
          
        </ul>
        </nav>
        <div className='contact'>
      <h1>Contact Us</h1>
      <div className='contact-content'>
        <div className='contact-icons'>
          <div className='icon'>
            <a href="mailto:contact@smarthomegardensystem.com">
              <img src="Mail.png" alt="Email" />
            </a>
            <p>Email</p>
          </div>
          <div className='icon'>
            <a href="https://www.facebook.com/SmartHomeGardenSystem" target="_blank" rel="noopener noreferrer">
              <img src="Facebook.jpg" alt="Facebook" />
            </a>
            <p>Facebook</p>
          </div>
          <div className='icon'>
            <a href="https://twitter.com/SmartGardenSys" target="_blank" rel="noopener noreferrer">
              <img src="X.jpg" alt="Twitter" />
            </a>
            <p>Twitter</p>
          </div>
          <div className='icon'>
            <a href="https://www.instagram.com/SmartGardenSystem" target="_blank" rel="noopener noreferrer">
              <img src="Insta.jpeg" alt="Instagram" />
            </a>
            <p>Instagram</p>
          </div>
        </div>
        <div className='contact-info'>
          <div className='icon'>
            <BsPhone />
          <span> Phone Number: +1 (123) 456-7890</span>
          </div>
          <div className='icon'>
            <BsEnvelope />
          <span> Email Address: contact@smarthomegardensystem.com</span>
          </div>
          <div className='icon'>
            <BsPhone />
          <span> Mailing Address:</span>
          <p>123 Green Thumb Lane,</p>
          <p>Garden City, Plantopia, Growland</p>
          </div>
        </div>
      </div>
    </div>
</div>
<div className="chat-area">
          <h2>Chat</h2>
          <div className="user-info">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="user-message">{message}</div>
          <div className="admin-message">{adminReply}</div>
          <textarea
            className="chat-input"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="chat-button" onClick={sendUserMessage}>
          <OrderButton onOrderClick={handleOrder} />
          </button>
        </div>

</div>
      );
    }
    export default ContactUs;