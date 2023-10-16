package com.example.plantpro.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.plantpro.Request.AuthenticationRequest;
import com.example.plantpro.Request.RegisterRequest;
import com.example.plantpro.Response.AuthenticationResponse;
import com.example.plantpro.Model.User;
import com.example.plantpro.Model.enumerate.Role;
import com.example.plantpro.Repository.UserRepository;
import com.example.plantpro.Service.AuthService;
import com.example.plantpro.util.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthService implements AuthServiceint{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .id(user.getId())
                .role(user.getRole().toString())
                .build();
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
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
    //  @Override
    // public User updateUserPassword(Long userId, String newPassword) {
    //     User user = userRepository.findById(userId).orElse(null);
    //     if (user != null) {
    //         // Update the password with the encoded new password
    //         user.setPassword(passwordEncoder.encode(newPassword));
    //         userRepository.save(user);
    //     }
    //     return user;
    //}
}