import React from 'react';
import ChoiceHome from './ChoiceHome';

const Header = () => {
    return (
        <div className='global_header'>
            <div className='header'>
                <div className='hearder_logo'>
                    <img className='header_logo_sncf' src='./pictures/LOGO_SNCF_GROUPE_WEB.jpg' alt='' />
                </div>
                <div className='header_title'>
                    <h1 className='header_title_h1'>SUDERE TGV</h1>
                    <h2 className='header_title_h2'>SUivi du DEtartrage des RamEs TGV</h2>
                </div>
            </div>
            <ChoiceHome />
            <div className='footer'>
                <img className='footer_logo' src='./pictures/LOGO_SNCF_GROUPE_WEB.jpg' alt='' />
            </div>
        </div>
    );
};

export default Header;