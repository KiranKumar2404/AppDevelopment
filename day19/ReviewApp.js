import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReviewApp.css';

function ReviewApp() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ email: '', text: '' });
  const authToken = localStorage.getItem('token');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/review', {
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

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/review', formData, {
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

  return (
    <div className="App">
      <h1>Review App</h1>
      <div className="review-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="text"
            placeholder="Review"
            value={formData.text}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
      <div className="review-list">
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.email}:</strong> {review.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReviewApp;