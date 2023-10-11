package com.example.plantpro.Controller;

import com.example.plantpro.Model.Garden;
import com.example.plantpro.Service.GardenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/gardens")
public class GardenController {
    @Autowired
    private final GardenService gardenService;

    public GardenController(GardenService gardenService) {
        this.gardenService = gardenService;
    }

    @GetMapping("/user")
    public ResponseEntity<List<Garden>> getAllGardens(@RequestParam int user_Id) { 
        List<Garden> gardens = gardenService.getAllGardensByUserId(user_Id);
        return new ResponseEntity<>(gardens, HttpStatus.OK);
    }
    
    @GetMapping
    public ResponseEntity<List<Garden>> getAllGardens() { 
        List<Garden> gardens = gardenService.getAllGardens();
        return new ResponseEntity<>(gardens, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Garden> getGardenById(@PathVariable int id) {
        Optional<Garden> garden = gardenService.getGardenById(id);
        return garden.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Garden> createGarden(@RequestBody Garden garden) {
        Garden createdGarden = gardenService.createGarden(garden);
        return new ResponseEntity<>(createdGarden, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Garden> updateGarden(@PathVariable int id, @RequestBody Garden garden) {
        Garden updatedGarden = gardenService.updateGarden(id, garden);
        return new ResponseEntity<>(updatedGarden, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGarden(@PathVariable int id) {
        gardenService.deleteGarden(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
