/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import StatisticCenters from './StatisticCenters';
import StatisticSeries from './StatisticSeries';
import StatisticAxes from './StatisticAxes';
// import ChoiceChartContext from '../../contexts/ChoiceChartContext';
import Switch from './Switch';

function StatisticFieldset() {
  // const { choiceChart, setChoiceChart } = useContext(ChoiceChartContext);
  // const ChangeChart = () => {
  //   setChoiceChart(!choiceChart);
  // };
  return (
    <div className="stats">
      <div className="stats__title">
        Selection
      </div>
      <div className="stats__center">
        <div className="stats__center__num1">
          <StatisticAxes />
          <StatisticSeries />
          <StatisticCenters />
        </div>
        {/* <div className="stats__center__num2">
          <label className="stats__center__num2__trailers">Remorques</label>
          <button type="button"
          className={`stats__center__num2__button"${choiceChart ?
            '__img1' : '__img2'}`} onClick={ChangeChart} onKeyPress={ChangeChart}>test</button>
          <label className="stats__center__num2__train">Rames</label>
        </div> */}

        <div className="stats__center__num2">
          {/* <label className="stats__center__num2__trailers">Remorques</label> */}
          <Switch />
          {/* <label className="stats__center__num2__train">Rames</label> */}
        </div>
      </div>
    </div>
  );
}

export default StatisticFieldset;
