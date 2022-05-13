/* eslint-disable max-len */
import React, { useContext } from 'react';
import { format, parseISO } from 'date-fns';
import DataTrainContext from '../../contexts/DataTrainContext';
import TrailerSelected from '../../contexts/TrailerSelectedContext';

function TrailersInfoConnect() {
  const { dataTrain } = useContext(DataTrainContext);
  const { trailerSelected } = useContext(TrailerSelected);
  const toDay = new Date();
  let rem2 = trailerSelected - 1 > 3 ? trailerSelected - 2 : trailerSelected - 1;
  let message;
  let cure = true;
  const train = {};
  train.trailer = trailerSelected;
  train.date1 = new Date(dataTrain[0].date).getTime();
  train.date = format(parseISO(dataTrain[0].date), 'dd/MM/yyyy');
  train.pastTime = Math.round((toDay - train.date1) / 86400000) - 1;
  train.processingTime = dataTrain[0].processingTime;
  train.firstname = dataTrain[0].firstname;
  train.lastname = dataTrain[0].lastname;
  train.center = dataTrain[0].center;
  if (dataTrain.length > 0) {
    if (dataTrain[rem2].firstname === 'default') {
      cure = false;
      message = '-  -  -  -   ';
    } else {
      cure = true;
      message = dataTrain && `${dataTrain[rem2].firstname} ${dataTrain[rem2].lastname} au ${dataTrain[rem2].center}`;
    }
  }

  function calculPastTime(rem) {
    rem2 = rem > 3 ? rem - 1 : rem;
    train.pastTime = Math.round((new Date() - new Date(dataTrain[rem2].date).getTime()) / 86400000) - 1;
    return train.pastTime;
  }

  function formatDate() {
    return format(parseISO(dataTrain[rem2].date), 'dd/MM/yyyy');
  }

  return (
    <div className="trailersglobal">
      <div className="trailersglobal__trailersInfo">
        <div className="trailersglobal__trailersInfo__title">
          <h4 className="trailersglobal__trailersInfo__title__title">{`Remorque: ${trailerSelected}`}</h4>
        </div>
        <div className="trailersglobal__trailersInfo__expi-1">
          <p className="trailersglobal__trailersInfo__expi-1__exp">Temps passé depuis la dernière intervention:</p>
          <p className="trailersglobal__trailersInfo__expi-1__result">
            {cure ? `${calculPastTime(trailerSelected - 1)} Jours` : `${message}`}
          </p>
        </div>
        <div className="trailersglobal__trailersInfo__expi-1">
          <p className="trailersglobal__trailersInfo__expi-1__exp">Date de la dernière intervention:</p>
          <p className="trailersglobal__trailersInfo__expi-1__result">{cure ? `${formatDate()}` : `${message}`}</p>
        </div>
        <div className="trailersglobal__trailersInfo__expi-1">
          <p className="trailersglobal__trailersInfo__expi-1__exp">Durée de traitement:</p>
          <p className="trailersglobal__trailersInfo__expi-1__result">{cure ? dataTrain && `${dataTrain[rem2].processingTime} Heures` : `${message}`}</p>
        </div>
        <div className="trailersglobal__trailersInfo__expi-1">
          <p className="trailersglobal__trailersInfo__expi-1__exp">Réalisation par:</p>
          <p className="trailersglobal__trailersInfo__expi-1__result">{`${message}`}</p>
        </div>
      </div>
    </div>

  );
}

export default TrailersInfoConnect;
