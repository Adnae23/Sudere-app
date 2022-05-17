/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function StatisticSeries() {
  return (
    <div>
      <fieldset>
        <legend>Séries</legend>
        <div>
          <input type="checkbox" name="Sud-Est" />
          <label htmlFor="Sud-Est">Sud-Est</label>
        </div>
        <div>
          <input type="checkbox" name="Duplex" />
          <label htmlFor="Duplex">Duplex</label>
        </div>
        <div>
          <input type="checkbox" name="Réseau" />
          <label htmlFor="Réseau">Réseau</label>
        </div>
        <div>
          <input type="checkbox" name="Atlantique" />
          <label htmlFor="Atantlique">Atlantique</label>
        </div>
        <div>
          <input type="checkbox" name="Ouigo" />
          <label htmlFor="Ouigo">Ouigo</label>
        </div>
        <div>
          <input type="checkbox" name="2N2" />
          <label htmlFor="2N2">2N2</label>
        </div>
        <div>
          <input type="checkbox" name="POS" />
          <label htmlFor="POS">POS</label>
        </div>
        <div>
          <input type="checkbox" name="PLT" />
          <label htmlFor="PLT">PLT</label>
        </div>
        <div>
          <input type="checkbox" name="RTRI" />
          <label htmlFor="RTRI">RTRI</label>
        </div>
        <div>
          <input type="checkbox" name="TGVFutur" />
          <label htmlFor="TGVFutur">TGVFutur</label>
        </div>
      </fieldset>
    </div>
  );
}

export default StatisticSeries;
