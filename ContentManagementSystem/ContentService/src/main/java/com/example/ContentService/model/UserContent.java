package com.example.ContentService.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class UserContent {

    @Id
    private String contentID;
    private String userEmail;
    private String contentTitle;
    private String userContent;
}
