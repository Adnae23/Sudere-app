/* eslint-disable max-len */
import React, { useContext } from 'react';
import { format, parseISO } from 'date-fns';
import DataTrainContext from '../../contexts/DataTrainContext';
import TrailerSelected from '../../contexts/TrailerSelectedContext';

function TrailersInfoConsult() {
  const { dataTrain } = useContext(DataTrainContext);
  const { trailerSelected } = useContext(TrailerSelected);
  const rem2 = trailerSelected - 1 > 3 ? trailerSelected - 2 : trailerSelected - 1;
  let message;
  let messageTime;
  let cure = true;
  if (dataTrain.length > 0) {
    if (dataTrain[rem2].firstname === 'default') {
      cure = false;
      message = '-  -  -  -   ';
    } else {
      cure = true;
      message = dataTrain && `${dataTrain[rem2].firstname} ${dataTrain[rem2].lastname} au ${dataTrain[rem2].center}`;
    }
  }

  function calculPastTime() {
    const pastTime = Math.round((new Date() - new Date(dataTrain[rem2].date).getTime()) / 86400000) - 1;
    if (pastTime < 0) {
      messageTime = message;
    } else if (pastTime === 0) {
      messageTime = 'Aujourd\'hui';
    } else if (pastTime === 1) {
      messageTime = '1 Jour';
    } else {
      messageTime = `${pastTime} Jours`;
    }
    return messageTime;
  }

  function formatDate() {
    return format(parseISO(dataTrain[rem2].date), 'dd/MM/yyyy');
  }

  return (

    <div className="trailersInfo2">
      <div className="trailersInfo12__title">
        <h4 className="trailersInfo2__title__title">{`Remorque: ${trailerSelected}`}</h4>
      </div>
      <div className="trailersInfo2__expi">
        <p className="trailersInfo2__expi__exp">Temps passé depuis la dernière intervention:</p>
        <p className="trailersInfo2__expi__result">{cure ? `${calculPastTime()}` : `${message}`}</p>
      </div>
      <div className="trailersInfo2__expi">
        <p className="trailersInfo2__expi__exp">Date de la dernière intervention:</p>
        <p className="trailersInfo2__expi__result">{cure ? `${formatDate()}` : `${message}`}</p>
      </div>
      <div className="trailersInfo2__expi">
        <p className="trailersInfo2__expi__exp">Durée de traitement:</p>
        <p className="trailersInfo2__expi__result">{cure ? dataTrain && `${dataTrain[rem2].processingTime} Heure(s)` : `${message}`}</p>
      </div>
      <div className="trailersInfo2__expi">
        <p className="trailersInfo2__expi__exp">Réalisation par:</p>
        <p className="trailersInfo2__expi__result">{`${message}`}</p>
      </div>

    </div>

  );
}

export default TrailersInfoConsult;
