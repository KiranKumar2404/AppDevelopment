package com.example.plantpro.Controller;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.plantpro.Model.Machinery;
import com.example.plantpro.Service.MachineryService;

@RestController
@RequestMapping("/machinery")
public class MachineryController {

    @Autowired
    private MachineryService machineryService;

    @PostMapping("/post")
    public Machinery createMachinery(@RequestBody Machinery machinery) {
        return machineryService.createMachinery(machinery);
    }

    @GetMapping("/get/{id}")
    public Machinery getMachineryById(@PathVariable Long id) {
        return machineryService.getMachineryById(id);
    }
    @GetMapping("/get")
    public List<Machinery> getAllMachinery() {
        return machineryService.getAllMachinery();
    }
    
    @GetMapping("/muser")
    public ResponseEntity<List<Machinery>> getAllMachinery(@RequestParam int user_Id) { 
        List<Machinery> machineries = machineryService.getAllMachineryByUserId(user_Id);
        return new ResponseEntity<>(machineries, HttpStatus.OK);
    }
    @PutMapping("/put/{id}")
    public Machinery updateMachinery(@PathVariable Long id, @RequestBody Machinery machinery) {
        return machineryService.updateMachinery(id, machinery);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteMachinery(@PathVariable Long id) {
        machineryService.deleteMachinery(id);
    }
}