import React from 'react';
import CenterPage from './CenterPage';
import LeftPage from './LeftPage';
import RightPage from './RightPage';

function CommonPage() {
  return (
    <div className="commonPage">
      <div className="commonPage__left">
        <LeftPage />
      </div>
      <div className="commonPage__center">
        <CenterPage />
      </div>
      <div className="commonPage__right">
        <RightPage />
      </div>
    </div>
  );
}

export default CommonPage;
