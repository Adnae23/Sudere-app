import React from 'react';
import MyInfos from './MyInfos';
import MyPassword from './MyPassword';

function MyProfile() {
  return (
    <div className="profile">
      <div className="profile__myProfile">
        <div className="profile__myProfile__top">
          <h5 className="profile__myProfile__top__title">Mes informations</h5>
          <div className="profile__myProfile__top__myInfos">
            <MyInfos />
          </div>
        </div>
        <div className="profile__myProfile__bottom">
          <h5 className="profile__myProfile__bottom__title">Changer mon mot de passe</h5>
          <div className="profile__myProfile__bottom__myPassword">
            <MyPassword />
          </div>
        </div>

      </div>
      <div className="profile__myCenter" />

    </div>
  );
}

export default MyProfile;
