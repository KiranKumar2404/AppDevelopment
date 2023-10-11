package com.example.plantpro.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.plantpro.Model.Review;
@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>{
    
}

