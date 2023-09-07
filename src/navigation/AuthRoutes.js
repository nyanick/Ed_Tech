import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import frontendUrl from '../urls/frontendUrl';
import Login from '../pages/Auth/Login';
import AdminSignUp from '../pages/Auth/AdminSignUp';
import TeacherSignUp from '../pages/Auth/TsignUp';
import StudentSignUp from '../pages/Auth/StudSignUp';

export default function AuthRoutes() {
    return (
        <Routes>
            {/* <Route path={frontendUrl.HOME.SELF} element={<Home />} /> */}
            <Route path='/' element={<Dashboard />} />
            <Route path='login'element={<Login/>} />
            <Route path='a-signUp'element={<AdminSignUp/>} />
            <Route path='t-signUp'element={<TeacherSignUp/>} />
            <Route path='s-signUp'element={<StudentSignUp/>} />
        </Routes>
    )
}