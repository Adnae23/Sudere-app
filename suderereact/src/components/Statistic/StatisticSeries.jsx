/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MultiSelect } from 'react-multi-select-component';
import SelectedSeriesContext from '../../contexts/SelectedSeriesContext';

function StatisticSeries() {
  const { selectedSeries, setSelectedSeries } = useContext(SelectedSeriesContext);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = () => {
      axios.get('http://localhost:5000/db/Series/', { withCredentials: true })
        .then((response) => {
          const options = response.data.map((option) => {
            const serie = { label: option.name, value: option.name };
            return serie;
          });
          setSeries(options);
          setSelectedSeries(options);
        });
    };
    fetchSeries();
  }, []);

  return (
    <div className="serie">
      <div className="serie__fieldset">
        <legend className="serie__fieldset__legend">Séries</legend>
        <MultiSelect className="serie__fieldset__select" options={series} value={selectedSeries} onChange={setSelectedSeries} labelledBy="séries" />
      </div>
    </div>
  );
}

export default StatisticSeries;
