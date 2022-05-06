/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Connexion() {
  return (
    <form className="form">
      <div className="form__home">
        <NavLink to="/">
          <button type="button" className="form__home__btn" label="retour" />
        </NavLink>
      </div>
      <div className="form__content">
        <div className="form__content__login">
          <div className="form__content__login__id">
            <label className="form__content__login__id__label" htmlFor="Numéro__de__CP">Numéro de CP:</label>
            <input className="form__content__login__id__input" type="text" />
          </div>
          <div className="form__content__login__password">
            <label className="form__content__login__password__label" htmlFor="">Mot de passe:</label>
            <input className="form__content__login__password__input" type="password" />
          </div>
          <div className="form__content__login__lostpassword">
            <button className="form__content__login__lostpassword__submit" type="button">Mot de passe oublié</button>
          </div>
        </div>
        <div className="form__content__picture">
          <img className="form__content__picture__img" src="./pictures/logo/team.jpg" alt="team" />
        </div>
      </div>
      <div className="form__connexion">
        <button className="form__connexion__submit" type="button">CONNEXION</button>
      </div>
    </form>

  );
}

export default Connexion;
