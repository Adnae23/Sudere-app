import React from 'react';
import { NavLink } from 'react-router-dom';

function ChoiceHome() {
  return (
    <div className="content">
      <NavLink to="/CommonPage">
        <button type="button" className="content__train">
          <div className="content__train__img">
            <img className="content__train__img__1" src="./pictures/logo/train(2).jpg" alt="train" />
          </div>
          <h3 className="content__train__title">Consultation</h3>
        </button>
      </NavLink>
      <NavLink to="/Connexion">
        <button type="button" className="content__team">
          <div className="content__team__img">
            <img className="content__team__img__2" src="./pictures/logo/team.jpg" alt="team" />
          </div>
          <h3 className="content__team__title-1">Connexion</h3>
          <h3 className="content__team__title-2">(PC et Tablette)</h3>
        </button>
      </NavLink>
    </div>
  );
}

export default ChoiceHome;
