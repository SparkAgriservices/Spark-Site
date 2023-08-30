import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useClerk();

  return (
    <Route
      {...rest}
      element={
        authenticated ? <Component /> : <Navigate to="/login" replace />
      }
    />
  );
};

export default ProtectedRoute;
