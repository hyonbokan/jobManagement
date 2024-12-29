package com.example.jobManagement.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobManagement.dto.JobApplicationDTO;
import com.example.jobManagement.service.JobApplicationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("job-applications")
public class JobApplicationController {
    
    private final JobApplicationService jobApplicationService;

    public JobApplicationController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }

    @GetMapping
    public ResponseEntity<List<JobApplicationDTO>> getAllApplications() {
        List<JobApplicationDTO> applications = jobApplicationService.getAllApplications();
        return ResponseEntity.ok(applications);
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobApplicationDTO> getApplicationById(@PathVariable Long id) {
        JobApplicationDTO application = jobApplicationService.getApplicationById(id);
        return ResponseEntity.ok(application);
    }

    @PostMapping("/create-application")
    public ResponseEntity<JobApplicationDTO> createApplication(@Valid @RequestBody JobApplicationDTO dto){
        JobApplicationDTO newApplication = jobApplicationService.createApplication(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(newApplication);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<JobApplicationDTO> updateApplication(
        @PathVariable Long id,
        @RequestBody JobApplicationDTO dto
    ) {
        JobApplicationDTO updatedApplicationDTO = jobApplicationService.updateApplication(id, dto);
        return ResponseEntity.ok(updatedApplicationDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long id) {
        jobApplicationService.deleteApplication(id);
        return ResponseEntity.noContent().build(); // 204 no content
    }

}
