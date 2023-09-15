import React from "react";
import { Route, Routes } from "react-router-dom";
import frontendUrl from "../urls/frontendUrl";
import Login from '../pages/Auth/Login';
import AdminSignUp from '../pages/Auth/AdminSignUp';
import TeacherSignUp from '../pages/Auth/TsignUp';
import StudentSignUp from '../pages/Auth/StudSignUp';

function UnAuthRoutes() {
    return (
        <Routes>
            <Route path='/'element={<Login/>} />
            <Route path='a-signUp'element={<AdminSignUp/>} />
            <Route path='t-signUp'element={<TeacherSignUp/>} />
            <Route path='s-signUp'element={<StudentSignUp/>} />
        </Routes>
    );
}

export default UnAuthRoutes;