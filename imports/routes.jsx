import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { CircularProgress, Box, Typography } from '@mui/material';
import Home from './ui/pages/home/Home';
import SignIn from './ui/pages/signIn/SignIn';
import SignUp from './ui/pages/signUp/SignUp';
import NotFound from './ui/pages/notFound/NotFound';
import DashboardLayoutAccount from './ui/components/sidebar/Sidebar';

import Dashboard from './ui/pages/dashboard/Dashboard';
import TasksList from './ui/pages/tasksList/TasksList';
import UserProfile from './ui/pages/userProfile/UserProfile';
import AddTasks from './ui/pages/addTasks/AddTasks';
import EditTasks from './ui/pages/editTasks/EditTasks';

const ProtectedRoute = ({ children }) => {
    const { user, isLoading, error } = useTracker(() => {
        const handler = Meteor.subscribe('currentUserData');
        return {
            user: Meteor.user(),
            isLoading: !handler.ready(),
            error: handler.ready() || !Meteor.status().connected ? null : 'Não foi possível conectar ao servidor',
        };
    }, []);

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: 'var(--body-color)',
                }}
                role="status"
                aria-label="Carregando status de autenticação"
            >
                <CircularProgress size={60} thickness={4} sx={{ color: 'var(--color-accent)' }} />
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Carregando...
                </Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }

    return user ? children : <Navigate to="/login" replace state={{ message: 'Por favor, faça login' }} />;
};

const PublicRoute = ({ children }) => {
    const { user } = useTracker(() => ({
        user: Meteor.user(),
    }));
    return user ? <Navigate to="/dashboard" replace /> : children;
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<PublicRoute><SignIn /></PublicRoute>} />
                <Route path="/register" element={<PublicRoute><SignUp /></PublicRoute>} />
                <Route path="/dashboard" element={<ProtectedRoute><DashboardLayoutAccount /></ProtectedRoute>}>
                    <Route index element={<Dashboard />} />
                    <Route path="tasks" element={<TasksList />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="add-tasks" element={<AddTasks />} />
                </Route>
                <Route path="/add-tasks" element={<ProtectedRoute><AddTasks /></ProtectedRoute>} />
                <Route path="/edit-tasks/:id" element={<ProtectedRoute><EditTasks /></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;