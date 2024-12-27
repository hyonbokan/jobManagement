import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const JobTable = ({ applications }) => {
  return (
    <TableContainer sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 1 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Applied Time</TableCell>
            <TableCell>Interview Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.map((application, index) => (
            <TableRow key={index}>
              <TableCell>{new Date(application.applicationDate).toLocaleDateString()}</TableCell>
              <TableCell>{application.position}</TableCell>
              <TableCell>{application.company}</TableCell>
              <TableCell>{application.status}</TableCell>
              <TableCell>
                {application.applicationDate
                  ? new Date(application.applicationDate).toLocaleTimeString()
                  : "N/A"}
              </TableCell>
              <TableCell>
                {application.interviewDate
                  ? new Date(application.interviewDate).toLocaleDateString()
                  : "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobTable;
