import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  // If not loading, and user is not found or is not an admin, redirect to login
  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  // If user is an admin, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;