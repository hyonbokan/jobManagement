import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
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
import StatusChip from "../components/StatusChip";
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
      navigate("/");
    } catch (error) {
      console.error("Failed to delete application:", error);
    }
  };

  const handleEditSubmit = async (updatedData) => {
    try {
      const updatedApplication = await updateJobApplication(id, updatedData);
      setApplication(updatedApplication);
      setIsEditing(false);
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
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Position</TableCell>
            <TableCell>{application.position}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Company</TableCell>
            <TableCell>{application.company}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell>
              <StatusChip 
                text = {application.status}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Link</TableCell>
            <TableCell>
              <a
                href={application.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                {application.link}
              </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Application Date</TableCell>
            <TableCell>
              {new Date(application.applicationDate).toLocaleDateString()}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Interview Date</TableCell>
            <TableCell>
              {application.interviewDate
                ? new Date(application.interviewDate).toLocaleDateString()
                : "Not Set"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Description
      </Typography>
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          p: 2,
          borderRadius: 2,
          mb: 2,
        }}
      >
        <ReactMarkdown>{application.description || "No Description Provided"}</ReactMarkdown>
      </Box>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Notes
      </Typography>
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          p: 2,
          borderRadius: 2,
          mb: 4,
        }}
      >
        <ReactMarkdown>{application.notes || "No Notes Provided"}</ReactMarkdown>
      </Box>
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
        defaultValues={application}
      />
    </Box>
  );
};

export default JobApplicationDetailPage;