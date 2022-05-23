/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import StatisticCenters from './StatisticCenters';
import StatisticSeries from './StatisticSeries';
import StatisticAxes from './StatisticAxes';
import StatisticDate from './StatisticDate';
import StatisticDuration from './StatisticDuration';
import StatisticChoice from './StatisticChoice';

function StatisticFieldset() {
  return (
    <div className="stats">
      <div className="stats__title">
        Selection
      </div>
      <div className="stats__center">
        <div className="stats__center__num1">
          <StatisticAxes />
          <StatisticSeries />
          <StatisticCenters />
        </div>
        <div className="stats__center__num2">
          <StatisticDate />
        </div>
        <div className="stats__center__num3">
          <StatisticDuration />
        </div>
        <div className="stats__center__num4">
          <StatisticChoice />
        </div>
      </div>
    </div>
  );
}

export default StatisticFieldset;
