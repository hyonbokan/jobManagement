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

    private Map<String, Long> applicationsByStatus;
    private Map<String, Long> applicationsTrend;

    public void setTotalRejected(long totalRejected) {
        this.totalRejected = totalRejected;
    }

    public void setTotalAccepted(long totalAccepted) {
        this.totalAccepted = totalAccepted;
    }

    public void setTotalApplications(long totalApplications){
        this.totalApplications = totalApplications;
    }

    public void setInterviewScheduled(long interviewScheduled) {
        this.interviewScheduled = interviewScheduled;
    }

    public void setApplicationsByStatus(Map<String, Long> applicationsByStatus) {
        this.applicationsByStatus = applicationsByStatus;
    }

    public void setApplicationsTrend(Map<String, Long> applicationsTrend) {
        this.applicationsTrend = applicationsTrend;
    }
}
