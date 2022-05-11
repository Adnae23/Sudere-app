/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import React, { useState } from 'react';
import SelectedUserContext from '../../contexts/SelectedUserContext';
import UpdateUserModifyButtonContext from '../../contexts/UpdateUserModifyButtonContext';
import UsertoUpdateContext from '../../contexts/UsertoUpdateContext';
import UpdateButtons from './UpdateButtons';
import UserInformations from './UserInformations';
import UserList from './UserList';

function UpdateUser() {
  const [selectedUser, setSelectedUser] = useState();
  const [unlockUpdate, setUnlockUpdate] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState();

  async function handleClickUpdate() {
    const user = {};
    user.access = selectedUser.access;
    user.center = selectedUser.center;
    user.firstname = selectedUser.firstname;
    user.lastname = selectedUser.lastname;
    user.id = selectedUser.id;
    setUserToUpdate({ ...user, ...userToUpdate });
    const response = await axios.put('http://localhost:5000/users/', { ...user, ...userToUpdate });
    console.log(response);
  }
  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      <UpdateUserModifyButtonContext.Provider value={{ unlockUpdate, setUnlockUpdate }}>
        <UsertoUpdateContext.Provider value={{ userToUpdate, setUserToUpdate }}>
          <div className="updateUser">
            <div className="updateUser__userList">
              <UserList />
            </div>
            <div className="updateUser__userInformations">
              <div className="updateUser__userInformations__top">
                <UserInformations />
                {unlockUpdate && (
                  <div className="updateUser__userInformations__top__buttons">
                    <button onClick={handleClickUpdate} className="updateUser__userInformations__top__buttons__validate" type="submit">Valider les modifications</button>
                    <button className="updateUser__userInformations__top__buttons__delete" type="button">{'Supprimer l\'utilisateur'}</button>
                  </div>
                )}
              </div>
              <div className="updateUser__userInformations__bottom">
                <UpdateButtons />
              </div>
            </div>
          </div>
        </UsertoUpdateContext.Provider>
      </UpdateUserModifyButtonContext.Provider>
    </SelectedUserContext.Provider>

  );
}

export default UpdateUser;
