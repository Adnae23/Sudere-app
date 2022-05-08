import React from 'react';

function LeftPage() {
  return (
    <div className="leftPage">
      <div className="leftPage__topBloc">
        <div className="leftPage__topBloc__left">
          <img src="../pictures/fleche_haut.png" alt="fleche-haut" className="leftPage__topBloc__left__img" />
        </div>
        <div className="leftPage__topBloc__right">
          <button className="leftPage__topBloc__right__returnButton" type="button">retour</button>
          <p>saisir un numéro de rame:</p>
          <input className="leftPage__topBloc__right__input" type="number" /* onChange={r} */ />
        </div>
      </div>
      <div className="leftPage__centerBloc">
        <div className="leftPage__centerBloc__title">
          <h4>SUDERE: CONSULTATION</h4>
        </div>
        <div className="leftPage__centerBloc__filters">
          <h4 className="leftPage__centerBloc__filters__title">STATS</h4>
          <button className="leftPage__centerBloc__filters__button" type="button">Général</button>
          <button className="leftPage__centerBloc__filters__button" type="button">Matériel</button>
          <button className="leftPage__centerBloc__filters__button" type="button">Axe</button>
        </div>
      </div>
      <div className="leftPage__bottomBloc">
        <img src="../pictures/groupe.png" alt="connexion" className="leftPage__bottomBloc__img" />
        <button className="leftPage__bottomBloc__button" type="submit">Connexion</button>
      </div>
    </div>
  );
}

export default LeftPage;
