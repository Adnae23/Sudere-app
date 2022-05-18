/* eslint-disable no-console */
import axios from 'axios';
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ConnectedUser from './ConnectedUser';
import UserContext from '../../contexts/UserContext';
// import MyPassword from './MyPassword';

function DashboardLeft() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClick = async () => {
    await axios.get('http://localhost:5000/auth/logout', { withCredentials: true })
      .then(() => {
        setUser(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="dashboardLeft">
      <div className="dashboardLeft__title">
        <h1 className="dashboardLeft__title--vertical">SUDERE: DASHBOARD</h1>
      </div>
      <div className="dashboardLeft__user">
        <NavLink to="/commonPage"><button className="dashboardLeft__user__button--back" type="submit" label="back" /></NavLink>
        <ConnectedUser />
        <hr className="dashboardLeft__user__separator" />
        {/* <MyPassword /> */}
        <button onClick={handleClick} className="dashboardLeft__user__button--logout" type="button">Déconnexion</button>
      </div>
    </div>
  );
}

export default DashboardLeft;
