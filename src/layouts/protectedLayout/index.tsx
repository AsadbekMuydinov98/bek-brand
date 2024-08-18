import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getItem } from '../../helpers/persistance-storage';

const useAuth = () => {
  const user = getItem('accessToken');
  return !!user;
};

const ProtectedLayout: React.FC = () => {
  const isAuthenticated = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
