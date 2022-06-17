import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

function ConnectedUser() {
  const { user } = useContext(UserContext);

  return (
    <div className="userInfos">
      <ul className="userInfos__list">
        <li className="userInfos__list__item">
          {user.firstname}
          {' '}
          {user.lastname}
        </li>
        <li className="userInfos__list__item">{user.cp}</li>
        {user.center !== 'aucun'
        && <li className="userInfos__list__item">{user.center}</li>}
        <li className="userInfos__list__item">{user.profile}</li>
      </ul>
    </div>
  );
}

export default ConnectedUser;
