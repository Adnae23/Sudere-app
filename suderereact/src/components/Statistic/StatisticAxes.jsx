import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

function StatisticAxes() {
  const [selected, setSelected] = useState([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const fetchLines = () => {
      axios.get('http://localhost:5000/db/lines/', { withCredentials: true })
        .then((response) => {
          const options = response.data.map((option) => {
            const line = { label: option.name, value: option.name };
            return line;
          });
          setLines(options);
        });
    };
    fetchLines();
  }, []);

  return (
    <div className="axe">
      <div className="axe__fieldset">
        <legend className="axe__fieldset__legend">Axes</legend>
        {lines
        && <MultiSelect className="axe__fieldset__select" options={lines} value={selected} onChange={setSelected} labelledBy="Select" />}
      </div>
    </div>
  );
}

export default StatisticAxes;
