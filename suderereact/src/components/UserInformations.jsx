import React, { useContext } from 'react';
import SelectedUserContext from '../contexts/SelectedUserContext';

function UserInformations() {
  const { selectedUser } = useContext(SelectedUserContext);
  return (
    <div className="userInformations">
      { selectedUser.user && selectedUser.user.firstname }
    </div>
  );
}

export default UserInformations;
