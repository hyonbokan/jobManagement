package com.example.jobManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.jobManagement.entity.JobApplication;
import com.example.jobManagement.enums.ApplicationStatus;


public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    List<JobApplication> findByStatus(ApplicationStatus status);
}