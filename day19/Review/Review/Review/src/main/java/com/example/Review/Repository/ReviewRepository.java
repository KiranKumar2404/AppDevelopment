package com.example.Review.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Review.Model.Review;
@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>{
    
}
