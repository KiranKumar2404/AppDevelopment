// package com.example.plantpro.Controller;
// // import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.http.HttpStatus;
// // import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// // import com.example.plantpro.Model.User; 
// import com.example.plantpro.Service.UserService; 

// @RestController
// @CrossOrigin("http://localhost:3000")
// public class UserController {
//     @Autowired
//     private UserService userService;

//     // @PostMapping("/signup")
//     // public ResponseEntity<User> signUp(@RequestBody User user) {
//     //     try {
//     //         User createdUser = userService.signUp(user);
//     //         return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
//     //     } catch (Exception e) {
//     //         return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//     //     }
//     // }

//     // @PostMapping("/signin")
//     // public ResponseEntity<User> signIn(@RequestBody User user) {
//     //     try {
//     //         User loggedInUser = userService.signIn(user.getEmail(), user.getPassword());
//     //         if (loggedInUser != null) {
//     //             return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
//     //         } else {
//     //             return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
//     //         }
//     //     } catch (Exception e) {
//     //         return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//     //     }
//     // }

// //     @GetMapping("/users/{id}")
// //     public ResponseEntity<User> getUser(@PathVariable Long id) {
// //         try {
// //             User user = userService.getUserById(id);
// //             if (user != null) {
// //                 return new ResponseEntity<>(user, HttpStatus.OK);
// //             } else {
// //                 return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
// //             }
// //         } catch (Exception e) {
// //             return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
// //         }
// //     }

// //     @GetMapping("/users/all")
// // public ResponseEntity<List<User>> getAllUsers() {
// //     try {
// //         List<User> users = userService.getAllUsers();
// //         if (!users.isEmpty()) {
// //             return new ResponseEntity<>(users, HttpStatus.OK);
// //         } else {
// //             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
// //         }
// //     } catch (Exception e) {
// //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
// //     }
// // }

    
    
//     // @PutMapping("/users/{id}")
//     // public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
//     //     try {
//     //         User updatedUser = userService.updateUser(id, user);
//     //         if (updatedUser != null) {
//     //             return new ResponseEntity<>(updatedUser, HttpStatus.OK);
//     //         } else {
//     //             return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
//     //         }
//     //     } catch (Exception e) {
//     //         return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//     //     }
//     // }

//     // @DeleteMapping("/{id}")
//     // public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
//     //     try {
//     //         userService.deleteUser(id);
//     //         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//     //     } catch (Exception e) {
//     //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//     //     }
//     // }
// }
