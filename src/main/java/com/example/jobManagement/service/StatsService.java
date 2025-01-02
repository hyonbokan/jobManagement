package com.example.jobManagement.service;

import org.springframework.stereotype.Service;

import com.example.jobManagement.mapper.StatsMapper;
import com.example.jobManagement.repository.StatsRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class StatsService {
    
    private final StatsRepository statsRepository;
    private final StatsMapper statsMapper;

    public StatsService(StatsRepository statsRepository, StatsMapper statsMapper) {
        this.statsRepository = statsRepository;
        this.statsMapper = statsMapper;
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

    public Map<String, Long>  fetchApplicationsTrendByDate() {
        List<Object []> rawData = statsRepository.getApplicationsTrendByDate();
        Map<String, Long> trends = new HashMap<>();

        for (Object [] row : rawData) {
            //row 0 is a date and row 1 is long
            String date = row[0].toString();
            Long count = (Long) row[1];
            trends.put(date, count);
        }

        return trends;
    }
}
