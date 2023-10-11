package com.example.plantpro.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.plantpro.Model.Review;
import com.example.plantpro.Repository.ReviewRepository;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private final ReviewRepository reviewRepository;
    private final RestTemplate restTemplate;

    public ReviewService(ReviewRepository reviewRepository, RestTemplate restTemplate) {
        this.reviewRepository = reviewRepository;
        this.restTemplate = restTemplate;
    }

    public List<Review> getAllFeedback() {
        return reviewRepository.findAll();
    }

    public Review addFeedback(Review review) {
        return reviewRepository.save(review);
    }

    public ResponseEntity<String> makeHttpRequest() {
        ResponseEntity<String> response = restTemplate.getForEntity("http://localhost:8181/api/review", String.class);
        return response;
    }

    public ResponseEntity<String> makeHttpPostRequest(Review review) {
        ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:8181/api/review", review, String.class);
        return response;
    }
}
