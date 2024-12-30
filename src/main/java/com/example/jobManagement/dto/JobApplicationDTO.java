package com.example.jobManagement.dto;

import java.util.Date;

import com.example.jobManagement.enums.ApplicationStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobApplicationDTO {
    private Long id;
    private String position;
    private String company;
    private ApplicationStatus status;
    private Date applicationDate;
    private Date interviewDate;
    private String link;
    private String description;
    private String notes;

}
