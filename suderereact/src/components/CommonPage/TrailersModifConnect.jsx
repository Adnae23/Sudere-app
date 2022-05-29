/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import dateFormat from 'dateformat';
import UserContext from '../../contexts/UserContext';
import TrailerSelected from '../../contexts/TrailerSelectedContext';
import DataTrainContext from '../../contexts/DataTrainContext';
import ReloadTrailerContext from '../../contexts/ReloadTrailerContext';

function TrailersModifConnect() {
  const { dataTrain } = useContext(DataTrainContext);
  const { user } = useContext(UserContext);
  const { trailerSelected } = useContext(TrailerSelected);
  const { reloadTrailer, setReloadTrailer } = useContext(ReloadTrailerContext);
  const [processingTime, setProcessingTime] = useState('');
  const rem2 = trailerSelected - 1 > 3 ? trailerSelected - 2 : trailerSelected - 1;
  const toDay = new Date();
  const toDay2 = dateFormat(toDay, 'yyyy-mm-dd');
  const [dateTime, setDateTime] = useState({ date: toDay2 });
  const [warning, setWarning] = useState('__none');
  const object = {};
  const mDate = new Date();
  mDate.setDate(toDay.getDate() - 7);
  const minDate = dateFormat(mDate, 'yyyy-mm-dd');
  // ********************************************* met a jour la base de donnée trailers
  async function updateTrailer(event) {
    event.preventDefault();
    if (dateTime.date !== '' && dateTime.processingTime !== '') {
      setWarning('__none');
      try {
        const response = await axios.put('http://localhost:5000/trains', dateTime, { withCredentials: true });
        console.log(response);
        setReloadTrailer(!reloadTrailer);
      } catch (error) {
        console.log(error);
      }
      setDateTime({ ...dateTime, date: toDay2 });
      setProcessingTime('');
    } else {
      setWarning('');
    }
  }
  // ********************************************* echange entre curentData et oldData
  async function canceledUpdateTrailer(event) {
    event.preventDefault();
    setWarning('__none');
    object.date = dateFormat(dataTrain[rem2].oldDate, 'yyyy-mm-dd');
    object.processingTime = dataTrain[rem2].oldProcessingTime;
    object.userId = dataTrain[rem2].oldUserId;
    object.trailerId = trailerSelected;
    object.trainId = dataTrain[0].train;
    object.oldDate = dateFormat(dataTrain[rem2].date, 'yyyy-mm-dd');
    object.oldUserId = dataTrain[rem2].CP;
    object.oldProcessingTime = dataTrain[rem2].processingTime;
    setDateTime({ ...dateTime, ...object });
    try {
      const response = await axios.put('http://localhost:5000/trains', dateTime, { withCredentials: true });
      console.log(response);
      setReloadTrailer(!reloadTrailer);
    } catch (error) {
      console.log(error);
    }
  }
  // ********************************************* met a jour les variables a chaque changement des inputs
  const handleChange = (event) => {
    const key = event.target.id;
    setProcessingTime(key !== 'date' && +event.target.value);
    object[key] = key === 'date' ? event.target.value : +event.target.value;
    object.userId = user.cp;
    object.trailerId = trailerSelected;
    object.trainId = dataTrain[0].train;
    object.oldDate = dateFormat(dataTrain[rem2].date, 'yyyy-mm-dd');
    object.oldUserId = dataTrain[rem2].id_user;
    object.oldProcessingTime = dataTrain[rem2].processingTime;
    setDateTime({ ...dateTime, ...object });
  };

  return (
    <form className="formConnect">
      <div className={`formConnect__alerte${warning}`}>
        <p>Champs OBLIGATOIRES</p>
      </div>
      <div className="formConnect__date">
        <label className="formConnect__date__label" htmlFor="date__intervention">{'Date d\'intervention:'}</label>
        <input className="formConnect__delai__valeur" onChange={handleChange} value={dateTime.date} id="date" type="date" min={minDate} max={toDay2} />
      </div>
      <div className="formConnect__delai">
        <label className="formConnect__delai__label" htmlFor="duree__intervention">{'Durée d\'intervention:'}</label>
        <input className="formConnect__date__valeur" onChange={handleChange} value={processingTime} id="processingTime" type="number" />
      </div>
      <div className="formConnect__valid">
        <button className="formConnect__valid__backup" type="button" onClick={canceledUpdateTrailer} onKeyPress={canceledUpdateTrailer}>Annuler la dernière MàJ</button>
        <button className="formConnect__valid__button" type="button" onClick={updateTrailer} onKeyPress={updateTrailer}>Valider</button>
      </div>
    </form>
  );
}

export default TrailersModifConnect;
