/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function StatisticCenters() {
  return (
    <div>
      <fieldset>
        <legend>Centers</legend>
        <div>
          <input type="checkbox" name="TSEE" />
          <label htmlFor="TSEE">TSEE</label>
        </div>
        <div>
          <input type="checkbox" name="TLG" />
          <label htmlFor="TLG">TLG</label>
        </div>
        <div>
          <input type="checkbox" name="TLL" />
          <label htmlFor="TLL">TLL</label>
        </div>
        <div>
          <input type="checkbox" name="NST" />
          <label htmlFor="NST">NST</label>
        </div>
        <div>
          <input type="checkbox" name="TALT" />
          <label htmlFor="TALT">TALT</label>
        </div>
        <div>
          <input type="checkbox" name="TEE" />
          <label htmlFor="TEE">TEE</label>
        </div>
        <div>
          <input type="checkbox" name="Aucun" />
          <label htmlFor="Aucun">Aucun</label>
        </div>
      </fieldset>
    </div>
  );
}

export default StatisticCenters;
