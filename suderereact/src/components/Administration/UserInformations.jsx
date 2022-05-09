/* eslint-disable max-len */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import SelectedUserContext from '../../contexts/SelectedUserContext';
import UpdateUserModifyButtonContext from '../../contexts/UpdateUserModifyButtonContext';

function UserInformations() {
  const { selectedUser } = useContext(SelectedUserContext);
  const { unlockUpdate } = useContext(UpdateUserModifyButtonContext);
  const [centers, setCenters] = useState([]);

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
  return (
    <div className="userInformations">
      {selectedUser.user && (
        <ul className="userInformations__list">
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Nom: '}</p>
            <p className="userInformations__list__item--right">{selectedUser.user.lastname}</p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Prénom: '}</p>
            <p className="userInformations__list__item--right">{selectedUser.user.firstname}</p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'CP: '}</p>
            <p className="userInformations__list__item--right">{selectedUser.user.cp}</p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Email: '}</p>
            <p className="userInformations__list__item--right">
              {unlockUpdate ? (
                <input className="userInformations__list__item--right--input" type="text" defaultValue={selectedUser.user.email} />
              ) : selectedUser.user.email}
            </p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Établissement: '}</p>
            <p className="userInformations__list__item--right">
              {unlockUpdate ? (
                <select className="userInformations__list__item--right--option">
                  <option className="userInformations__list__item--right--option" selected="selected">{selectedUser.user.center}</option>
                  {centers.length !== 0 && centers.map((center) => selectedUser.user.center !== center.name && <option className="userInformations__list__item--right--option" key={center.id}>{center.name}</option>)}
                </select>
              ) : selectedUser.user.center}
            </p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Profile: '}</p>
            <p className="userInformations__list__item--right">
              {unlockUpdate ? (
                <select className="userInformations__list__item--right--option">
                  <option className="userInformations__list__item--right--option" selected="selected">{selectedUser.user.access}</option>
                </select>
              ) : selectedUser.user.access}
            </p>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserInformations;
