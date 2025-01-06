import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import JobTable from "../components/JobTable";
import CustomButton from "../components/CustomButton";
import JobApplicationModal from "../components/JobApplicationModal";
import {
  fetchJobApplications,
  createJobApplication,
  updateJobApplication,
  deleteJobApplication,
} from "../api/jobApplicationApi";

const HomePage = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentApplication, setCurrentApplication] = useState(null);

  useEffect(() => {
    const loadApplications = async () => {
      try {
        const data = await fetchJobApplications();
        setApplications(data);
        setFilteredApplications(data);
      } catch (error) {
        console.error("Failed to fetch job applications:", error);
      }
    };
    loadApplications();
  }, []);

  const handleSearch = (query) => {
    const filtered = applications.filter((app) =>
      app.position.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredApplications(filtered);
  };

  const handleAddApplication = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const newApplication = await createJobApplication(formData);
      setApplications((prev) => [...prev, newApplication]);
      setFilteredApplications((prev) => [...prev, newApplication]);
      handleModalClose();
    } catch (error) {
      console.error("Failed to create a new job application:", error);
    }
  };

  const handleEdit = (application) => {
    setCurrentApplication(application);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setCurrentApplication(null);
  };

  const handleEditSubmit = async (updatedData) => {
    try {
      const updatedApplication = await updateJobApplication(
        currentApplication.id,
        updatedData
      );
      setApplications((prev) =>
        prev.map((app) =>
          app.id === updatedApplication.id ? updatedApplication : app
        )
      );
      setFilteredApplications((prev) =>
        prev.map((app) =>
          app.id === updatedApplication.id ? updatedApplication : app
        )
      );

      handleEditModalClose();
    } catch (error) {
      console.error("Failed to update job application:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteJobApplication(id);
      setApplications((prev) => prev.filter((app) => app.id !== id));
      setFilteredApplications((prev) => prev.filter((app) => app.id !== id));
    } catch (error) {
      console.error("Failed to delete job application:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ flex: 1, padding: 4, overflowY: "auto" }}>
        <SearchBar onSearch={handleSearch} />
        <CustomButton
          text="+ Add Job Application"
          onClick={handleAddApplication}
          sx={{ borderRadius: 2, textTransform: "none", mb: 3 }}
        />

        <JobTable
          applications={filteredApplications}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Box>

      <JobApplicationModal
        open={modalOpen}
        onClose={handleModalClose}
        onSubmit={handleFormSubmit}
      />

      {currentApplication && (
        <JobApplicationModal
          open={editModalOpen}
          onClose={handleEditModalClose}
          onSubmit={handleEditSubmit}
          defaultValues={currentApplication}
        />
      )}
    </Box>
  );
};

export default HomePage;