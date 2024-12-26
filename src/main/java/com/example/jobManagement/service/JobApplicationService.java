package com.example.jobManagement.service;

import com.example.jobManagement.dto.JobApplicationDTO;
import com.example.jobManagement.entity.JobApplication;
import com.example.jobManagement.mapper.JobApplicationMapper;

import org.springframework.stereotype.Service;

import com.example.jobManagement.repository.JobApplicationRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobApplicationService {
    
    private final JobApplicationRepository jobApplicationRepository;
    private final JobApplicationMapper jobApplicationMapper;

    public JobApplicationService(
        JobApplicationRepository jobApplicationRepository,
        JobApplicationMapper jobApplicationMapper
        ) {
        this.jobApplicationRepository = jobApplicationRepository;
        this.jobApplicationMapper = jobApplicationMapper;
    }

    public List<JobApplicationDTO> getAllApplications() {
        List<JobApplication> application = jobApplicationRepository.findAll();
        return application.stream()
                .map(jobApplicationMapper::toDto)
                .collect(Collectors.toList());
    }

    public JobApplicationDTO createApplication(JobApplicationDTO dto) {
        // convert to entity
        JobApplication application = jobApplicationMapper.toEntity(dto);

        // save entity
        JobApplication newApplication = jobApplicationRepository.save(application);

        // convert back to dto
        return jobApplicationMapper.toDto(newApplication);
    }

    public JobApplicationDTO updateApplication(
        Long id,
        JobApplicationDTO dto
    ) {
            JobApplication existingApplication = jobApplicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));
            jobApplicationMapper.updateJobApplicationFromDto(dto, existingApplication);
            JobApplication updatedApplication = jobApplicationRepository.save(existingApplication);

            return jobApplicationMapper.toDto(updatedApplication);
    }

    public JobApplicationDTO getApplicationById(Long id) {
        JobApplication application = jobApplicationRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Application with ID: " + id + " is not found."));
        return jobApplicationMapper.toDto(application);
    }

    public void deleteApplication(Long id) {
        if (!jobApplicationRepository.existsById(id)) {
            throw new RuntimeException("Application with ID: " + id + " is not found.");
        }
        jobApplicationRepository.deleteById(id);
    }
}
