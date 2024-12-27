import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import JobTable from "../components/JobTable";
import { fetchJobApplications } from "../api/jobApplicationApi";

const HomePage = () => {
    const [applications, setApplications] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState([]);
  
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
      // Placeholder for adding application logic
      console.log("Add new application clicked!");
    };
  
    return (
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box sx={{ flex: 1, padding: 4, overflowY: "auto" }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Job Applications
          </Typography>
          <SearchBar onSearch={handleSearch} />
          <AddButton onClick={handleAddApplication} />
          <JobTable applications={filteredApplications} />
        </Box>
      </Box>
    );
  };
  
  export default HomePage;