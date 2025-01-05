import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Layout from '../components/Layout';
import StatsPage from '../pages/StatsPage';
import JobApplicationDetailPage from '../pages/JobApplicationDetailPage'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<HomePage />} />
                    <Route path='/stats' element={<StatsPage />} />
                    <Route path="/application/:id" element={<JobApplicationDetailPage />}/>
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;