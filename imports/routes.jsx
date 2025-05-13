import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './ui/pages/home/Home';
import SignIn from './ui/pages/signIn/SignIn';
import SignUp from './ui/pages/signUp/SignUp';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
