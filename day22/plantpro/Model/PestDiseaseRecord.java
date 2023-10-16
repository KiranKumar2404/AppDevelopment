package com.example.plantpro.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "pest_disease_records")
public class PestDiseaseRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "plant_name", nullable = false)
    private String plantName;

    @Column(name = "disease_name", nullable = false)
    private String diseaseName;

    @Column(name = "remedy")
    private String remedy;

    @Column(name = "percentage_of_cure")
    private Double percentageOfCure;

    public PestDiseaseRecord() {
    }

    public PestDiseaseRecord(String plantName, String diseaseName, String remedy, Double percentageOfCure) {
        this.plantName = plantName;
        this.diseaseName = diseaseName;
        this.remedy = remedy;
        this.percentageOfCure = percentageOfCure;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlantName() {
        return plantName;
    }

    public void setPlantName(String plantName) {
        this.plantName = plantName;
    }

    public String getDiseaseName() {
        return diseaseName;
    }

    public void setDiseaseName(String diseaseName) {
        this.diseaseName = diseaseName;
    }

    public String getRemedy() {
        return remedy;
    }

    public void setRemedy(String remedy) {
        this.remedy = remedy;
    }

    public Double getPercentageOfCure() {
        return percentageOfCure;
    }

    public void setPercentageOfCure(Double percentageOfCure) {
        this.percentageOfCure = percentageOfCure;
    }
}
