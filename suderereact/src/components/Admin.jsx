import React from 'react';
import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';

function Admin() {
  return (
    <div className="dashboard">
      <DashboardLeft className="dashboard_left" />
      <DashboardRight className="dashboard_right" />
    </div>
  );
}

export default Admin;
