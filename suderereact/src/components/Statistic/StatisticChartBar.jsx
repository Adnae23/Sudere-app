import React from 'react';
import '../styles/StatisticChart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: ['Traitées'],
  datasets: [
    {
      label: 'Traitées',
      data: ['23'],
      backgroundColor: ['#82be00'],
    },
    {
      label: 'Partiellement traitrées',
      data: ['21'],
      backgroundColor: ['#ffb612'],
    },
    {
      label: 'Jamais traitées',
      data: ['21'],
      backgroundColor: ['#cd0037'],
    }, {
      label: 'A traiter',
      data: ['21'],
      backgroundColor: ['#cd0037'],
    },
  ],
};

function StatisticCharts() {
  return (
    <div>
      <div>
        <div className="container">
          <Bar
            data={data}
            width={160}
            height={60}
            options={{
              responsive: true,
              plugins: {
                title: {
                  position: 'bottom',
                  text: 'Etats des remorques',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default StatisticCharts;
