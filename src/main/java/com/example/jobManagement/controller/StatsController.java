package com.example.jobManagement.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobManagement.service.StatsService;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
@RequestMapping("stats")
public class StatsController {

    private final StatsService statsService;

    public StatsController(StatsService statsService) {
        this.statsService = statsService;
    }
    
    @GetMapping("/by-status")
    public ResponseEntity<Map<String, Long>> getApplicationByStatus() {
        return ResponseEntity.ok(statsService.fetchApplicationCountByStatus());
    }

    @GetMapping("/count-by-date")
    public ResponseEntity<Map<String, Long>> getApplicationsCountByDate() {
        return ResponseEntity.ok(statsService.fetchApplicationsCountByDate());
    }
    
}
