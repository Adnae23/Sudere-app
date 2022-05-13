/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useState } from 'react';
// import { format, parseISO } from 'date-fns';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import DataTrainContext from '../../contexts/DataTrainContext';

function LeftPage() {
  const [trainNumber, setTrainNumber] = useState('');
  const { setDataTrain } = useContext(DataTrainContext);
  const isConnected = true;
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
  // const toDay = new Date().getTime();
  async function searchTrain() {
    if (trainNumber.length > 0) {
      const response = await axios.get(`http://localhost:5000/trains/${trainNumber}`);
      setDataTrain(response.data);
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
            <h4 className="leftPage__right__centerBloc__filters__title">STATS</h4>
            <button className="leftPage__right__centerBloc__filters__button" type="button">Général</button>
            <button className="leftPage__right__centerBloc__filters__button" type="button">Matériel</button>
            <button className="leftPage__right__centerBloc__filters__button" type="button">Axe</button>
          </div>
        </div>
        <div className="leftPage__right__bottomBloc">
          <div className="leftPage__right__bottomBloc__button1">
            <button className={isConnected ? 'leftPage__right__bottomBloc__button1__button' : 'leftPage__right__bottomBloc__button1__buttonNone'} type="button">Paramètres</button>
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
