import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Home from '../pages/StudDashboard';
import AboutStudents from '../pages/About';
import Subjects from '../pages/StudDashboard/Subjects';


export default function AuthRoutes() {
    return (
        <Routes>
            <Route path='Teacher' element={<Dashboard />} />
            <Route path='home' element={<Home />} />
            <Route path='a-students' element={<AboutStudents />} />
            <Route path='subjects' element={<Subjects />} />
        </Routes>
    )
}