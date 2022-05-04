import React from 'react';

const ChoiceHome = () => {
    return (
        <div className='content'>
            <div className='content_train'>
                <div className='content_train_img'>
                    <img className='content_train_img_1' src='./pictures/train.jpg' alt='' />
                </div>
                <h3 className='content_train_title'>Consultation</h3>
            </div>
            <div className='content_team'>
                <div className='content_team_img'>
                    <img className='content_team_img_2' src='./pictures/team.jpg' alt='' />
                </div>
                <h3 className='content_team_title'>Connexion</h3>
            </div>
        </div>
    );
};

export default ChoiceHome;