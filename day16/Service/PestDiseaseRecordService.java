package com.example.plantpro.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.plantpro.Model.PestDiseaseRecord;
import com.example.plantpro.Repository.PestDiseaseRecordRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PestDiseaseRecordService {

    private final PestDiseaseRecordRepository repository;

    @Autowired
    public PestDiseaseRecordService(PestDiseaseRecordRepository repository) {
        this.repository = repository;
    }

    public List<PestDiseaseRecord> getAllPestDiseaseRecords() {
        return repository.findAll();
    }

    public Optional<PestDiseaseRecord> getPestDiseaseRecordById(Long id) {
        return repository.findById(id);
    }

    public PestDiseaseRecord createPestDiseaseRecord(PestDiseaseRecord pestDiseaseRecord) {
        return repository.save(pestDiseaseRecord);
    }

    public void updatePestDiseaseRecord(Long id, PestDiseaseRecord updatedRecord) {
        if (repository.existsById(id)) {
            updatedRecord.setId(id);
            repository.save(updatedRecord);
        }
    }

    public void deletePestDiseaseRecord(Long id) {
        repository.deleteById(id);
    }
}
