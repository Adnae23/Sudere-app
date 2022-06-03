/* eslint-disable no-loop-func */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatisticGraphic2 from './StatisticGraphic2';
import StatisticGraphic from './StatisticGraphic';
import StatisticFieldset from './StatisticFieldset';
import DataStatsContext from '../../contexts/DataStatsContext';
import SelectedLinesContext from '../../contexts/SelectedLinesContext';
import SelectedCentersContext from '../../contexts/SelectedCentersContext';
import SelectedSeriesContext from '../../contexts/SelectedSeriesContext';
import ChoiceChartContext from '../../contexts/ChoiceChartContext';

function StatisticSort() {
  const [data, setData] = useState();
  const [selectedLines, setSelectedLines] = useState([]);
  const [selectedCenters, setSelectedCenters] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState([]);
  const arrayLines = selectedLines.map((elem) => elem.value);
  const arraySeries = selectedSeries.map((elem) => elem.value);
  const arrayCenter = selectedCenters.map((elem) => elem.value);
  const [choiceChart, setChoiceChart] = useState(false);

  useEffect(() => {
    const fetchTrailers = () => {
      if (selectedLines && selectedCenters && selectedSeries) {
        axios.get('http://localhost:5000/trains', { withCredentials: true })
          .then((response) => {
            if (response.data) {
              setData('');
              let read = 0;
              const stats = {};
              stats.trains = {};
              stats.trailers = {};
              stats.trains.rameNt = 0;
              stats.trains.rameO = 0;
              stats.trains.rameV = 0;
              stats.trailers.trailersNt = 0;
              stats.trailers.trailersO = 0;
              stats.trailers.trailersR = 0;
              stats.trailers.trailersV = 0;

              while (read < response.data.length) {
                if (response.data[read].serie !== 'Atlantique') {
                  let trailersNt = 0;
                  let trailersV = 0;
                  for (let b = 0; b <= 6; b++) {
                    if (arraySeries.includes(response.data[read + b].serie)
                && arrayLines.includes(response.data[read + b].line)
                && arrayCenter.includes(response.data[read + b].center)) {
                      const tempo = Math.round((new Date() - new Date(response.data[read + b].date).getTime()) / 86400000);
                      if (response.data[read + b].date < '1972-04-04') {
                        trailersNt++;
                        stats.trailers.trailersNt++;
                      } else if (tempo > 1095) {
                        stats.trailers.trailersR++;
                      } else if (tempo > 900 && tempo < 1095) {
                        stats.trailers.trailersO++;
                      } else {
                        trailersV++;
                        stats.trailers.trailersV++;
                      }
                    }
                  }
                  if (arraySeries.includes(response.data[read].serie)
                && arrayLines.includes(response.data[read].line)
                && arrayCenter.includes(response.data[read].center)) {
                    if (trailersNt === 7) {
                      stats.trains.rameNt++;
                    } else if (trailersV === 7) {
                      stats.trains.rameV++;
                    } else {
                      stats.trains.rameO++;
                    }
                  }
                } else {
                  let trailersNt = 0;
                  let trailersV = 0;
                  for (let b = 0; b <= 8; b++) {
                    if (arraySeries.includes(response.data[read + b].serie)
                && arrayLines.includes(response.data[read + b].line)
                && arrayCenter.includes(response.data[read + b].center)) {
                      const tempo = Math.round((new Date() - new Date(response.data[read + b].date).getTime()) / 86400000);
                      if (response.data[read + b].date < '1972-04-04') {
                        trailersNt++;
                        stats.trailers.trailersNt++;
                      } else if (tempo > 1095) {
                        stats.trailers.trailersR++;
                      } else if (tempo > 900 && tempo < 1095) {
                        stats.trailers.trailersO++;
                      } else {
                        trailersV++;
                        stats.trailers.trailersV++;
                      }
                    }
                  }
                  if (arraySeries.includes(response.data[read].serie)
                && arrayLines.includes(response.data[read].line)
                && arrayCenter.includes(response.data[read].center)) {
                    if (trailersNt === 9) {
                      stats.trains.rameNt++;
                    } else if (trailersV === 9) {
                      stats.trains.rameV++;
                    } else {
                      stats.trains.rameO++;
                    }
                  }
                }
                if (response.data[read].serie !== 'Atlantique') {
                  read += 7;
                } else {
                  read += 9;
                }
              }
              const tmpSumTrailers = Object.values(stats.trailers).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
              const tmpSumTrains = Object.values(stats.trains).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
              stats.trailers.trailersNt = ((stats.trailers.trailersNt * 100) / tmpSumTrailers).toFixed(2);
              stats.trailers.trailersV = ((stats.trailers.trailersV * 100) / tmpSumTrailers).toFixed(2);
              stats.trailers.trailersO = ((stats.trailers.trailersO * 100) / tmpSumTrailers).toFixed(2);
              stats.trailers.trailersR = ((stats.trailers.trailersR * 100) / tmpSumTrailers).toFixed(2);
              stats.trains.rameNt = ((stats.trains.rameNt * 100) / tmpSumTrains).toFixed(2);
              stats.trains.rameO = ((stats.trains.rameO * 100) / tmpSumTrains).toFixed(2);
              stats.trains.rameV = ((stats.trains.rameV * 100) / tmpSumTrains).toFixed(2);
              setData(stats);
            }
          });
      }
    };
    fetchTrailers();
  }, [selectedLines, selectedCenters, selectedSeries]);

  return (
    <SelectedLinesContext.Provider value={{ selectedLines, setSelectedLines }}>
      <SelectedCentersContext.Provider value={{ selectedCenters, setSelectedCenters }}>
        <SelectedSeriesContext.Provider value={{ selectedSeries, setSelectedSeries }}>
          <DataStatsContext.Provider value={{ data, setData }}>
            <ChoiceChartContext.Provider value={{ choiceChart, setChoiceChart }}>
              <div className="statistic">
                <div className="statistic__fieldset">
                  <StatisticFieldset />
                </div>
                <div className="statistic__grafic">
                  {!choiceChart
                    ? <StatisticGraphic />
                    : <StatisticGraphic2 />}

                </div>
              </div>
            </ChoiceChartContext.Provider>
          </DataStatsContext.Provider>
        </SelectedSeriesContext.Provider>
      </SelectedCentersContext.Provider>
    </SelectedLinesContext.Provider>
  );
}

export default StatisticSort;
