import React from 'react';
import UserForm from './UserForm';
import userImg from '../../assets/utilisateur.png';

function CreateUser() {
  return (
    <div className="createUser">
      <div className="createUser__illustration">
        <img src={userImg} className="createUser__illustration__img" alt="utilisateur" />
      </div>
      <div className="createUser__panel">
        <h5 className="createUser__panel__title">{'Formulaire de création d\'utilisateur'}</h5>
        <div className="createUser__panel__form">
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
