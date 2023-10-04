package com.example.plantpro.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Garden {
    @Id
    private int id;
    private String name;
    private int numberOfLights;
    private int numberOfPlants;
    private int numberOfMotors;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getNumberOfLights() {
        return numberOfLights;
    }
    public void setNumberOfLights(int numberOfLights) {
        this.numberOfLights = numberOfLights;
    }
    public int getNumberOfPlants() {
        return numberOfPlants;
    }
    public void setNumberOfPlants(int numberOfPlants) {
        this.numberOfPlants = numberOfPlants;
    }
    public int getNumberOfMotors() {
        return numberOfMotors;
    }
    public void setNumberOfMotors(int numberOfMotors) {
        this.numberOfMotors = numberOfMotors;
    }
    
}
