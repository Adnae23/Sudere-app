/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import StatisticCenters from './StatisticCenters';
import StatisticSeries from './StatisticSeries';
import StatisticAxes from './StatisticAxes';
import StatisticDate from './StatisticDate';
import StatisticDuration from './StatisticDuration';
import StatisticChoice from './StatisticChoice';

function StatisticSort() {
  return (
    <div>
      <div>
        <StatisticAxes />
        <StatisticSeries />
        <StatisticCenters />
      </div>
      <div>
        <StatisticDate />
      </div>
      <div>
        <StatisticDuration />
      </div>
      <div>
        <StatisticChoice />
      </div>
    </div>
  );
}

export default StatisticSort;
