package com.example.plantpro.Model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "machinery")
public class Machinery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mid;
    private String deviceName;
    private String type;
    private String purpose;
    private String controlMethod;
    private LocalDate purchaseDate;
    public Long getMid() {
        return mid;
    }
    public void setMid(Long mid) {
        this.mid = mid;
    }
    public String getDeviceName() {
        return deviceName;
    }
    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getPurpose() {
        return purpose;
    }
    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }
    public String getControlMethod() {
        return controlMethod;
    }
    public void setControlMethod(String controlMethod) {
        this.controlMethod = controlMethod;
    }
    public LocalDate getPurchaseDate() {
        return purchaseDate;
    }
    public void setPurchaseDate(LocalDate purchaseDate) {
        this.purchaseDate = purchaseDate;
    }


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
}