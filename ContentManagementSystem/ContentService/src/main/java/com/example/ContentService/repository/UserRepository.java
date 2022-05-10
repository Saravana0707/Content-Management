package com.example.ContentService.repository;

import com.example.ContentService.model.UserContent;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<UserContent,String> {
    List<UserContent> findByUserEmail(String userEmail);
}
