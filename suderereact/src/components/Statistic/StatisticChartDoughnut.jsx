import React from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
);

const options = {
  plugins: {
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

const data = {
  labels: ['Traitées', 'Partiellement traitrées', 'Jamais traitées', 'A traiter'],
  datasets: [
    {
      data: ['45', '25', '20', '10'],
      backgroundColor: ['#82be00', '#ffb612', '#cd0037', '#cd0037'],
      borderColor: ['#e0ded8'],
    },
  ],
};

function StatisticChartDoughnut() {
  return (
    <div className="container">
      <div>
        <div className="container__doughnut">
          <Doughnut
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}

export default StatisticChartDoughnut;
