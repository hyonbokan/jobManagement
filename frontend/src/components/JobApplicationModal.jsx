import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import ApplicationStatus from "../enums/ApplicationStatus";

const JobApplicationModal = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    status: ApplicationStatus.APPLIED,
    applicationDate: "",
    interviewDate: "",
    link: "",
    description: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      position: "",
      company: "",
      status: ApplicationStatus.APPLIED,
      applicationDate: "",
      interviewDate: "",
      link: "",
      description: "",
      notes: "",
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          maxHeight: "80vh",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          overflow: "auto", // enable scrolling
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Add Job Application
        </Typography>
        <TextField
          required
          fullWidth
          label="Position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          required
          fullWidth
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          required
          fullWidth
          label="Link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          select
          fullWidth
          label="Status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          sx={{ mb: 2 }}
        >
          {Object.values(ApplicationStatus).map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          label="Application Date"
          name="applicationDate"
          type="date"
          value={formData.applicationDate}
          onChange={handleChange}
          slotProps={{
            inputLabel: { shrink: true },
          }}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Interview Date"
          name="interviewDate"
          type="date"
          value={formData.interviewDate}
          onChange={handleChange}
          slotProps={{
            inputLabel: { shrink: true },
          }}
          in
          sx={{ mb: 2 }}
        />
        <TextField
          required
          fullWidth
          multiline
          label="Description"
          name="description"
          rows={8}
          value={formData.description}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Notes"
          name="notes"
          multiline
          rows={8}
          value={formData.notes}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" color="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!formData.position || !formData.company}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default JobApplicationModal;