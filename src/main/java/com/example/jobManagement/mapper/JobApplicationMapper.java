package com.example.jobManagement.mapper;

import org.mapstruct.*;

import com.example.jobManagement.dto.JobApplicationDTO;
import com.example.jobManagement.entity.JobApplication;

@Mapper(componentModel = "spring")
public interface JobApplicationMapper {
    
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateJobApplicationFromDto(
        JobApplicationDTO dto,
        @MappingTarget JobApplication entity
    );

    // convert entity to dto
    JobApplicationDTO toDto(JobApplication entity);

    // convert dto to entity
    JobApplication toEntity(JobApplicationDTO dto);
    
}