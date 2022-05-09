/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import SelectedUserContext from '../../contexts/SelectedUserContext';
import UpdateUserModifyButtonContext from '../../contexts/UpdateUserModifyButtonContext';
import UpdateButtons from './UpdateButtons';
import UserInformations from './UserInformations';
import UserList from './UserList';

function UpdateUser() {
  const [selectedUser, setSelectedUser] = useState({});
  const [unlockUpdate, setUnlockUpdate] = useState(false);

  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      <UpdateUserModifyButtonContext.Provider value={{ unlockUpdate, setUnlockUpdate }}>
        <div className="updateUser">
          <div className="updateUser__userList">
            <UserList />
          </div>
          <div className="updateUser__userInformations">
            <div className="updateUser__userInformations__top">
              <UserInformations />
              {unlockUpdate && (
                <div className="updateUser__userInformations__top__buttons">
                  <button className="updateUser__userInformations__top__buttons__validate" type="button">Valider les modifications</button>
                  <button className="updateUser__userInformations__top__buttons__delete" type="button">{'Supprimer l\'utilisateur'}</button>
                </div>
              )}
            </div>
            <div className="updateUser__userInformations__bottom">
              <UpdateButtons />
            </div>
          </div>
        </div>
      </UpdateUserModifyButtonContext.Provider>
    </SelectedUserContext.Provider>
  );
}

export default UpdateUser;
