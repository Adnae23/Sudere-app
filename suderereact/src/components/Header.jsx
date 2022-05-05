import React from 'react';
import ChoiceHome from './ChoiceHome';

function Header() {
  return (
    <div className="global">
      <div className="global_header">
        <div className="global_header_logo">
          <img className="global_header_logo_sncf" src="./pictures/LOGO_SNCF_GROUPE_WEB.jpg" alt="" />
        </div>
        <div className="global_header_title">
          <h1 className="global_header_title_h1">SUDERE TGV</h1>
          <h2 className="global_header_title_h2">SUivi du DEtartrage des RamEs TGV</h2>
        </div>
      </div>
      <ChoiceHome />
      <div className="global_footer" />
    </div>
  );
}

export default Header;
