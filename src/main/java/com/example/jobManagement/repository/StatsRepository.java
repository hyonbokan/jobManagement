package com.example.jobManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.jobManagement.entity.Stats;


public interface StatsRepository extends JpaRepository<Stats, Long> {
    
    @Query("SELECT CAST(status AS string), COUNT(status) FROM JobApplication GROUP BY status")
    List<Object[]> getApplicationCountByStatus();

    @Query("SELECT FUNCTION('DATE', applicationDate), COUNT(*) FROM JobApplication GROUP BY FUNCTION('DATE', applicationDate) ORDER BY FUNCTION('DATE', applicationDate)")
    List<Object[]> getApplicationsCountByDate();

    @Query("SELECT COUNT(*) FROM JobApplication")
    long getTotalApplications();

    @Query("SELECT COUNT(*) FROM JobApplication WHERE status = 'INTERVIEW_SCHEDULED'")
    long getInterviewScheduledCount();

    @Query("SELECT COUNT(*) FROM JobApplication WHERE status = 'REJECTED'")
    long getTotalRejectedCount();

    @Query("SELECT COUNT(*) FROM JobApplication WHERE status = 'ACCEPTED'")
    long getTotalAcceptedCount();
}
