package com.example.jobManagement.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import com.example.jobManagement.dto.StatsDTO;
import com.example.jobManagement.entity.Stats;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface StatsMapper {
    
    StatsDTO toDto(Stats entity);

    @Mapping(target = "id", ignore = true)
    Stats toEntity(StatsDTO dto);
}