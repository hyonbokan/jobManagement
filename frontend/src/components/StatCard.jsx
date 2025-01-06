import React from 'react';
import { Paper, Typography } from '@mui/material';

const StatCard = ({ title, count }) => {
  return (
    <Paper
      sx={{
        padding: 2,
        textAlign: 'center',
        flex: '1 0 auto',
        width: '150px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // vertical 
        alignItems: 'center', // horizontal
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