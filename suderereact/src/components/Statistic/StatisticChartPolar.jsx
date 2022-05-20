import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  labels: ['red', 'blue', 'green', 'violet', 'orange', 'yellow'],
  datasets: [
    {
      label: 'couleur préféré des français',
      data: ['23', '21', '32', '12', '15', '9'],
      backgroundColor: ['red', 'blue', 'green', 'violet', 'orange', 'yellow'],
    },
  ],
};

function StatisticChartPolar() {
  return (
    <div>
      <div className="chart">
        <div>
          <PolarArea
            data={data}
            width={160}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}

export default StatisticChartPolar;
