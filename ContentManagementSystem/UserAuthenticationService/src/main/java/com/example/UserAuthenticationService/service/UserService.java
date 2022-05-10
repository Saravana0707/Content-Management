package com.example.UserAuthenticationService.service;

import com.example.UserAuthenticationService.exception.UserAlreadyExist;
import com.example.UserAuthenticationService.exception.UserNotFound;
import com.example.UserAuthenticationService.model.User;

public interface UserService {
    User saveUser(User user) throws UserAlreadyExist;
    User getUser(String userEmail) throws UserNotFound;
}
