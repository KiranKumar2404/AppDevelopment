
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReviewApp.css';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from './context/DarkModeContext';

function ReviewAdmin() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ email: '', text: '' });
  const authToken = localStorage.getItem('token');
  const { isDarkMode} = useDarkMode();
 const navigate=useNavigate();
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/feedback', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }) 
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAbout = () => {
        navigate('/Aabout');
      };
      const handlePrivacy = () => {
        navigate('/Aprivacy');
      };
      const handleTerms = () => {
        navigate('/Aterms');
      };

      const handleContact = () => {
        navigate('/contact');
      };
      const handlefaq = () => {
        navigate('/faq');
      };
      const handleReviews = () => {
        navigate('/review');
      };
      const handleHome=()=>
      {
        navigate('/Adash');
      }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/feedback', formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }) 
      fetchReviews();
      setFormData({ email: '', text: '' });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };
  const displayStars = (rating) => {
    const stars = '★'.repeat(rating);
    return <div>{stars}</div>;
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
        <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
          <ul>
            <button className="home-button" onClick={handleHome}>Home</button>
            <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleAbout}>About Us</a>
            </li>
          </ul>
        </nav>
        <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
          <ul>
            <li className="copyright1">
              <a href="#" className={isDarkMode ? 'dark-text' : ''}>&copy; 2023 All rights reserved.</a>
            </li>
            <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlePrivacy}>Privacy policy</a>
            </li>
            <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleTerms}>Terms and conditions</a>
            </li>
            <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlefaq}>FAQ's</a>
            </li>
          </ul>
        </nav>
        <img  src="customer-reviews.png" className="logo2" />
          <div className="review-container">
            <h2 className="red-text">Reviews</h2>
            <ul className="review-list">
              {reviews.map((review) => (
                <li key={review.id}>
                  <strong>{review.email}:&nbsp;&nbsp;</strong> {review.text}
                  <div className="star-rating">{displayStars(review.rating)}</div> 
                </li>
              ))}
            </ul>
          </div>
        </div>
  );
}

export default ReviewAdmin;