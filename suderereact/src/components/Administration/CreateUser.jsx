import React from 'react';
import UserForm from './UserForm';

function CreateUser() {
  return (
    <div className="createUser">
      <div className="createUser__illustration">
        <p>illustration</p>
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
