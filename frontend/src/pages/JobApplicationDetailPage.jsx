import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { fetchJobApplicationById, deleteJobApplication } from "../api/jobApplicationApi";

const JobApplicationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);

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
    <Box sx={{ padding: 4 }}>
      <Card
        sx={{
          maxWidth: 600,
          margin: "auto",
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
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
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Position:</strong> {application.position}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Company:</strong> {application.company}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Status:</strong> {application.status}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Application Date:</strong>{" "}
            {new Date(application.applicationDate).toLocaleDateString()}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Interview Date:</strong>{" "}
            {application.interviewDate
              ? new Date(application.interviewDate).toLocaleDateString()
              : "Not Set"}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Description:</strong>{" "}
            {application.description ? application.description : "No Into Provided"}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Notes:</strong>{" "}
            {application.notes ? application.notes : "No Notes Provided"}
          </Typography>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              onClick={() => navigate(`/applications/edit/${id}`)}
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobApplicationDetailPage;