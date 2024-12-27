import React from "react";
import { Button } from "@mui/material";

const AddButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      sx={{ borderRadius: 2, textTransform: "none", mb: 3 }}
    >
      + Add Job Application
    </Button>
  );
};

export default AddButton;