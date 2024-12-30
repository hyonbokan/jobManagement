import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const JobTable = ({ applications }) => {
  const navigate = useNavigate();

  return (
    <TableContainer
      sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 1 }}
    >
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
          {applications.map((application) => {
            if (!application.id) {
              // console.error("Missing unique id for application:", application);
              return null;
            }
            return (
              <TableRow
                key={application.id}
                sx={{
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
                onClick={() => navigate(`/application/${application.id}`)}
              >
                <TableCell>
                  {application.applicationDate
                    ? new Date(application.applicationDate).toLocaleDateString()
                    : "N/A"}
                </TableCell>
                <TableCell>{application.position || "N/A"}</TableCell>
                <TableCell>{application.company || "N/A"}</TableCell>
                <TableCell>{application.status || "N/A"}</TableCell>
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
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobTable;