package com.example.UserAuthenticationService.controller;

import com.example.UserAuthenticationService.exception.UserAlreadyExist;
import com.example.UserAuthenticationService.exception.UserNotFound;
import com.example.UserAuthenticationService.model.User;
import com.example.UserAuthenticationService.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("http://localhost:4200/")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService=userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@RequestBody User user) throws UserAlreadyExist {
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/login/{userEmail}")
    public ResponseEntity<?> getUser(@PathVariable String userEmail) throws UserNotFound {
        return new ResponseEntity<>(userService.getUser(userEmail), HttpStatus.OK);
    }
}
