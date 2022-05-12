/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import DataTrainContext from '../../contexts/DataTrainContext';

function LeftPage() {
  const [trainNumber, setTrainNumber] = useState('');
  const { dataTrain, setDataTrain } = useContext(DataTrainContext);
  const train = {};
  function InputTrain(inputNumber) {
    if (inputNumber.length < 5) {
      setTrainNumber(inputNumber);
    } else {
      setTrainNumber(inputNumber.slice(0, 4));
    }
  }
  const toDay = new Date().getTime();
  async function searchTrain() {
    const response = await axios.get(`http://localhost:5000/trains/${trainNumber}`);

    train.number = response.data[0].train;
    train.serie = response.data[0].serie;
    train.line = response.data[0].line;
    train.trailer = response.data[0].id;
    train.date1 = new Date(response.data[0].date);
    train.date = format(parseISO(response.data[0].date), 'dd/MM/yyyy');
    train.pastTime = Math.round((toDay - train.date1.getTime()) / 86400000) - 1;
    train.processingTime = response.data[0].processingTime;
    train.firstname = response.data[0].firstname;
    train.lastname = response.data[0].lastname;
    train.center = response.data[0].center;

    setDataTrain({ ...dataTrain, ...train });
  }

  return (
    <div className="leftPage">
      <div className="leftPage__title">
        <h1>SUDERE: CONSULTATION</h1>
      </div>
      <div className="leftPage__right">
        <div className="leftPage__right__topBloc">
          <NavLink to="/" className="leftPage__right__topBloc__return">
            <button className="leftPage__right__topBloc__return__button" type="button" />
          </NavLink>
          <p>saisir un numéro de rame:</p>
          <input className="leftPage__right__topBloc__input" type="number" value={trainNumber} onChange={(event) => InputTrain(event.target.value)} />
          <button className="leftPage__right__topBloc__searchButton" type="button" onClick={searchTrain}>Rechercher</button>
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
            <button className="leftPage__right__bottomBloc__button1__button" type="button">Paramètres</button>
          </div>
          <div className="leftPage__right__bottomBloc__button2">
            <img src="../pictures/logo/groupeOrange.png" alt="connexion" className="leftPage__right__bottomBloc__button2__img" />
            <button className="leftPage__right__bottomBloc__button2__button" type="submit">Connexion</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPage;
