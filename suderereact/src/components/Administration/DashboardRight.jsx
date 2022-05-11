import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function DashboardRight() {
  return (
    <div className="dashboardRight">
      <h2 className="dashboardRight__title">Gestion des utilisateurs</h2>
      <div className="dashboardRight__nav">
        <ul className="dashboardRight__nav__ul">
          <li><NavLink className={({ isActive }) => `dashboardRight__nav__ul__link${isActive ? '--active' : ''}`} to="/admin">Modifier utilisateur</NavLink></li>
          <li><NavLink className={({ isActive }) => `dashboardRight__nav__ul__link${isActive ? '--active' : ''}`} to="/admin/addUser">Créer utilisateur</NavLink></li>
          <li><NavLink className={({ isActive }) => `dashboardRight__nav__ul__link${isActive ? '--active' : ''}`} to="/admin/updateDb">Gérer Base de données</NavLink></li>
        </ul>
      </div>
      <div className="dashboardRight__outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardRight;
