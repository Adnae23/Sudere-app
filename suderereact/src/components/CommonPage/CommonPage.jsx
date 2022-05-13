/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import CenterPage from './CenterPage';
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import DataTrainContext from '../../contexts/DataTrainContext';
import TrailerSelectedContext from '../../contexts/TrailerSelectedContext';

function CommonPage() {
  const [dataTrain, setDataTrain] = useState([]);
  const [trailerSelected, setTrailerSelected] = useState(1);
  return (
    <DataTrainContext.Provider value={{ dataTrain, setDataTrain }}>
      <div className="commonPage">
        <div className="commonPage__left">
          <LeftPage />
        </div>
        {dataTrain.length > 0 ? (
          <TrailerSelectedContext.Provider value={{ trailerSelected, setTrailerSelected }}>
            <div className="commonPage__isTrain">
              <div className="commonPage__isTrain__center">
                <CenterPage />
              </div>
              <div className="commonPage__isTrain__right">
                <RightPage />
              </div>
            </div>
          </TrailerSelectedContext.Provider>
        ) : (
          <div className="commonPage__empty">
            <h4>Veuillez entrer un numéro de rame</h4>
          </div>
        )}
      </div>
    </DataTrainContext.Provider>
  );
}

export default CommonPage;
