package com.example.jobManagement.entity;

import java.util.Date;

import com.example.jobManagement.enums.ApplicationStatus;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class JobApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Company is required")
    private String position;

    @NotBlank(message = "Position is required")
    private String company;

    @NotBlank(message = "Link is required")
    private String link;

    @NotBlank(message = "Description is required")
    @Lob
    private String description;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status = ApplicationStatus.APPLIED;

    @Temporal(TemporalType.DATE)
    // @FutureOrPresent(message = "Application date must be in the future or present.")
    private Date applicationDate;

    @Temporal(TemporalType.DATE)
    // @FutureOrPresent(message = "Interview date must be in the future or present.")
    private  Date interviewDate;

    @Lob // Large Object for long notes
    @Basic(fetch = FetchType.LAZY) // good practice to lazy load large data for performance
    @Size(max = 1000, message = "Notes cannot exceed 1000 characters.")
    private String notes; // Interview questions, areas for improvement
    
}
