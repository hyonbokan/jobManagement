package com.example.jobManagement.entity;

import com.example.jobManagement.enums.ApplicationStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.Size;
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
    private ApplicationStatus status = ApplicationStatus.APPLIED;

    @Temporal(TemporalType.DATE)
    private Date applicationDate;

    @Temporal(TemporalType.DATE)
    @FutureOrPresent(message = "Interview date must be in the future or present.")
    private  Date interviewDate;

    @Lob // Large Object for long notes
    @Basic(fetch = FetchType.LAZY) // good practice to lazy load large data for performance
    @Size(max = 1000, message = "Notes cannot exceed 1000 characters.")
    private String notes; // Interview questions, areas for improvement
    
}
