import React from 'react';
import UserInfos from './UserInfos';
import UserPassword from './UserPassword';

function DashboardLeft() {
  return (
    <div className="dashboardLeft">
      <div className="dashboardLeft__title">
        <h1>SUDERE: DASHBOARD</h1>
      </div>
      <div className="dashboardLeft__user">
        <UserInfos />
        <hr className="dashboardLeft__user__separator" />
        <UserPassword />
      </div>
    </div>
  );
}

export default DashboardLeft;
