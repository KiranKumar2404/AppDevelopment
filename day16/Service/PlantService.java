package com.example.plantpro.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.plantpro.Model.Plant;
import com.example.plantpro.Repository.PlantRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PlantService {

    @Autowired
    private PlantRepository plantRepository;

    public List<Plant> getAllPlants() {
        return plantRepository.findAll();
    }

    public Plant getPlantById(Long id) {
        return plantRepository.findById(id).orElse(null);
    }

    public Plant createPlant(Plant plant) {
        return plantRepository.save(plant);
    }

    public Plant updatePlant(Long id, Plant plant) {
        Optional<Plant> existingPlant = plantRepository.findById(id);
        if (existingPlant.isPresent()) {
            plant.setId(id);
            return plantRepository.save(plant);
        } else {
            return null;
        }
    }

    public void deletePlant(Long id) {
        plantRepository.deleteById(id);
    }
}