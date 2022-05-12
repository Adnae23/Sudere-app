import React, { useContext } from 'react';
import DataTrainContext from '../../contexts/DataTrainContext';

function TrailersInfoConnect() {
  const { dataTrain } = useContext(DataTrainContext);
  let message = '';
  if (dataTrain) {
    if (dataTrain.firstname === 'default') {
      message = 'Jamais Traitée';
    } else {
      message = dataTrain && `${dataTrain.firstname} ${dataTrain.lastname} au ${dataTrain.center}`;
    }
  }

  return (
    <div className="trailersglobal">
      <div className="trailersglobal__trailersInfo">
        <div className="trailersglobal__trailersInfo__title">
          <h4 className="trailersglobal__trailersInfo__title__title">{dataTrain && `Remorque: ${dataTrain.trailer}`}</h4>
        </div>
        <div className="trailersglobal__trailersInfo__expi-1">
          <p className="trailersglobal__trailersInfo__expi-1__exp">Temps passé depuis la dernière intervention:</p>
          <p className="trailersglobal__trailersInfo__expi-1__result">
            {dataTrain && `${dataTrain.pastTime} Jours`}
            {' '}
          </p>
        </div>
        <div className="trailersglobal__trailersInfo__expi-1">
          <p className="trailersglobal__trailersInfo__expi-1__exp">Date de la dernière intervention:</p>
          <p className="trailersglobal__trailersInfo__expi-1__result">{dataTrain && `${dataTrain.date}`}</p>
        </div>
        <div className="trailersglobal__trailersInfo__expi-1">
          <p className="trailersglobal__trailersInfo__expi-1__exp">Durée de traitement:</p>
          <p className="trailersglobal__trailersInfo__expi-1__result">{dataTrain && `${dataTrain.processingTime} Heures`}</p>
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
