import React from 'react';
import { NavLink } from 'react-router-dom';

function ChoiceHome() {
  return (
    <div className="content">
      <button type="button" className="content_train">
        <div className="content_train_img">
          <img className="content_train_img_1" src="./pictures/logo/train(2).jpg" alt="train" />
        </div>
        <h3 className="content_train_title">Consultation</h3>
      </button>
      <NavLink to="/Connexion">
        <button type="button" className="content_team">
          <div className="content_team_img">
            <img className="content_team_img_2" src="./pictures/logo/team.jpg" alt="team" />
          </div>
          <h3 className="content_team_title-1">Connexion</h3>
          <h3 className="content_team_title-2">(PC et Tablette)</h3>
        </button>
      </NavLink>
    </div>
  );
}

export default ChoiceHome;
