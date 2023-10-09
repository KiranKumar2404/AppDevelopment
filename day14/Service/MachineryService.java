package com.example.plantpro.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.plantpro.Model.Machinery;
import com.example.plantpro.Repository.MachineryRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MachineryService {

    @Autowired
    private MachineryRepository machineryRepository;

    public Machinery createMachinery(Machinery machinery) {
        return machineryRepository.save(machinery);
    }

    public Machinery getMachineryById(Long id) {
        return machineryRepository.findById(id).orElse(null);
    }

    public Machinery updateMachinery(Long id, Machinery machinery) {
        Optional<Machinery> existingMachinery = machineryRepository.findById(id);
        if (existingMachinery.isPresent()) {
            machinery.setMid(id);
            return machineryRepository.save(machinery);
        } else {
            return null;
        }
    }

    public void deleteMachinery(Long id) {
        machineryRepository.deleteById(id);
    }

    public List<Machinery> getAllMachinery() {
        return machineryRepository.findAll();
    }

    public List<Machinery> getAllMachineryByUserId(long userId) {
        return machineryRepository.findAllByUserId(userId);
    }
}