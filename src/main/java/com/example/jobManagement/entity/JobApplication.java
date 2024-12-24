package com.example.jobManagement.entity;

import com.example.jobManagement.enums.ApplicationStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class JobApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String position;

    private String company;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;

    @Temporal(TemporalType.DATE)
    private Date applicationDate;

    @Temporal(TemporalType.DATE)
    private  Date interviewDate;

    @Lob // Large Object for long notes
    private String notes; // Interview questions, areas for improvement
    
}
