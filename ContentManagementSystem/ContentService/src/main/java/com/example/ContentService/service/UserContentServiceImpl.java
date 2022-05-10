package com.example.ContentService.service;

import com.example.ContentService.model.UserContent;
import com.example.ContentService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserContentServiceImpl implements UserContentService{

    private UserRepository userRepository;

    @Autowired
    public UserContentServiceImpl(UserRepository userRepository)
    {
        this.userRepository=userRepository;
    }

    @Override
    public UserContent addContent(UserContent userContent) {
        return userRepository.save(userContent);
    }

    @Override
    public List<UserContent> getContent() {
        return userRepository.findAll();
    }

    @Override
    public List<UserContent> getContentForUser(String userEmail)
    {
        return userRepository.findByUserEmail(userEmail);
    }
}
