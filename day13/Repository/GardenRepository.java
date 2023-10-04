package com.example.plantpro.Repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.plantpro.Model.Garden;
import com.example.plantpro.Model.User;

@Repository
public interface GardenRepository extends JpaRepository<Garden, Integer> {

    List<Garden> findByUser(User user);

    Optional<Garden> findByIdAndUser(int id, User user);
}
