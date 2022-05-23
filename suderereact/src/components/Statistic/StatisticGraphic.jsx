import React from 'react';
// import StatisticChartBar from './StatisticChartBar';
import StatisticChartDoughnut from './StatisticChartDoughnut';
// import StatisticChartPolar from './StatisticChartPolar';

function StatisticGraphic() {
  return (
    <div className="stats___graf">
      {/* <StatisticChartBar /> */}
      <div className="stats___graf__title">
        <h5>Etat des remorques</h5>
      </div>
      <StatisticChartDoughnut />
      {/* <StatisticChartPolar /> */}
      <div className="stats___graf__legend">
        <div className="stats___graf__legend__line">
          <div className="stats___graf__legend__line__treated" />
          <p className="stats___graf__legend__line__p">Traitée: 45 </p>
        </div>
        <div className="stats___graf__legend__line">
          <div className="stats___graf__legend__line__partially" />
          <p className="stats___graf__legend__line__p">Partiellement Traitée: 25</p>
        </div>
        <div className="stats___graf__legend__line">
          <div className="stats___graf__legend__line__to-treat" />
          <p className="stats___graf__legend__line__p">A Traiter: 20</p>
        </div>
        <div className="stats___graf__legend__line">
          <div className="stats___graf__legend__line__never-treat" />
          <p className="stats___graf__legend__line__p">Jamais Traitée: 10</p>
        </div>
      </div>
    </div>
  );
}

export default StatisticGraphic;
