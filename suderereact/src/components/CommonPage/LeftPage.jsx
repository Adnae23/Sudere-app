/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DataTrainContext from '../../contexts/DataTrainContext';

function LeftPage() {
  const [trainNumber, setTrainNumber] = useState('');
  const { setDataTrain } = useContext(DataTrainContext);
  const isConnected = true;
  const navigate = useNavigate();
  function InputTrain(inputNumber) {
    if (inputNumber.length < 5 && inputNumber.length > 0) {
      setTrainNumber(inputNumber);
    } else if (inputNumber.length === 0) {
      setDataTrain([]);
      setTrainNumber('');
    } else {
      setTrainNumber(inputNumber.slice(0, 4));
    }
  }
  async function searchTrain() {
    if (trainNumber.length > 0) {
      try {
        const response = await axios.get(`http://localhost:5000/trains/${trainNumber}`);
        console.log(response.data);
        setDataTrain(response.data);
        if (response.data.length !== 0) {
          navigate('/commonPage/rightcomponent');
        } else {
          navigate('/commonPage');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setDataTrain([]);
      setTrainNumber('');
    }
  }

  return (
    <div className="leftPage">
      <div className="leftPage__title">
        <h1>{isConnected ? 'SUDERE: MODIFICATION' : 'SUDERE: CONSULTATION'}</h1>
      </div>
      <div className="leftPage__right">
        <div className="leftPage__right__topBloc">
          <NavLink to="/" className="leftPage__right__topBloc__return">
            <button className="leftPage__right__topBloc__return__button" type="button" />
          </NavLink>
          <p>saisir un numéro de rame:</p>
          <input className="leftPage__right__topBloc__input" type="number" value={trainNumber} onChange={(event) => InputTrain(event.target.value)} />
          <button className="leftPage__right__topBloc__searchButton" type="button" onClick={searchTrain} onKeyPress={searchTrain}>Rechercher</button>

        </div>
        <div className="leftPage__right__centerBloc">
          <div className="leftPage__right__centerBloc__filters">
            <NavLink to="/commonPage/statistic">
              <button className="leftPage__right__centerBloc__filters__button" type="button">Statistique</button>
            </NavLink>
          </div>
        </div>
        <div className="leftPage__right__bottomBloc">
          <div className="leftPage__right__bottomBloc__button1">
            <NavLink to="/admin">
              <button className={isConnected ? 'leftPage__right__bottomBloc__button1__button' : 'leftPage__right__bottomBloc__button1__buttonNone'} type="button">Paramètres</button>
            </NavLink>
          </div>
          <div className="leftPage__right__bottomBloc__button2">
            <img src="../pictures/logo/groupeOrange.png" alt="connexion" className="leftPage__right__bottomBloc__button2__img" />
            <button className="leftPage__right__bottomBloc__button2__button" type="submit">{isConnected ? 'Déconnexion' : 'Connexion'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPage;
