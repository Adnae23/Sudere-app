/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MultiSelect } from 'react-multi-select-component';
import SelectedCentersContext from '../../contexts/SelectedCentersContext';

function StatisticCenters() {
  const [centers, setCenters] = useState([]);
  const { selectedCenters, setSelectedCenters } = useContext(SelectedCentersContext);

  useEffect(() => {
    const fetchCenters = () => {
      axios.get('http://localhost:5000/db/centers/', { withCredentials: true })
        .then((response) => {
          const options = response.data.map((option) => {
            const center = { label: option.name, value: option.name };
            return center;
          });
          setCenters(options);
          setSelectedCenters(options);
        });
    };
    fetchCenters();
  }, []);

  return (
    <div className="center">
      <div className="center__fieldset">
        <legend className="center__fieldset__legend">Technicentres</legend>
        <MultiSelect className="center__fieldset__select" options={centers} value={selectedCenters} onChange={setSelectedCenters} labelledBy="technicentres" />
      </div>
    </div>
  );
}

export default StatisticCenters;
