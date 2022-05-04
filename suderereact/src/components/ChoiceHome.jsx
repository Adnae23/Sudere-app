import React from 'react';

const ChoiceHome = () => {
    return (
        <div className='content'>
            <div className='content_train'>
                <img className='content_train_img' src='./pictures/train.jpg' alt='' />
                <h3 className='content_train_title'>Consultation</h3>
            </div>
            <div className='content_team'>
                <img className='content_team_img' src='./pictures/team.jpg' alt='' />
                <h3 className='content_team_title'>Connexion</h3>
            </div>
        </div>
    );
};

export default ChoiceHome;