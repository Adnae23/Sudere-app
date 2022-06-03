import React, { useContext } from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import DataStatsContext from '../../contexts/DataStatsContext';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
);

const options = {
  plugins: {
    legend: {
      position: 'bottom',
      display: true,

    },
    padding: {
      top: 30,
      bottom: 30,
    },
    responsive: true,
    animation: {
      animateScale: true,
    },
  },
};

function StatisticChartDoughnut2() {
  const { data } = useContext(DataStatsContext);
  let dataTrains = '';
  if (data) {
    dataTrains = {
      labels: ['Traitées', 'Bientot expirées', 'A réaliser'],
      datasets: [
        {
          data: [`${data.trains.rameV}`, `${data.trains.rameO}`, `${data.trains.rameNt}`],
          backgroundColor: ['#82be00', '#ffb612', '#cd0037'],
          borderColor: ['#e0ded8'],
        },
      ],
    };
  }
  return (
    <div className="container">
      <div>
        { data !== undefined
        && (
          <div className="container__doughnut">
            <Doughnut
              data={dataTrains}
              options={options}
            />
          </div>
        )}
      </div>
      <p className="container__text">Résultats exprimés en pourcentage</p>
    </div>
  );
}

export default StatisticChartDoughnut2;
