import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import JobTable from "../components/JobTable";
import CustomButton from "../components/CustomButton";
import JobApplicationModal from "../components/JobApplicationModal";
import { fetchJobApplications, createJobApplication } from "../api/jobApplicationApi";

const HomePage = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadApplications = async () => {
      const data = await fetchJobApplications();
      setApplications(data);
      setFilteredApplications(data);
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
    setModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setModalOpen(false); // Close the modal
  };

  const handleFormSubmit = async (formData) => {
    try {
      const newApplication = await createJobApplication(formData);
      setApplications((prev) => [...prev, newApplication]); // Update the list of applications
      setFilteredApplications((prev) => [...prev, newApplication]); // Update filtered list
      handleModalClose();
    } catch (error) {
      console.error("Failed to create a new job application:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ flex: 1, padding: 4, overflowY: "auto" }}>
        <SearchBar onSearch={handleSearch} />
        <CustomButton
          text='+ Add Job Application'
          onClick={handleAddApplication}
          sx={{ borderRadius: 2, textTransform: "none", mb: 3 }}
        />
        <JobTable applications={filteredApplications} />
      </Box>

      {/* Add Job Application Modal */}
      <JobApplicationModal
        open={modalOpen}
        onClose={handleModalClose}
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
};

export default HomePage;