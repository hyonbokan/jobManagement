import React from "react";
import { Box, Typography } from "@mui/material";
import ApplicationStatus from "../enums/ApplicationStatus";

const StatusChip = ({ text }) => {

  const getColor = (status) => {
    switch (status) {
      case ApplicationStatus.APPLIED:
        return "#6495ed";
      case ApplicationStatus.INTERVIEWING:
        return "#ff9800";
      case ApplicationStatus.OFFERED:
        return "#daa520";
      case ApplicationStatus.REJECTED:
        return "#f44336";
      case ApplicationStatus.ACCEPTED:
        return "#4caf50";
      case ApplicationStatus.UNANSWERED:
        return '#808080'
      default:
        return "#9e9e9e";
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: getColor(text),
          marginRight: 1,
        }}
      />
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default StatusChip;