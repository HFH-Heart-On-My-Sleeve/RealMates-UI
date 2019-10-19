import React from 'react';

import './index.scss';

const MatchDashboard = () => (
  <div className="match-dashbboard">
    <div className="match-dashbboard__availability">
      <h3>MY AVAILABILITY</h3>
      <div className="match-dashbboard__date-time">
        <p>Date</p>
        <p>Time</p>
      </div>
    </div>
    <div className="match-dashbboard__content">
      <div className="match-dashbboard__filters">Sidebar</div>
      <div className="match-dashbboard__matches">
        <p>Matches</p>
        <p>Matches</p>
        <p>Matches</p>
        <p>Matches</p>
        <p>Matches</p>
      </div>
    </div>
  </div>
);

export default MatchDashboard;
