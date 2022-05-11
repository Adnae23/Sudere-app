/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function UserPassword() {
  return (
    <div className="userPassword">
      <h5 className="userPassword__title">Changer mot de passe:</h5>
      <form className="userPassword__form">
        <div className="userPassword__form__inputs">
          <div className="userPassword__form__inputs__line">
            <label htmlFor="previous">Ancien:</label>
            <input className="userPassword__form__inputs__line__input" id="previous" type="text" />
          </div>
          <div className="userPassword__form__inputs__line">
            <label htmlFor="new">Nouveau:</label>
            <input className="userPassword__form__inputs__line__input" id="new" type="text" />
          </div>
          <div className="userPassword__form__inputs__line">
            <label htmlFor="confirm">Confirmer:</label>
            <input className="userPassword__form__inputs__line__input" id="confirm" type="text" />
          </div>
        </div>
        <button className="userPassword__form__button" type="submit">Valider</button>
      </form>

    </div>
  );
}

export default UserPassword;
