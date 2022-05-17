/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function StatisticDate() {
  return (
    <div>
      <fieldset>
        <legend>Date</legend>
        <div>
          <label htmlFor="date">De</label>
          <input type="date" min="2021/01/01" />
        </div>
        <div>
          <label htmlFor="date">A</label>
          <input type="date" min="2021/01/01" />
        </div>
      </fieldset>
    </div>
  );
}

export default StatisticDate;
