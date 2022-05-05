import React from 'react';
import UserInfos from './UserInfos';
import UserPassword from './UserPassword';

function DashboardLeft() {
  return (
    <div className="dashboardLeft">
      <div className="dashboardLeft_title" />
      <div className="dashboardLeft_user">
        <UserInfos />
        <UserPassword />
      </div>
    </div>
  );
}

export default DashboardLeft;
