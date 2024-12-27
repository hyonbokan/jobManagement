import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
// import { Link } from 'react-router-dom'

const Navbar = () => {
    const navItems = ["Dashboard", "Applications"];

    return (
        <Box
            sx={{
                width: 240,
                height: "100vh",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                padding: 2,
                borderRadius: "1px solid #e0e0e0",
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, fontFamily: "Roboto Condensed"}}>
                Logo
            </Typography>
            <List>
                {navItems.map((item, index) => (
                    <ListItemButton key={index} sx={{ borderRadius: 2, mb: 1, }}>
                        <ListItemText primary={item}
                        slotProps={{
                            primary: {
                                sx: {  fontFamily: "Roboto Condensed" }
                            },
                        }}/>
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
};

export default Navbar;