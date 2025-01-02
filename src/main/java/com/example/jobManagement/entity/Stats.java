package com.example.jobManagement.entity;

import java.util.Map;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapKeyColumn;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Stats {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private long totalApplications;
    private long interviewScheduled;
    private long totalRejected;
    private long totalAccepted;

    @ElementCollection
    @CollectionTable(name = "application_by_status", joinColumns = @JoinColumn(name = "stats_id"))
    @MapKeyColumn(name = "status")
    @Column(name = "count")
    private Map<String, Long> applicationByStatus;

    @ElementCollection
    @CollectionTable(name = "applications_trend", joinColumns = @JoinColumn(name = "stats_id"))
    @MapKeyColumn(name = "date")
    @Column(name = "count")
    private Map<String, Long> applicationsTrend;
}
