package com.example.ContentService.service;

import com.example.ContentService.model.UserContent;

import java.util.List;

public interface UserContentService {
    UserContent addContent(UserContent userContent);
    List<UserContent> getContent();
    List<UserContent> getContentForUser(String userEmail);
}
