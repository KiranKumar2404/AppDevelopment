package com.example.Review.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Review.Model.Review;
import com.example.Review.Service.ReviewService;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/review")
public class ReviewController {

    @Autowired
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping
    public List<Review> getAllFeedback() {
        return reviewService.getAllFeedback();
    }

    @PostMapping
    public Review addFeedback(@RequestBody Review review) {
        return reviewService.addFeedback(review);
    }
}
