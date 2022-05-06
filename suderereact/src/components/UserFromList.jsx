/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import SelectedUserContext from '../contexts/SelectedUserContext';

function UserFromList(props) {
  const { setSelectedUser } = useContext(SelectedUserContext);

  const handleClick = () => {
    setSelectedUser(props);
    // console.log(props);
  };

  return (
    <div>
      <p onClick={handleClick}>
        {props.user.lastname}
        {' '}
        {props.user.firstname}
      </p>
    </div>
  );
}

export default UserFromList;
