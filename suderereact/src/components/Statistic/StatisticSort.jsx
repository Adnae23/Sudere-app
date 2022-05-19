/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import StatisticGraphic from './StatisticGraphic';
import StatisticFieldset from './StatisticFieldset';

function StatisticSort() {
  return (
    <div className="statistic">
      <div className="statistic__fieldset">
        <StatisticFieldset />
      </div>
      <div className="statistic__grafic">
        <StatisticGraphic />
      </div>
    </div>
  );
}

export default StatisticSort;
