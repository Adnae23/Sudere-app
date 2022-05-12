import React from 'react';
import TrailersInfoConnect from './TrailersInfoConnect';
import TrailersInfoConsult from './TrailersInfoConsult';
import TrailersModifConnect from './TrailersModifConnect';

function RightPage() {
  return (
    <div className="rightPage">
      <div className="rightPage__connect">
        <div className="rightPage__connect__info">
          <TrailersInfoConnect />
        </div>
        <div className="rightPage__connect__modif">
          <TrailersModifConnect />
        </div>
      </div>
      <div className="rightPage__consult">
        <TrailersInfoConsult />
      </div>
    </div>
  );
}

export default RightPage;
