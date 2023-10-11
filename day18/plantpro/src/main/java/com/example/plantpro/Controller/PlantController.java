package com.example.plantpro.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.plantpro.Model.Plant;
import com.example.plantpro.Service.PlantService;

import java.util.List;

@RestController
@RequestMapping("/plants")
public class PlantController {

    @Autowired
    private PlantService plantService;

    @GetMapping("/get")
    public List<Plant> getAllPlants() {
        return plantService.getAllPlants();
    }

    @GetMapping("/get/{id}")
    public Plant getPlantById(@PathVariable Long id) {
        return plantService.getPlantById(id);
    }

    @PostMapping("/post")
    public Plant createPlant(@RequestBody Plant plant) {
        return plantService.createPlant(plant);
    }

    @PutMapping("/put/{id}")
    public Plant updatePlant(@PathVariable Long id, @RequestBody Plant plant) {
        return plantService.updatePlant(id, plant);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePlant(@PathVariable Long id) {
        plantService.deletePlant(id);
    }
}