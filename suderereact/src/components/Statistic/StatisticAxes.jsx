import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

const options = [
  { label: 'GRD', value: 'GRD' },
  { label: 'Sud EST', value: 'Sud-Est' },
  { label: 'Nord', value: 'Nord' },
  { label: 'Atlantique', value: 'Atlantique' },
  { label: 'Est', value: 'Est' },
  { label: 'Bisheim', value: 'Bisheim' },
  { label: 'FALBALA', value: 'FALBALA' },
  { label: 'Forest', value: 'Forest' },
];

function StatisticAxes() {
  const [selected, setSelected] = useState([]);

  return (
    <div className="axe">
      <fieldset className="axe__fieldset">
        <legend className="axe__fieldset__legend">Axes</legend>
        <MultiSelect className="axe__fieldset__select" options={options} value={selected} onChange={setSelected} labelledBy="Select" />
      </fieldset>
    </div>
  );
}

export default StatisticAxes;
