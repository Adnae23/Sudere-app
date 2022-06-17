/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LeftPage from './LeftPage';
import DataTrainContext from '../../contexts/DataTrainContext';
import TrailerSelectedContext from '../../contexts/TrailerSelectedContext';
import ReloadTrailerContext from '../../contexts/ReloadTrailerContext';

function CommonPage() {
  const [dataTrain, setDataTrain] = useState();
  const [trailerSelected, setTrailerSelected] = useState(1);
  const [reloadTrailer, setReloadTrailer] = useState(false);

  return (
    <TrailerSelectedContext.Provider value={{ trailerSelected, setTrailerSelected }}>
      <DataTrainContext.Provider value={{ dataTrain, setDataTrain }}>
        <ReloadTrailerContext.Provider value={{ reloadTrailer, setReloadTrailer }}>
          <div className="commonPage">
            <div className="commonPage__left">
              <LeftPage />
            </div>
            {dataTrain
              && <Outlet />}
          </div>
        </ReloadTrailerContext.Provider>
      </DataTrainContext.Provider>
    </TrailerSelectedContext.Provider>
  );
}

export default CommonPage;
