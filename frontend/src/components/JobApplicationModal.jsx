import React, { useState, useEffect } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import ApplicationStatus from "../enums/ApplicationStatus";

const JobApplicationModal = ({ open, onClose, onSubmit, defaultValues = {} }) => {
  const initialFormData = {
    position: defaultValues.position || "",
    company: defaultValues.company || "",
    status: defaultValues.status || ApplicationStatus.APPLIED,
    applicationDate: defaultValues.applicationDate
      ? defaultValues.applicationDate.split("T")[0] // Ensure correct format
      : "",
    interviewDate: defaultValues.interviewDate
      ? defaultValues.interviewDate.split("T")[0]
      : "",
    link: defaultValues.link || "",
    description: defaultValues.description || "",
    notes: defaultValues.notes || "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (open) {
      // Avoid unnecessary updates if data hasn't changed
      setFormData((prevFormData) => {
        const newFormData = {
          position: defaultValues.position || "",
          company: defaultValues.company || "",
          status: defaultValues.status || ApplicationStatus.APPLIED,
          applicationDate: defaultValues.applicationDate
            ? defaultValues.applicationDate.split("T")[0]
            : "",
          interviewDate: defaultValues.interviewDate
            ? defaultValues.interviewDate.split("T")[0]
            : "",
          link: defaultValues.link || "",
          description: defaultValues.description || "",
          notes: defaultValues.notes || "",
        };

        // Only update state if there's a difference
        return JSON.stringify(prevFormData) === JSON.stringify(newFormData)
          ? prevFormData
          : newFormData;
      });
    }
  }, [defaultValues, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
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
          overflowY: "auto",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          {defaultValues.position ? "Edit Job Application" : "Add Job Application"}
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
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Notes"
          name="notes"
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