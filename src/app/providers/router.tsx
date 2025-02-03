import { AuthPage } from '@pages/auth';
import { ProfilePage } from '@pages/profile';
import { ReactNode } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to='/auth' replace />;
    }

    return children;
}

export const RouterProvider = () => {
    return (
        <BrowserRouter basename='/crypton'>
            <Routes>
                <Route
                    path='/auth'
                    element={<AuthPage />}
                />
                <Route
                    path='/'
                    element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}
                />
            </Routes>
        </BrowserRouter>
    )
}