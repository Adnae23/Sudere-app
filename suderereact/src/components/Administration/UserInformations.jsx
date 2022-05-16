/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React, { useContext } from 'react';
import SelectedUserContext from '../../contexts/SelectedUserContext';
import UpdateUserModifyButtonContext from '../../contexts/UpdateUserModifyButtonContext';
import UsertoUpdateContext from '../../contexts/UsertoUpdateContext';
import CentersListContext from '../../contexts/CentersListContext';
import ProfilesListContext from '../../contexts/ProfilesListContext';
import teamImg from '../../assets/team.jpg';

function UserInformations() {
  const { selectedUser, setSelectedUser } = useContext(SelectedUserContext);
  const { unlockUpdate } = useContext(UpdateUserModifyButtonContext);
  const { setUserToUpdate } = useContext(UsertoUpdateContext);
  const { centers } = useContext(CentersListContext);
  const { profiles } = useContext(ProfilesListContext);

  const handleChangeCenter = (event) => {
    const user = {};
    user.center = event.target.value;
    setUserToUpdate({ ...user });
    setSelectedUser({ ...selectedUser, ...user });
  };

  const handleChangeProfile = (event) => {
    const user = {};
    user.profile = event.target.value;
    setUserToUpdate({ ...user });
    setSelectedUser({ ...selectedUser, ...user });
  };
  return (
    <div className="userInformations">
      {selectedUser ? (
        <ul className="userInformations__list">
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Nom: '}</p>
            <p className="userInformations__list__item--right">{selectedUser.lastname}</p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Prénom: '}</p>
            <p className="userInformations__list__item--right">{selectedUser.firstname}</p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'CP: '}</p>
            <p className="userInformations__list__item--right">{selectedUser.id}</p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Email: '}</p>
            <p className="userInformations__list__item--right">
              {unlockUpdate ? (
                <input className="userInformations__list__item--right--input" type="text" defaultValue={selectedUser.email} />
              ) : selectedUser.email}
            </p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Établissement: '}</p>
            <p className="userInformations__list__item--right">
              {unlockUpdate ? (
                <select onChange={handleChangeCenter} className="userInformations__list__item--right--option">
                  <option className="userInformations__list__item--right--option" defaultValue={selectedUser.center}>{selectedUser.center}</option>
                  {centers.length !== 0 && centers.map((center) => selectedUser.center !== center.name && <option className="userInformations__list__item--right--option" key={center.id}>{center.name}</option>)}
                </select>
              ) : selectedUser.center}
            </p>
          </li>
          <li className="userInformations__list__item">
            <p className="userInformations__list__item--left">{'Profil: '}</p>
            <p className="userInformations__list__item--right">
              {unlockUpdate ? (
                <select onChange={handleChangeProfile} className="userInformations__list__item--right--option">
                  <option className="userInformations__list__item--right--option" defaultValue={selectedUser.profile}>{selectedUser.profile}</option>
                  {profiles.length !== 0 && profiles.map((profile) => selectedUser.profile !== profile.name && <option key={profile.id}>{profile.name}</option>)}
                </select>
              ) : selectedUser.profile}
            </p>
          </li>
        </ul>
      ) : (
        <div className="userInformations__notSelected">
          <img className="userInformations__notSelected__img" src={teamImg} alt="équipe" />
          <p className="userInformations__notSelected__info">Sélectionnez un utilisateur dans la liste</p>
        </div>
      )}
    </div>
  );
}

export default UserInformations;
