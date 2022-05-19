import React from 'react';
// import StatisticChartBar from './StatisticChartBar';
import StatisticChartDoughnut from './StatisticChartDoughnut';
// import StatisticChartPolar from './StatisticChartPolar';

function StatisticGraphic() {
  return (
    <div className="stats___graf">
      {/* <StatisticChartBar /> */}
      <div className="stats___graf__title">
        <h5>Etats des remorques</h5>
      </div>
      <StatisticChartDoughnut />
      {/* <StatisticChartPolar /> */}
      <div className="stats___graf__legend">
        <div className="stats___graf__legend__treated">Traitée: 45</div>
        <div className="stats___graf__legend__partially">Partiellement Traitée: 25</div>
        <div className="stats___graf__legend__to-treat">A Traiter: 20</div>
        <div className="stats___graf__legend__never-treat">Jamais Traitée: 10</div>
      </div>
    </div>
  );
}

export default StatisticGraphic;
