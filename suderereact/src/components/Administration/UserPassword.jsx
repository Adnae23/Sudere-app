/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';

function UserPassword() {
  const [password, setPassword] = useState('');
  const [matching, setMatching] = useState(true);
  // const [wrong, setWrong] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.new !== password.confirm) {
      setMatching(false);
    } else {
      setMatching(true);
      await axios.put('http://localhost:5000/users/updatePassword', password, { withCredentials: true })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChange = (event) => {
    setMatching(true);
    const obj = {};
    obj[event.target.id] = event.target.value;
    setPassword({ ...password, ...obj });
  };

  return (
    <div className="userPassword">
      <h5 className="userPassword__title">Changer mot de passe:</h5>
      <form onSubmit={handleSubmit} className="userPassword__form">
        <div className="userPassword__form__inputs">
          <div className="userPassword__form__inputs__line">
            <label htmlFor="oldPassword">Ancien:</label>
            <input onChange={handleChange} className="userPassword__form__inputs__line__input" id="oldPassword" type="password" required />
          </div>
          <div className="userPassword__form__inputs__line">
            <label htmlFor="newPassword">Nouveau:</label>
            <input onChange={handleChange} className={`userPassword__form__inputs__line__input${matching ? '' : '--notMatching'}`} id="newPassword" type="password" required />
          </div>
          <div className="userPassword__form__inputs__line">
            <label htmlFor="confirmPassword">Confirmer:</label>
            <input onChange={handleChange} className={`userPassword__form__inputs__line__input${matching ? '' : '--notMatching'}`} id="confirmPassword" type="password" required />
          </div>
        </div>
        <button className="userPassword__form__button" type="submit">Valider</button>
      </form>

    </div>
  );
}

export default UserPassword;
