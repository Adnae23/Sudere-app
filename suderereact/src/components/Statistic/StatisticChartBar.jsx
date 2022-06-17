import React, { useContext } from 'react';
import {
  Chart as ChartJS, BarElement, Tooltip, CategoryScale, LinearScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import DataStatsContext from '../../contexts/DataStatsContext';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
);

const options = {
  plugins: {
    legend: {
      position: 'bottom',
      display: false,

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

function StatisticChartBar() {
  const { data } = useContext(DataStatsContext);
  let dataTrailers = '';
  if (data) {
    dataTrailers = {
      labels: ['Traitées', 'Bientot expirées', 'A traiter', 'Jamais réalisé'],
      datasets: [
        {
        // data: [dataForTrailers.processed, dataForTrailers.soon, dataForTrailers.toDo],
          data: [`${data.trailers.trailersV}`, `${data.trailers.trailersO}`, `${data.trailers.trailersR}`, `${data.trailers.trailersNt}`],
          backgroundColor: ['#82be00', '#ffb612', '#cd0037', '#cd0037'],
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
            <Bar
              data={dataTrailers}
              options={options}
            />
          </div>
        )}
      </div>
      <p className="container__text">Résultats exprimés en pourcentage</p>
    </div>
  );
}

export default StatisticChartBar;
