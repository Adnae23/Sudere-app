import React from 'react';
import { useCookies } from 'react-cookie';
import CenterPage from './CenterPage';
import LeftPage from './LeftPage';
import RightPage from './RightPage';

function CommonPage() {
  const [cookies] = useCookies(['user_token']);
  console.log(cookies);
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
