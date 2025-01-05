import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StatusChip from "./StatusChip";

const JobTable = ({ applications, onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentApplication, setCurrentApplication] = useState(null);

  const handleMenuOpen = (event, application) => {
    setAnchorEl(event.currentTarget);
    setCurrentApplication(application);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentApplication(null);
  };

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
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.map((application) => (
            <TableRow
              key={application.id}
              sx={{
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
              onClick={() =>
                (window.location.href = `/application/${application.id}`)
              }
            >
              <TableCell>
                {application.applicationDate
                  ? new Date(application.applicationDate).toLocaleDateString()
                  : "N/A"}
              </TableCell>
              <TableCell>{application.position}</TableCell>
              <TableCell>{application.company}</TableCell>
              <TableCell>
                <StatusChip
                      text={application.status}
                    />
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={(event) => {
                    event.stopPropagation(); // Prevent row click from triggering navigation
                    handleMenuOpen(event, application);
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {/* <MenuItem
                    onClick={() => {
                      onEdit(currentApplication);
                      handleMenuClose();
                    }}
                  >
                    Edit
                  </MenuItem> */}
                  <MenuItem
                    onClick={() => {
                      onDelete(currentApplication.id);
                      handleMenuClose();
                    }}
                  >
                    Delete
                  </MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobTable;