import React from 'react';

const MatchCard = ({ imgUrl, name, description, filters }) => (
  <div className="match-dashbboard__match">
    <div className="match-dashbboard__match-avatar">
      <img
        className="match-dashbboard__match-image"
        src={imgUrl}
        alt={name}
      />
    </div>
    <h2>{name}</h2>
    <div className="match-dashbboard__match-desc">
      { description }
    </div>
    <div className="match-dashbboard__match-filters">
      { filters.map(filter => <div key={filter} className="match-dashbboard__match-filter">{filter}</div>) }
    </div>
  </div>
);

export default MatchCard;
