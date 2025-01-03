package com.example.jobManagement.service;

import org.springframework.stereotype.Service;

import com.example.jobManagement.dto.StatsDTO;
import com.example.jobManagement.entity.Stats;
import com.example.jobManagement.mapper.StatsMapper;
import com.example.jobManagement.repository.JobApplicationRepository;
import com.example.jobManagement.repository.StatsRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class StatsService {
    
    private final StatsRepository statsRepository;
    private final StatsMapper statsMapper;
    private final JobApplicationRepository jobApplicationRepository;

    public StatsService(StatsRepository statsRepository, StatsMapper statsMapper, JobApplicationRepository jobApplicationRepository) {
        this.statsRepository = statsRepository;
        this.statsMapper = statsMapper;
        this.jobApplicationRepository = jobApplicationRepository;
    }


    public Map<String, Long> fetchApplicationCountByStatus() {
        List<Object []> results = statsRepository.getApplicationCountByStatus();
        Map<String, Long> applicationCounts = new HashMap<>();

        for (Object[] result : results) {
            String status = result[0] != null ? result[0].toString() : "UNSPECIFIED";
            Long count = result[1] != null ? ((Number) result[1]).longValue() : 0L;
            applicationCounts.put(status, count);
        }

        return applicationCounts;
    }

    public Map<String, Long>  fetchApplicationsCountByDate() {
        List<Object []> rawData = statsRepository.getApplicationsCountByDate();
        Map<String, Long> trends = new HashMap<>();

        for (Object [] row : rawData) {
            //row 0 is a date and row 1 is long
            String date = row[0].toString();
            Long count = (Long) row[1];
            trends.put(date, count);
        }

        return trends;
    }

    public long getTotalApplicationCount() {
        return jobApplicationRepository.count();
    }
    
    // public StatsDTO getStatsSummary() {

    // }

}
