import React from 'react';
import { NavLink } from 'react-router-dom';

function ChoiceHome() {
  return (
    <div className="content">
      <NavLink className="content__nav" to="/CommonPage">
        <button type="button" className="content__nav__train">
          <div className="content__nav__train__img">
            <img className="content__nav__train__img__1" src="./pictures/logo/train(2).jpg" alt="train" />
          </div>
          <h3 className="content__nav__train__title">Consultation</h3>
        </button>
      </NavLink>
      <NavLink className="content__connect" to="/Connexion">
        <button type="button" className="content__connect__team">
          <div className="content__connect__team__img">
            <img className="content__connect__team__img__2" src="./pictures/logo/team.jpg" alt="team" />
          </div>
          <h3 className="content__connect__team__title-1">Connexion</h3>
        </button>
      </NavLink>
      <div className="content__connect__mobile">
        <button type="button" className="content__connect__mobile">
          <div className="content__connect__mobile__img">
            <img className="content__connect__mobile__img__2" src="./pictures/logo/team.jpg" alt="team" />
          </div>
          <h3 className="content__connect__mobile__title-1">Connexion</h3>
          <h3 className="content__connect__mobile__title-2">(PC et Tablette)</h3>
        </button>
      </div>
    </div>
  );
}

export default ChoiceHome;
