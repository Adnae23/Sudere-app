/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LeftPage from './LeftPage';
import DataTrainContext from '../../contexts/DataTrainContext';

function CommonPage() {
  const [dataTrain, setDataTrain] = useState();
  return (
    <DataTrainContext.Provider value={{ dataTrain, setDataTrain }}>
      <div className="commonPage">
        <div className="commonPage__left">
          <LeftPage />
        </div>
        <Outlet />
      </div>
    </DataTrainContext.Provider>
  );
}

export default CommonPage;
