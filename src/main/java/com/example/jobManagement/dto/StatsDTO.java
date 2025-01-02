package com.example.jobManagement.dto;

import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StatsDTO {
    private long totalApplications;
    private long interviewScheduled;
    private long totalRejected;
    private long totalAccepted;

    private Map<String, Long> applicationByStatus;
    private Map<String, Long> applicationsTrend;
}
