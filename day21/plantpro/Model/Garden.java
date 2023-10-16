package com.example.plantpro.Model;

// import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="garden")
public class Garden{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gid;
    private String garden_name;
    private int no_of_plants;
    private int no_of_lights;
    private int no_of_motors;
    public int getGId() {
        return gid;
    }
    public void setGId(int gid) {
        this.gid = gid;
    }
    public String getGarden_name() {
        return garden_name;
    }
    public void setGarden_name(String garden_name) {
        this.garden_name = garden_name;
    }
    public int getNo_of_plants() {
        return no_of_plants;
    }
    public void setNo_of_plants(int no_of_plants) {
        this.no_of_plants = no_of_plants;
    }
    public int getNo_of_lights() {
        return no_of_lights;
    }
    public void setNo_of_lights(int no_of_lights) {
        this.no_of_lights = no_of_lights;
    }
    public int getNo_of_motors() {
        return no_of_motors;
    }
    public void setNo_of_motors(int no_of_motors) {
        this.no_of_motors = no_of_motors;
    }
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
}