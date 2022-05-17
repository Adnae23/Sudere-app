/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import StatisticCenters from './StatisticCenters';
import StatisticSeries from './StatisticSeries';
import StatisticAxes from './StatisticAxes';

function StatisticSort() {
  return (
    <div>
      <div>
        <StatisticAxes />
        <StatisticSeries />
        <StatisticCenters />
      </div>
      <div />
    </div>
  );
}

export default StatisticSort;
