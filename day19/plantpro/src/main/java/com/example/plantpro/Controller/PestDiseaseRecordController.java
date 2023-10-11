package com.example.plantpro.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.plantpro.Model.PestDiseaseRecord;
import com.example.plantpro.Service.PestDiseaseRecordService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pest")
public class PestDiseaseRecordController {

    private final PestDiseaseRecordService service;

    @Autowired
    public PestDiseaseRecordController(PestDiseaseRecordService service) {
        this.service = service;
    }

    @GetMapping("/get")
    public List<PestDiseaseRecord> getAllPestDiseaseRecords() {
        return service.getAllPestDiseaseRecords();
    }

    @GetMapping("/get/{id}")
    public Optional<PestDiseaseRecord> getPestDiseaseRecordById(@PathVariable Long id) {
        return service.getPestDiseaseRecordById(id);
    }

    @PostMapping("/post")
    public PestDiseaseRecord createPestDiseaseRecord(@RequestBody PestDiseaseRecord pestDiseaseRecord) {
        return service.createPestDiseaseRecord(pestDiseaseRecord);
    }

    @PutMapping("/put/{id}")
    public void updatePestDiseaseRecord(@PathVariable Long id, @RequestBody PestDiseaseRecord updatedRecord) {
        service.updatePestDiseaseRecord(id, updatedRecord);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePestDiseaseRecord(@PathVariable Long id) {
        service.deletePestDiseaseRecord(id);
    }
}
