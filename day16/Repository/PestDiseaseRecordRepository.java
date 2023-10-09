package com.example.plantpro.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.plantpro.Model.PestDiseaseRecord;

@Repository
public interface PestDiseaseRecordRepository extends JpaRepository<PestDiseaseRecord, Long> {
    
}
