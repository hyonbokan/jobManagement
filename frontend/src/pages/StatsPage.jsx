import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress, Grid2 } from '@mui/material';
import { fetchStats } from '../api/jobApplicationApi';
import { PieChart, Pie, Tooltip, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const StatsPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const pieData = Object.entries(stats.applicationsByStatus).map(([key, value]) => ({
    name: key,
    value,
  }));

  const lineData = Object.entries(stats.applicationsTrend).map(([key, value]) => ({
    date: key,
    count: value,
  }));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          width: '100%',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'left' }}>
          Job Application Stats
        </Typography>
        <Grid2 container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          {/* Overview Stats */}
          <Grid2 xs={12} md={3}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">Total Applications</Typography>
              <Typography variant="h4" color="primary">
                {stats.totalApplications}
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 xs={12} md={3}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">Interviews Scheduled</Typography>
              <Typography variant="h4" color="primary">
                {stats.interviewScheduled}
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 xs={12} md={3}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">Accepted</Typography>
              <Typography variant="h4" color="primary">
                {stats.totalAccepted}
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 xs={12} md={3}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">Rejected</Typography>
              <Typography variant="h4" color="primary">
                {stats.totalRejected}
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>

        {/* Charts */}
        <Grid2 container spacing={4} sx={{ mt: 4, justifyContent: 'center', alignItems: 'center' }}>
          <Grid2 xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Applications by Status
              </Typography>
              <PieChart width={300} height={300}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d'][index % 4]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Paper>
          </Grid2>
          <Grid2 xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Applications Trend
              </Typography>
              <LineChart width={500} height={300} data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default StatsPage;