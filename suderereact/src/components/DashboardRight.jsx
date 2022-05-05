import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function DashboardRight() {
  return (
    <div className="dashboardRight">
      <h2 className="dashboardRight__title">Gestion des utilisateurs</h2>
      <ul className="dashboardRight__nav">
        <li><NavLink className={({ isActive }) => `dashboardRight__nav__link${isActive ? '--active' : ''}`} to="/updateUser">Modifier utilisateur</NavLink></li>
        <li><NavLink className={({ isActive }) => `dashboardRight__nav__link${isActive ? '--active' : ''}`} to="/addUser">Créer utilisateur</NavLink></li>
        <li><NavLink className={({ isActive }) => `dashboardRight__nav__link${isActive ? '--active' : ''}`} to="/updateDb">Gérer Base de données</NavLink></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default DashboardRight;
