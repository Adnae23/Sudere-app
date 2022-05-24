/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MultiSelect } from 'react-multi-select-component';

function StatisticCenters() {
  const [selected, setSelected] = useState([]);
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    const fetchCenters = () => {
      axios.get('http://localhost:5000/db/centers/', { withCredentials: true })
        .then((response) => {
          const options = response.data.filter((item) => item.name !== 'aucun').map((option) => {
            const center = { label: option.name, value: option.name };
            return center;
          });
          setCenters(options);
        });
    };
    fetchCenters();
  }, []);

  return (
    <div className="center">
      <div className="center__fieldset">
        <legend className="center__fieldset__legend">Centres</legend>
        <MultiSelect className="center__fieldset__select" options={centers} value={selected} onChange={setSelected} labelledBy="séries" />
      </div>
    </div>
  );
}

export default StatisticCenters;
