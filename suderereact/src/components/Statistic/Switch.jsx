/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import ChoiceChartContext from '../../contexts/ChoiceChartContext';

function Switch() {
  const { choiceChart, setChoiceChart } = useContext(ChoiceChartContext);
  const ChangeChart = () => {
    setChoiceChart(!choiceChart);
  };
  return (
    <div className="react-switch">
      <p className="stats__center__num2__trailers">Remorques</p>
      <input
        className="react-switch-checkbox"
        onClick={ChangeChart}
        onKeyPress={ChangeChart}
        id="react-switch-new"
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor="react-switch-new"
      >
        <span className="react-switch-button" />
      </label>
      <p className="stats__center__num2__train">Rames</p>
    </div>
  );
}

export default Switch;
