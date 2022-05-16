import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

function MyInfos() {
  const { user } = useContext(UserContext);
  return (
    <div className="myInfos">
      {user
                && (
                <ul className="myInfos__list">
                  <li className="myInfos__list__item">
                    <p className="myInfos__list__item--left">{'Nom: '}</p>
                    <p className="myInfos__list__item--right">{user.lastname}</p>
                  </li>
                  <li className="myInfos__list__item">
                    <p className="myInfos__list__item--left">{'Prénom: '}</p>
                    <p className="myInfos__list__item--right">{user.firstname}</p>
                  </li>
                  <li className="myInfos__list__item">
                    <p className="myInfos__list__item--left">{'CP: '}</p>
                    <p className="myInfos__list__item--right">{user.cp}</p>
                  </li>
                  <li className="myInfos__list__item">
                    <p className="myInfos__list__item--left">{'Email: '}</p>
                    <p className="myInfos__list__item--right">{user.email}</p>
                  </li>
                  <li className="myInfos__list__item">
                    <p className="myInfos__list__item--left">{'Établissement: '}</p>
                    <p className="myInfos__list__item--right">{user.center}</p>
                  </li>
                  <li className="myInfos__list__item">
                    <p className="myInfos__list__item--left">{'Profil: '}</p>
                    <p className="myInfos__list__item--right">{user.profile}</p>
                  </li>
                </ul>
                )}
    </div>
  );
}

export default MyInfos;
