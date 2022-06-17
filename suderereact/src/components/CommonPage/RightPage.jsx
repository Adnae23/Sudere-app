/* eslint-disable max-len */
import React, { useContext } from 'react';
import TrailersInfoConnect from './TrailersInfoConnect';
import TrailersInfoConsult from './TrailersInfoConsult';
import TrailersModifConnect from './TrailersModifConnect';
import DataTrainContext from '../../contexts/DataTrainContext';
import TrailerSelected from '../../contexts/TrailerSelectedContext';
import UserContext from '../../contexts/UserContext';

function RightPage() {
  const { dataTrain } = useContext(DataTrainContext);
  const { trailerSelected } = useContext(TrailerSelected);
  const { user } = useContext(UserContext);
  const rem2 = (trailerSelected - 1) > 3 ? (trailerSelected - 2) : trailerSelected - 1;
  //
  // ********************************** calcul la couleur en fonction de la derniere realisation
  //
  function color() {
    const date = Math.round((new Date() - new Date(dataTrain[rem2].date).getTime()) / 86400000) - 1;
    if (date > 1095) {
      return 'red';
    } if (date > 900) {
      return 'orange';
    }
    return 'green';
  }
  return (
    <div className={`rightPage  rightPage__${color()}`}>
      {user && dataTrain ? (

        <div className="rightPage__connect">
          <div className="rightPage__connect__info">
            <TrailersInfoConnect />
          </div>
          <div className="rightPage__connect__modif">
            <TrailersModifConnect />
          </div>
        </div>
      ) : (
        <div className="rightPage__consult">
          <TrailersInfoConsult />
        </div>
      )}
    </div>
  );
}

export default RightPage;
