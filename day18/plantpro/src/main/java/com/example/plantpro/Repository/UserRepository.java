package com.example.plantpro.Repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.plantpro.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
    
    User findByid(Long id);

    void deleteByid(Long id);

}
