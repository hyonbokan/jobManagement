import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from "@mui/material";
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
    return (
        <Router>
            <Box sx={{ display: 'flex', height: '100vh' }}>
                <Navbar />
                <Box sx={{ flex: 1, overflow: "auto" }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
};

export default AppRoutes;