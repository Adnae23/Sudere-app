/* eslint-disable max-len */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import CentersListContext from '../../contexts/CentersListContext';
import ProfilesListContext from '../../contexts/ProfilesListContext';

function UserForm() {
  const { centers } = useContext(CentersListContext);
  const { profiles } = useContext(ProfilesListContext);
  const [dataToSend, setDataToSend] = useState({});

  const object = {};
  if (centers.length && profiles.length) {
    object.center = centers[0].name;
    object.profile = profiles[0].name;
  }
  useEffect(() => {
    setDataToSend({ ...dataToSend, ...object });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/users', dataToSend);
    console.log(response);
  };
  const handleChange = (event) => {
    const key = event.target.id;
    object[key] = event.target.value;
    setDataToSend({ ...dataToSend, ...object });
  };

  return (
    <div>
      <div className="userInformations">
        <form onSubmit={handleSubmit}>
          <ul className="userInformations__list">
            <li className="userInformations__list__item">
              <label htmlFor="lastname" className="userInformations__list__item--left">{'Nom: '}</label>
              <input onChange={handleChange} type="text" id="lastname" className="userInformations__list__item--right" required />
            </li>
            <li className="userInformations__list__item">
              <label htmlFor="firstname" className="userInformations__list__item--left">{'Prénom: '}</label>
              <input onChange={handleChange} type="text" id="firstname" className="userInformations__list__item--right" required />
            </li>
            <li className="userInformations__list__item">
              <label htmlFor="id" className="userInformations__list__item--left">{'CP: '}</label>
              <input onChange={handleChange} type="text" id="id" className="userInformations__list__item--right" required />
            </li>
            <li className="userInformations__list__item">
              <label htmlFor="email" className="userInformations__list__item--left">{'Email: '}</label>
              <input onChange={handleChange} type="text" id="email" className="userInformations__list__item--right--input" required />
            </li>
            <li className="userInformations__list__item">
              <p className="userInformations__list__item--left">{'Établissement: '}</p>
              <p className="userInformations__list__item--right">
                <select onChange={handleChange} id="center" className="userInformations__list__item--right--option">
                  {centers.length !== 0 && centers.map((center) => <option className="userInformations__list__item--right--option" key={center.id}>{center.name}</option>)}
                </select>
              </p>
            </li>
            <li className="userInformations__list__item">
              <p className="userInformations__list__item--left">{'Profil: '}</p>
              <p className="userInformations__list__item--right">
                <select onChange={handleChange} id="profile" className="userInformations__list__item--right--option">
                  {profiles.length !== 0 && profiles.map((profile) => <option key={profile.id}>{profile.name}</option>)}
                </select>
              </p>
            </li>
          </ul>
          <button type="submit">Créer</button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
