import React from 'react';
import CenterPage from './CenterPage';

function CommonPage() {
  return (
    <div className="commonPage">
      <div className="commonPage__left"> </div>
      <div className="commonPage__center">
        <CenterPage />
      </div>
      <div className="commonPage__right"> </div>
    </div>
  );
}

export default CommonPage;
