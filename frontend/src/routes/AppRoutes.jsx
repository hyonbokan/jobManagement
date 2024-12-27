import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Layout from '../components/Layout';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Routes wrapped with Layout */}
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<HomePage />} /> {/* Fallback */}
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;