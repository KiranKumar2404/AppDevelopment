package com.example.plantpro.Repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.plantpro.Model.Machinery;

public interface MachineryRepository extends JpaRepository<Machinery, Long> {

    List<Machinery> findAllByUserId(long userId);
    
}