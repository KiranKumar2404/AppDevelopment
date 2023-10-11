package com.example.plantpro.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.plantpro.Model.Review;
import com.example.plantpro.Service.ReviewService;

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
