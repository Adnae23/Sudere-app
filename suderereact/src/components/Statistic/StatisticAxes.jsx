/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function StatisticAxes() {
  return (
    <div>
      <fieldset>
        <legend>Axes</legend>
        <div>
          <input type="checkbox" name="GRD" />
          <label htmlFor="GRD">GRD</label>
        </div>
        <div>
          <input type="checkbox" name="Sud Est" />
          <label htmlFor="Sud Est">Sud-Est</label>
        </div>
        <div>
          <input type="checkbox" name="Nord" />
          <label htmlFor="Nord">Nord</label>
        </div>
        <div>
          <input type="checkbox" name="Atlantique" />
          <label htmlFor="Atantlique">Atlantique</label>
        </div>
        <div>
          <input type="checkbox" name="Est" />
          <label htmlFor="Est">Est</label>
        </div>
        <div>
          <input type="checkbox" name="Bisheim" />
          <label htmlFor="Bisheim">Bisheim</label>
        </div>
        <div>
          <input type="checkbox" name="FALBALA" />
          <label htmlFor="FALBALA">FALBALA</label>
        </div>
        <div>
          <input type="checkbox" name="FOREST" />
          <label htmlFor="FOREST">FOREST</label>
        </div>
      </fieldset>
    </div>
  );
}

export default StatisticAxes;
