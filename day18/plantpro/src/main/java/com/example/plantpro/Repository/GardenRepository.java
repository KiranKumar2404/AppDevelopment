package com.example.plantpro.Repository; 
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.plantpro.Model.Garden;

@Repository
public interface GardenRepository extends JpaRepository<Garden, Integer> {
    List<Garden> findAllByUserId(int userId);
    List<Garden> findByUser_Id(int userId);
}