/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import SelectedUserContext from '../../contexts/SelectedUserContext';
import UpdateUserModifyButtonContext from '../../contexts/UpdateUserModifyButtonContext';
import UsertoUpdateContext from '../../contexts/UsertoUpdateContext';

function UserInformations() {
  const { selectedUser } = useContext(SelectedUserContext);
  const { unlockUpdate } = useContext(UpdateUserModifyButtonContext);
  const { setUserToUpdate } = useContext(UsertoUpdateContext);
  const [centers, setCenters] = useState([]);
  const access = ['admin', 'référent', 'utilisateur'];
  useEffect(() => {
    async function fetchCenters() {
      try {
        const result = await axios.get('http://localhost:5000/users/centers-list');
        setCenters([...result.data]);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchCenters();
  }, []);
  // const handleChangeEmail = (event) => {
  //   const user = {};
  //   user.email = event.target.value;
  //   props.setUserToUpdate(user);
  // };

  const handleChangeCenter = (event) => {
    const user = {};
    user.center = event.target.value;
    setUserToUpdate({ ...user });
  };

  const handleChangeProfile = (event) => {
    const user = {};
    user.access = event.target.value;
    setUserToUpdate({ ...user });
  };
  return (
    <div className="userInformations">
      {selectedUser && (
        <ul className="userInformations__list">
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Nom: '}</p>
            <p className="userInformations__list__item--right">{selectedUser.lastname}</p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Prénom: '}</p>
            <p className="userInformations__list__item--right">{selectedUser.firstname}</p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'CP: '}</p>
            <p className="userInformations__list__item--right">{selectedUser.id}</p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Email: '}</p>
            <p className="userInformations__list__item--right">
              {unlockUpdate ? (
                <input className="userInformations__list__item--right--input" type="text" defaultValue={selectedUser.email} />
              ) : selectedUser.email}
            </p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Établissement: '}</p>
            <p className="userInformations__list__item--right">
              {unlockUpdate ? (
                <select onChange={handleChangeCenter} className="userInformations__list__item--right--option">
                  <option className="userInformations__list__item--right--option" defaultValue={selectedUser.center}>{selectedUser.center}</option>
                  {centers.length !== 0 && centers.map((center) => selectedUser.center !== center.name && <option className="userInformations__list__item--right--option" key={center.id}>{center.name}</option>)}
                </select>
              ) : selectedUser.center}
            </p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Profile: '}</p>
            <p className="userInformations__list__item--right">
              {unlockUpdate ? (
                <select onChange={handleChangeProfile} className="userInformations__list__item--right--option">
                  <option className="userInformations__list__item--right--option" defaultValue={selectedUser.access}>{selectedUser.access}</option>
                  {access.map((profile) => selectedUser.access !== profile && <option key={profile}>{profile}</option>)}
                </select>
              ) : selectedUser.access}
            </p>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserInformations;
