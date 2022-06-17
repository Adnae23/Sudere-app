import React from 'react';
import CenterPage from './CenterPage';
import RightPage from './RightPage';

function LeftConponents() {
  return (
    <div className="commonPage__isTrain">

      <div className="commonPage__isTrain__center">
        <CenterPage />
      </div>
      <div className="commonPage__isTrain__right">
        <RightPage />
      </div>
    </div>
  );
}

export default LeftConponents;
