import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';
import UserContext from '../../contexts/UserContext';

function Admin() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const redirect = () => navigate('/connexion');
    if (user === false) {
      redirect();
    }
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <DashboardLeft />
      </div>
      <div className="dashboard__right">
        <DashboardRight />
      </div>
    </div>
  );
}

export default Admin;
