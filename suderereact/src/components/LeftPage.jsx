/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';

function LeftPage() {
  const [trainNumber, setTrainNumber] = useState('');
  function InputTrain(inputNumber) {
    if (inputNumber.length < 5) {
      setTrainNumber(inputNumber);
    } else {
      setTrainNumber(inputNumber.slice(0, 4));
    }
  }
  return (
    <div className="leftPage">
      <div className="leftPage__title">
        <h1>SUDERE: CONSULTATION</h1>
      </div>
      <div className="leftPage__right">
        <div className="leftPage__right__topBloc">
          <div className="leftPage__right__topBloc__return">
            <button className="leftPage__right__topBloc__return__button" type="button" />
          </div>
          <p>saisir un numéro de rame:</p>
          <input className="leftPage__right__topBloc__input" type="number" value={trainNumber} onChange={(event) => InputTrain(event.target.value)} />
          <button className="leftPage__right__topBloc__searchButton" type="button">Rechercher</button>
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
