import React from 'react';
import { Paper, Typography } from '@mui/material';

const StatCard = ({ title, count=0 }) => {
  return (
    <Paper
      sx={{
        padding: 2,
        textAlign: 'center',
        flex: '1 0 auto',
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4" color="primary">
        {count}
      </Typography>
    </Paper>
  );
};

export default StatCard;