import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import JobApplicationModal from "../components/JobApplicationModal";
import {
  fetchJobApplicationById,
  deleteJobApplication,
  updateJobApplication,
} from "../api/jobApplicationApi";

const JobApplicationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadApplication = async () => {
      try {
        const data = await fetchJobApplicationById(id);
        setApplication(data);
      } catch (error) {
        console.error("Failed to fetch application details:", error);
      }
    };
    loadApplication();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteJobApplication(id);
      navigate("/"); // Redirect to home after deletion
    } catch (error) {
      console.error("Failed to delete application:", error);
    }
  };

  const handleEditSubmit = async (updatedData) => {
    try {
      const updatedApplication = await updateJobApplication(id, updatedData);
      setApplication(updatedApplication); // Update local state
      setIsEditing(false); // Close modal
    } catch (error) {
      console.error("Failed to update application:", error);
    }
  };

  if (!application) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const renderTableRow = (label, value) => (
    <TableRow>
      <TableCell sx={{ fontWeight: "bold" }}>{label}</TableCell>
      <TableCell>{value}</TableCell>
    </TableRow>
  );

  return (
    <Box sx={{ padding: 4, maxWidth: 1000, margin: "auto" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Application Details
        </Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          sx={{ textTransform: "none" }}
        >
          Back
        </Button>
      </Box>
      <Table sx={{ mb: 4 }}>
        <TableBody>
          {renderTableRow("Position", application.position)}
          {renderTableRow("Company", application.company)}
          {renderTableRow("Status", application.status)}
          {renderTableRow(
            "Link",
            <a
              href={application.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1976d2", textDecoration: "none" }}
            >
              {application.link || "No Link Provided"}
            </a>
          )}
          {renderTableRow(
            "Application Date",
            new Date(application.applicationDate).toLocaleDateString()
          )}
          {renderTableRow(
            "Interview Date",
            application.interviewDate
              ? new Date(application.interviewDate).toLocaleDateString()
              : "Not Set"
          )}
          {renderTableRow(
            "Description",
            application.description || "No Description Provided"
          )}
          {renderTableRow("Notes", application.notes || "No Notes Provided")}
        </TableBody>
      </Table>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          onClick={() => setIsEditing(true)}
          sx={{ textTransform: "none" }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
          sx={{ textTransform: "none" }}
        >
          Delete
        </Button>
      </Box>
      <JobApplicationModal
        open={isEditing}
        onClose={() => setIsEditing(false)}
        onSubmit={handleEditSubmit}
        defaultValues={application} // Pre-fill modal
      />
    </Box>
  );
};

export default JobApplicationDetailPage;