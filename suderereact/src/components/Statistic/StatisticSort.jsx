/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatisticGraphic from './StatisticGraphic';
import StatisticFieldset from './StatisticFieldset';
import DataStatsContext from '../../contexts/DataStatsContext';
import GraphContext from '../../contexts/GraphContext';

function StatisticSort() {
  const [data, setData] = useState();
  const [graph, setGraph] = useState();

  useEffect(() => {
    const fetchTrailers = () => {
      axios.get('http://localhost:5000/trains', { withCredentials: true })
        .then((response) => {
          setData(response.data);
        });
    };
    fetchTrailers();
  }, []);

  return (
    <GraphContext.Provider value={{ graph, setGraph }}>
      <DataStatsContext.Provider value={{ data, setData }}>
        <div className="statistic">
          <div className="statistic__fieldset">
            <StatisticFieldset />
          </div>
          <div className="statistic__grafic">
            <StatisticGraphic />
          </div>
        </div>
      </DataStatsContext.Provider>
    </GraphContext.Provider>
  );
}

export default StatisticSort;
