package com.example.plantpro.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.plantpro.Model.User;
import com.example.plantpro.Repository.UserRepository; 

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User signUp(User user) {
        return userRepository.save(user);
    }

    public User signIn(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.get() != null && user.get().getPassword().equals(password)) {
            return user.get();
        }
        return null;
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User updateUser(Long id, User updatedUser) {
        User existingUser = getUserById(id);
        if (existingUser != null) {
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            userRepository.save(existingUser);
        }
        return existingUser;
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
