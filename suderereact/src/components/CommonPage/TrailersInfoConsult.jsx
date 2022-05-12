import React, { useContext } from 'react';
import DataTrainContext from '../../contexts/DataTrainContext';

function TrailersInfoConsult() {
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

    <div className="trailersInfo2">
      <div className="trailersInfo12__title">
        <h4 className="trailersInfo2__title__title">{dataTrain && `Remorque: ${dataTrain.trailer}`}</h4>
      </div>
      <div className="trailersInfo2__expi">
        <p className="trailersInfo2__expi__exp">Temps passé depuis la dernière intervention:</p>
        <p className="trailersInfo2__expi__result">{dataTrain && `${dataTrain.pastTime} Jours`}</p>
      </div>
      <div className="trailersInfo2__expi">
        <p className="trailersInfo2__expi__exp">Date de la dernière intervention:</p>
        <p className="trailersInfo2__expi__result">{dataTrain && `${dataTrain.date}`}</p>
      </div>
      <div className="trailersInfo2__expi">
        <p className="trailersInfo2__expi__exp">Durée de traitement:</p>
        <p className="trailersInfo2__expi__result">{dataTrain && `${dataTrain.processingTime} Heures`}</p>
      </div>
      <div className="trailersInfo2__expi">
        <p className="trailersInfo2__expi__exp">Réalisation par:</p>
        <p className="trailersInfo2__expi__result">{`${message}`}</p>
      </div>

    </div>

  );
}

export default TrailersInfoConsult;
