/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import UpdatedUserContext from '../../contexts/UpdatedUserContext';
import CentersListContext from '../../contexts/CentersListContext';
import ProfilesListContext from '../../contexts/ProfilesListContext';
import UserContext from '../../contexts/UserContext';

function DashboardRight() {
  const [isUpdated, setIsUpdated] = useState(false);
  const [dashboardRightTitle, setDashboardRightTitle] = useState('Gestion des utilisateurs');
  const [centers, setCenters] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const { user } = useContext(UserContext);

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
            <h2 className="dashboardRight__title">{dashboardRightTitle}</h2>
            <div className="dashboardRight__nav">
              <ul className="dashboardRight__nav__ul">
                <li><NavLink onClick={() => { setDashboardRightTitle('Gestion des utilisateurs'); }} className={({ isActive }) => `dashboardRight__nav__ul__link${isActive ? '--active' : ''}`} to="/parametres/">Modifier utilisateur</NavLink></li>
                <li><NavLink onClick={() => { setDashboardRightTitle('Gestion des utilisateurs'); }} className={({ isActive }) => `dashboardRight__nav__ul__link${isActive ? '--active' : ''}`} to="/parametres/addUser">Créer utilisateur</NavLink></li>
                {user.profile === 'ADMIN'
                && <li><NavLink onClick={() => { setDashboardRightTitle('Gestion de la base de données'); }} className={({ isActive }) => `dashboardRight__nav__ul__link${isActive ? '--active' : ''}`} to="/parametres/updateDb">Gérer Base de données</NavLink></li>}
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
