/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function StatisticDuration() {
  return (
    <div>
      <fieldset>
        <legend>Durée</legend>
        <div>
          <label htmlFor="hours">{'Nombres d\'heures'}</label>
          <select type="select">
            <option value="--">--</option>
            <option value="1">Un</option>
            <option value="2">Deux</option>
            <option value="3">Trois</option>
            <option value="4">Quatre</option>
            <option value="5">Cinq</option>
            <option value="6">Six</option>
            <option value="7">Sept</option>
            <option value="8">Huit</option>
            <option value="9">Neuf</option>
          </select>
        </div>
      </fieldset>
    </div>
  );
}

export default StatisticDuration;
