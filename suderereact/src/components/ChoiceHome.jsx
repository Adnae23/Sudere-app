import React from 'react';

function ChoiceHome() {
  return (
    <div className="content">
      <div className="content_train">
        <div className="content_train_img">
          <img className="content_train_img_1" src="./pictures/logo/train.jpg" alt="train" />
        </div>
        <h3 className="content_train_title">Consultation</h3>
      </div>
      <div className="content_team">
        <div className="content_team_img">
          <img className="content_team_img_2" src="./pictures/logo/team.jpg" alt="team" />
        </div>
        <h3 className="content_team_title-1">Connexion</h3>
        <h3 className="content_team_title-2">(PC et Tablette)</h3>
      </div>
    </div>
  );
}

export default ChoiceHome;
