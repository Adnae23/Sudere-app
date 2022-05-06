import React from 'react';
import { NavLink } from 'react-router-dom';
import ConnectedUser from './ConnectedUser';
import UserPassword from './UserPassword';

function DashboardLeft() {
  return (
    <div className="dashboardLeft">
      <div className="dashboardLeft__title">
        <h1 className="dashboardLeft__title--vertical">SUDERE: DASHBOARD</h1>
      </div>
      <div className="dashboardLeft__user">
        <NavLink to="/"><button className="dashboardLeft__user__button--back" type="submit" label="back" /></NavLink>
        <ConnectedUser />
        <hr className="dashboardLeft__user__separator" />
        <UserPassword />
        <button className="dashboardLeft__user__button--logout" type="submit">Déconnexion</button>
      </div>
    </div>
  );
}

export default DashboardLeft;
