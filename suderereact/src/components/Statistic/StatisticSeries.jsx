/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

const options = [
  { label: 'Sud-Est', value: 'Sud-Est' },
  { label: 'Duplex', value: 'Duplex' },
  { label: 'Réseau', value: 'Réseau' },
  { label: 'Atlantique', value: 'Atlantique' },
  { label: 'Ouigo', value: 'Ouigo' },
  { label: '2N2', value: '2N2' },
  { label: 'POS', value: 'POS' },
  { label: 'PLT', value: 'PLT' },
  { label: 'RTRI', value: 'RTRI' },
  { label: 'TGVFutur', value: 'TGVFutur' },
];

function StatisticSeries() {
  const [selected, setSelected] = useState([]);

  return (
    <div className="serie">
      <div className="serie__fieldset">
        <legend className="serie__fieldset__legend">Séries</legend>
        <MultiSelect className="serie__fieldset__select" options={options} value={selected} onChange={setSelected} labelledBy="séries" />
      </div>
    </div>
  );
}

export default StatisticSeries;
