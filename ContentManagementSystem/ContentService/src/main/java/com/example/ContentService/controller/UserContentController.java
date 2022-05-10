package com.example.ContentService.controller;

import com.example.ContentService.model.UserContent;
import com.example.ContentService.service.UserContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/content")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserContentController {

    private UserContentService userContentService;

    @Autowired
    public UserContentController(UserContentService userContentService) {
        this.userContentService = userContentService;
    }

    @PostMapping("/user/addContent")
    public ResponseEntity<?> addContent(@RequestBody UserContent userContent) {
        return new ResponseEntity<>(userContentService.addContent(userContent), HttpStatus.CREATED);
    }

    @GetMapping("/user/getContent")
    public ResponseEntity<?> getContent(){
        return new ResponseEntity<>(userContentService.getContent(), HttpStatus.OK);
    }

    @GetMapping("/user/getUserContent/{userEmail}")
    public ResponseEntity<?> getUserContent(@PathVariable  String userEmail){
        return new ResponseEntity<>(userContentService.getContentForUser(userEmail), HttpStatus.OK);
    }
}
