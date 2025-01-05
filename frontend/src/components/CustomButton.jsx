import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ text, size = "medium", onClick, sx = {}, ...props }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size={size}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        textTransform: "none",
        ...sx,
      }}
      {...props} // Pass additional props like `startIcon`, `endIcon`
    >
      {text}
    </Button>
  );
};

export default CustomButton;