/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function StatisticChoice() {
  return (
    <div>
      <fieldset>
        <legend>Choisir le status des remorques</legend>
        <div>
          <input type="checkbox" name="traitées" />
          <label htmlFor="traitées">Traitées</label>
        </div>
        <div>
          <input type="checkbox" name="partiellement traitées" />
          <label htmlFor="partiellement traitées">Partiellement traitées</label>
        </div>
        <div>
          <input type="checkbox" name="non-traitées" />
          <label htmlFor="non-traitées">Non-traitées</label>
        </div>
        <div>
          <input type="checkbox" name="jamais traitées" />
          <label htmlFor="jamais traitées">Jamais traitées</label>
        </div>
      </fieldset>
    </div>
  );
}

export default StatisticChoice;
