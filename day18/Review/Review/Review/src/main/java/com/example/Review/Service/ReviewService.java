package com.example.Review.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Review.Model.Review;
import com.example.Review.Repository.ReviewRepository;

import java.util.List;

@Service
public class ReviewService {
    
    @Autowired
    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review > getAllFeedback() {
        return reviewRepository.findAll();
    }

    public Review addFeedback(Review review) {
        return reviewRepository.save(review);
    }
}
