/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import SelectedUserContext from '../../contexts/SelectedUserContext';
import UpdateUserModifyButtonContext from '../../contexts/UpdateUserModifyButtonContext';
import UsertoUpdateContext from '../../contexts/UsertoUpdateContext';
import UpdatedUserContext from '../../contexts/UpdatedUserContext';
import UpdateButtons from './UpdateButtons';
import UserInformations from './UserInformations';
import UserList from './UserList';

function UpdateUser() {
  const [selectedUser, setSelectedUser] = useState();
  const [unlockUpdate, setUnlockUpdate] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState();
  const { isUpdated, setIsUpdated } = useContext(UpdatedUserContext);

  async function handleClickUpdate() {
    const user = {};
    user.profile = selectedUser.profile;
    user.center = selectedUser.center;
    user.firstname = selectedUser.firstname;
    user.lastname = selectedUser.lastname;
    user.id = selectedUser.id;
    setUserToUpdate({ ...user, ...userToUpdate });
    const response = await axios.put('http://localhost:5000/users/', { ...user, ...userToUpdate }, { withCredentials: true });
    console.log(response);
    setIsUpdated(!isUpdated);
  }
  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      <UpdateUserModifyButtonContext.Provider value={{ unlockUpdate, setUnlockUpdate }}>
        <UsertoUpdateContext.Provider value={{ userToUpdate, setUserToUpdate }}>
          <div className="updateUser">
            <div className="updateUser__left">
              <h5 className="updateUser__left__title">Liste des utilisateurs</h5>
              <div className="updateUser__left__userList">
                <UserList />
              </div>
            </div>
            <div className="updateUser__userInformations">
              <div className="updateUser__userInformations__right">
                <h5 className="updateUser__userInformations__right__title">Profil utlisateur</h5>
                <div className="updateUser__userInformations__right__top">
                  <UserInformations />
                  {unlockUpdate && (
                    <div className="updateUser__userInformations__right__top__buttons">
                      <button onClick={handleClickUpdate} className="updateUser__userInformations__right__top__buttons__validate" type="submit">Valider les modifications</button>
                      <button className="updateUser__userInformations__right__top__buttons__delete" type="button">{'Supprimer l\'utilisateur'}</button>
                    </div>
                  )}
                </div>
                <div className="updateUser__userInformations__right__bottom">
                  <UpdateButtons />
                </div>
              </div>
            </div>
          </div>
        </UsertoUpdateContext.Provider>
      </UpdateUserModifyButtonContext.Provider>
    </SelectedUserContext.Provider>

  );
}

export default UpdateUser;
