import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "./Navbar";

const Layout = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(true);

    const toggleNavbar = () => {
        setIsNavbarOpen((prev) => !prev)
    };

    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            {isNavbarOpen && <Navbar />}

            {/* Menu Icon */}
            <IconButton
                onClick={toggleNavbar}
                sx={{
                    position: "fixed",
                    top: 16,
                    left: isNavbarOpen ? 192 : 16,
                    zIndex: 1300,
                    backgroundColor: "white",
                    border: "1px solid #ddd",
                    boxShadow: 2,
                }}
            >
                <MenuIcon />
            </IconButton>

            {/* Main Content */}
            <Box
                sx={{
                    flex: 1,
                    overflowY: "auto",
                    marginLeft: isNavbarOpen ? "40px" : "60px",
                    transition: "margin-left 0.3s",
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;