/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import UpdatedUserContext from '../../contexts/UpdatedUserContext';
import CentersListContext from '../../contexts/CentersListContext';
import ProfilesListContext from '../../contexts/ProfilesListContext';

function DashboardRight() {
  const [isUpdated, setIsUpdated] = useState(false);
  const [centers, setCenters] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchCentersAndProfiles() {
      try {
        const centersList = await axios.get('http://localhost:5000/users/centers-list');
        setCenters([...centersList.data]);
      } catch (error) {
        console.error('Error:', error);
      }
      try {
        const profilesList = await axios.get('http://localhost:5000/users/profiles-list');
        setProfiles([...profilesList.data]);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchCentersAndProfiles();
  }, []);

  return (
    <UpdatedUserContext.Provider value={{ isUpdated, setIsUpdated }}>
      <CentersListContext.Provider value={{ centers, setCenters }}>
        <ProfilesListContext.Provider value={{ profiles, setProfiles }}>
          <div className="dashboardRight">
            <h2 className="dashboardRight__title">Gestion des utilisateurs</h2>
            <div className="dashboardRight__nav">
              <ul className="dashboardRight__nav__ul">
                <li><NavLink className={({ isActive }) => `dashboardRight__nav__ul__link${isActive ? '--active' : ''}`} to="/">Modifier utilisateur</NavLink></li>
                <li><NavLink className={({ isActive }) => `dashboardRight__nav__ul__link${isActive ? '--active' : ''}`} to="/addUser">Créer utilisateur</NavLink></li>
                <li><NavLink className={({ isActive }) => `dashboardRight__nav__ul__link${isActive ? '--active' : ''}`} to="/updateDb">Gérer Base de données</NavLink></li>
              </ul>
            </div>
            <div className="dashboardRight__outlet">
              <Outlet />
            </div>
          </div>
        </ProfilesListContext.Provider>
      </CentersListContext.Provider>
    </UpdatedUserContext.Provider>
  );
}

export default DashboardRight;
