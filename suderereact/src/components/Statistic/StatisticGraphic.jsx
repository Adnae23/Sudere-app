import React from 'react';
import StatisticChartBar from './StatisticChartBar';

function StatisticGraphic() {
  return (
    <div className="stats___graf">
      {/* <StatisticChartBar /> */}
      <div className="stats___graf__title">
        <h5>Etat des remorques</h5>
      </div>
      <StatisticChartBar />
    </div>
  );
}

export default StatisticGraphic;
