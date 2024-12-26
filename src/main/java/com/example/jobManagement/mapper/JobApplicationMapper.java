package com.example.jobManagement.mapper;

import org.mapstruct.Mapper;

import org.mapstruct.BeanMapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.Mapping;

import com.example.jobManagement.dto.JobApplicationDTO;
import com.example.jobManagement.entity.JobApplication;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface JobApplicationMapper {
    
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "id", ignore = true)
    void updateJobApplicationFromDto(
        JobApplicationDTO dto,
        @MappingTarget JobApplication entity
    );

    // convert entity to dto
    JobApplicationDTO toDto(JobApplication entity);
    
    // convert dto to entity
    @Mapping(target = "id", ignore = true)
    JobApplication toEntity(JobApplicationDTO dto);
    
}