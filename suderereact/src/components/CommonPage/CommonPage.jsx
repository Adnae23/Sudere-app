/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LeftPage from './LeftPage';
import DataTrainContext from '../../contexts/DataTrainContext';
import TrailerSelectedContext from '../../contexts/TrailerSelectedContext';

function CommonPage() {
  const [dataTrain, setDataTrain] = useState();
  const [trailerSelected, setTrailerSelected] = useState(1);

  return (
    <TrailerSelectedContext.Provider value={{ trailerSelected, setTrailerSelected }}>
      <DataTrainContext.Provider value={{ dataTrain, setDataTrain }}>
        <div className="commonPage">
          <div className="commonPage__left">
            <LeftPage />
          </div>
          {dataTrain
          && <Outlet />}
        </div>
      </DataTrainContext.Provider>
    </TrailerSelectedContext.Provider>
  );
}

export default CommonPage;
