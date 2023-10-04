package com.example.plantpro.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.plantpro.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
    
}
