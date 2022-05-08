import React from 'react';
import CenterPage from './CenterPage';
import LeftPage from './LeftPage';

function CommonPage() {
  return (
    <div className="commonPage">
      <div className="commonPage__left">
        <LeftPage />
      </div>
      <div className="commonPage__center">
        <CenterPage />
      </div>
      <div className="commonPage__right"> </div>
    </div>
  );
}

export default CommonPage;
