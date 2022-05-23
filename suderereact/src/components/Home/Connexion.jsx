/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { decodeToken } from 'react-jwt';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';

function Connexion() {
  const [login, setLogin] = useState('');
  const { setUser } = useContext(UserContext);
  const object = {};
  const navigate = useNavigate();
  async function handleClick(event) {
    event.preventDefault();
    await axios.post('http://localhost:5000/auth/login', login, { withCredentials: true })
      .then((response) => {
        setUser(decodeToken(response.data));
        navigate('/CommonPage');
      })
      .catch((error) => {
        setLogin({ login: '', password: '' });
        console.log(error);
      });
  }
  const handleChange = (event) => {
    const key = event.target.id;
    object[key] = event.target.value;
    setLogin({ ...login, ...object });
  };

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
            <label className="form__content__login__id__label" htmlFor="id">Numéro de CP:</label>
            <input onChange={handleChange} value={login.login} id="login" className="form__content__login__id__input" type="text" />
          </div>
          <div className="form__content__login__password">
            <label className="form__content__login__password__label" htmlFor="password">Mot de passe:</label>
            <input onChange={handleChange} value={login.password} id="password" className="form__content__login__password__input" type="password" />
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
        <button onClick={handleClick} className="form__connexion__submit" type="submit">CONNEXION</button>
      </div>
    </form>

  );
}

export default Connexion;
