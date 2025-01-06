import React from "react";
import { Box, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        { label: "Dashboard", path: "/" },
        { label: "Statistics", path: "/stats" },
    ];

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: 180,
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                padding: 2,
                borderRight: "1px solid #e0e0e0",
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, fontFamily: "Roboto Condensed" }}>
                Logo
            </Typography>
            <List>
                {navItems.map((item, index) => (
                    <ListItemButton
                        key={index}
                        onClick={() => navigate(item.path)} // Navigate to the respective path
                        sx={{
                            borderRadius: 2,
                            mb: 1,
                        }}
                    >
                        <ListItemText
                            primary={item.label}
                            slotProps={{
                                primary: {
                                    sx: { fontFamily: "Roboto Condensed", fontSize: 18 },
                                },
                            }}
                        />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
};

export default Navbar;