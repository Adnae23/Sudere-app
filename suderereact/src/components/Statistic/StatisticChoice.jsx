/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function StatisticChoice() {
  return (
    <div className="choice">
      <div className="choice__fieldset">
        <legend className="choice__fieldset__legend">Choisir le status des remorques</legend>
        <div className="choice__fieldset__div">
          <input className="choice__fieldset__div__input" type="checkbox" name="traitées" />
          <label className="choice__fieldset__div__label" htmlFor="traitées">Traitées</label>
        </div>
        <div className="choice__fieldset__div">
          <input className="choice__fieldset__div__input" type="checkbox" name="partiellement traitées" />
          <label className="choice__fieldset__div__label" htmlFor="partiellement traitées">Partiellement traitées</label>
        </div>
        <div className="choice__fieldset__div3">
          <input className="choice__fieldset__div__input" type="checkbox" name="non-traitées" />
          <label className="choice__fieldset__div__label" htmlFor="non-traitées">Non-traitées</label>
        </div>
        <div className="choice__fieldset__div4">
          <input className="choice__fieldset__div__input" type="checkbox" name="jamais traitées" />
          <label className="choice__fieldset__div__label" htmlFor="jamais traitées">Jamais traitées</label>
        </div>
      </div>
    </div>
  );
}

export default StatisticChoice;
