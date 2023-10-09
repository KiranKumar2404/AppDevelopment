package com.example.plantpro.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.plantpro.Model.Plant;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Long> {
}