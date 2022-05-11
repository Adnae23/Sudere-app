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
        <h4>SUDERE: CONSULTATION</h4>
      </div>
      <div className="leftPage__right">
        <div className="leftPage__right__topBloc">
          <button className="leftPage__right__topBloc__returnButton" type="button" />
          <p>saisir un numéro de rame:</p>
          <input className="leftPage__right__topBloc__input" type="number" value={trainNumber} onChange={(event) => InputTrain(event.target.value)} />
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
          <img src="../pictures/logo/groupeOrange.png" alt="connexion" className="leftPage__right__bottomBloc__img" />
          <button className="leftPage__right__bottomBloc__button" type="submit">Connexion</button>
        </div>
      </div>
    </div>
  );
}

export default LeftPage;
