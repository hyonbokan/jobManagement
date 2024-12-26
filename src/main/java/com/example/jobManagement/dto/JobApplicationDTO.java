package com.example.jobManagement.dto;

import com.example.jobManagement.enums.ApplicationStatus;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobApplicationDTO {
    private String position;
    private String company;
    private ApplicationStatus status;
    private Date applicationDate;
    private Date interviewDate;
    private String notes;

}
