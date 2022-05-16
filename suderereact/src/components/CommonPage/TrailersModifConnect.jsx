import React from 'react';

function TrailersModifConnect() {
  return (
    <form className="formConnect">
      <div className="formConnect__date">
        <label className="formConnect__date__label" htmlFor="date__intervention">{'Date d\'intervention:'}</label>
        <input className="formConnect__delai__valeur" type="date" min="2022-01-01" />
      </div>
      <div className="formConnect__delai">
        <label className="formConnect__delai__label" htmlFor="duree__intervention">{'Durée d\'intervention:'}</label>
        <input className="formConnect__date__valeur" type="text" />
      </div>
      <div className="formConnect__valid">
        <button className="formConnect__valid__button" type="button">Valider</button>
      </div>
    </form>
  );
}

export default TrailersModifConnect;
