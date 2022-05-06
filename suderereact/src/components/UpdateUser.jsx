/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import SelectedUserContext from '../contexts/SelectedUserContext';
import UserInformations from './UserInformations';
import UserList from './UserList';

function UpdateUser() {
  const [selectedUser, setSelectedUser] = useState({});

  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      <div className="updateUser">
        <div className="updateUser__userList">
          <UserList />
        </div>
        <div className="updateUser__userInformations">
          <UserInformations />
        </div>
      </div>
    </SelectedUserContext.Provider>
  );
}

export default UpdateUser;
