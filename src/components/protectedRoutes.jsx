// src/components/protectedRoutes.jsx
import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom'; // or Redirect if you're using an older version of react-router-dom

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;