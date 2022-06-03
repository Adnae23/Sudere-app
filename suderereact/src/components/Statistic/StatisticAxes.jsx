import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import SelectedLinesContext from '../../contexts/SelectedLinesContext';

function StatisticAxes() {
  const { selectedLines, setSelectedLines } = useContext(SelectedLinesContext);
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
          setSelectedLines(options);
        });
    };
    fetchLines();
  }, []);

  return (
    <div className="axe">
      <div className="axe__fieldset">
        <legend className="axe__fieldset__legend">Axes</legend>
        {lines
          && <MultiSelect defaultValue="Select All" className="axe__fieldset__select" options={lines} value={selectedLines} onChange={setSelectedLines} labelledBy="Select" />}
      </div>
    </div>
  );
}

export default StatisticAxes;
