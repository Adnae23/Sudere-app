/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState } from 'react';
import CenterPage from './CenterPage';
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import DataTrainContext from '../../contexts/DataTrainContext';
import UserContext from '../../contexts/UserContext';

function CommonPage() {
  const { user } = useContext(UserContext);
  console.log(user);
  const [dataTrain, setDataTrain] = useState();
  // const { dataTrain } = useContext(DataTrainContext);
  return (
    <DataTrainContext.Provider value={{ dataTrain, setDataTrain }}>
      <div className="commonPage">
        <div className="commonPage__left">
          <LeftPage />
        </div>
        {dataTrain ? (
          <div className="commonPage__isTrain">
            <div className="commonPage__isTrain__center">
              <CenterPage />
            </div>
            <div className="commonPage__isTrain__right">
              <RightPage />
            </div>
          </div>
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
