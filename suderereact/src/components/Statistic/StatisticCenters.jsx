/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

const options = [
  { label: 'TSEE', value: 'TSEE' },
  { label: 'TLG', value: 'TLG' },
  { label: 'TLL', value: 'TLL' },
  { label: 'NST', value: 'NST' },
  { label: 'TALT', value: 'TALT' },
  { label: 'TEE', value: 'TEE' },
  { label: 'Aucun', value: 'Aucun' },
];

function StatisticCenters() {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <fieldset>
        <legend>Centres</legend>
        <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy="séries" />
      </fieldset>
    </div>
  );
}

export default StatisticCenters;
