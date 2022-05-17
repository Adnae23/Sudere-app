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
    <div>
      <fieldset>
        <legend>Axes</legend>
        <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy="Select" />
      </fieldset>
    </div>
  );
}

export default StatisticAxes;
