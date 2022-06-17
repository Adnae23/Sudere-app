/* eslint-disable no-undef */
import React from 'react';
import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';

function Admin() {
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
