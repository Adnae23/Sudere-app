/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import SelectedUserContext from '../../contexts/SelectedUserContext';
import UpdateUserModifyButtonContext from '../../contexts/UpdateUserModifyButtonContext';

function UserFromList(props) {
  const { setSelectedUser } = useContext(SelectedUserContext);
  const { setUnlockUpdate } = useContext(UpdateUserModifyButtonContext);

  const handleClick = () => {
    setSelectedUser(props.user);
    setUnlockUpdate(false);
    // console.log(props);
  };

  return (
    <div className="userFromList">
      <button className="userFromList__user" type="button" onKeyPress={handleClick} onClick={handleClick}>
        {props.user.lastname}
        {' '}
        {props.user.firstname}
      </button>
    </div>
  );
}

export default UserFromList;
