package com.example.plantpro.Service;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.plantpro.Model.Review;

import java.util.Collections;
import java.util.List;

@Service
public class ReviewService {

    private final RestTemplate restTemplate;

    public ReviewService() {
        this.restTemplate = new RestTemplate();
    }

    public List<Review> getAllFeedback() {
        ResponseEntity<List<Review>> response = restTemplate.exchange(
                "http://localhost:8181/api/feedback",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Review>>() {}
        );

        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            return Collections.emptyList();
        }
    }

    public Review addFeedback(Review review) {
        ResponseEntity<Review> response = restTemplate.exchange(
                "http://localhost:8181/api/feedback",
                HttpMethod.POST,
                new HttpEntity<>(review),
                Review.class
        );

        if (response.getStatusCode() == HttpStatus.CREATED) {
            return response.getBody();
        } else {
            return null;
        }
    }
}