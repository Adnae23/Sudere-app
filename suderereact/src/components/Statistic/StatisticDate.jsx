/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function StatisticDate() {
  return (
    <div className="date">
      <fieldset className="date__fieldset">
        <legend className="date__fieldset__legend">Date</legend>
        <div className="date__fieldset__div">
          <label className="date__fieldset__div__label" htmlFor="date">De</label>
          <input className="date__fieldset__div__input" type="date" min="2021/01/01" />
        </div>
        <div className="date__fieldset__div">
          <label className="date__fieldset__div__label" htmlFor="date">A</label>
          <input className="date__fieldset__div__input" type="date" min="2021/01/01" />
        </div>
      </fieldset>
    </div>
  );
}

export default StatisticDate;
