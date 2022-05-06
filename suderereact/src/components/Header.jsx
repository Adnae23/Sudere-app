import React from 'react';
import { Outlet } from 'react-router-dom';
// import Connexion from './Connexion';

function Header() {
  return (
    <div className="global">
      <div className="global_header">
        <div className="global_header_logo">
          <img className="global_header_logo_sncf" src="./pictures/logo/LOGO_SNCF_GROUPE_WEB.jpg" alt="sncf" />
        </div>
        <div className="global_header_title">
          <h1 className="global_header_title_h1">SUDERE TGV</h1>
          <h2 className="global_header_title_h2">SUivi du DEtartrage des RamEs TGV</h2>
        </div>
        <div className="global_header_logo-2">
          <img className="global_header_logo_sncf" src="./pictures/logo/LOGO_SNCF_GROUPE_WEB.jpg" alt="sncf" />
        </div>
      </div>
      {/* <Connexion /> */}
      <Outlet />
      <div className="global_footer">
        <div className="global_footer_logo-3">
          <img className="global_footer_logo-3_sncf" src="./pictures/logo/LOGO_SNCF_GROUPE_WEB.jpg" alt="sncf" />
        </div>
      </div>
    </div>
  );
}

export default Header;
