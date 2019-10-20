import React from 'react';

const MatchCard = ({ imgUrl, name, description, filters }) => {
  const filtersToShow = filters.slice(0, 6);
  console.log("filtersToShow", filtersToShow);
  const restOfFiltersCount = filters.length - 5;

  return (
    <div className="match-dashbboard__match">
      <div>
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
      </div>
      <div className="match-dashbboard__match-filters">
        { filtersToShow.map(filter => <div key={filter} className="match-dashbboard__match-filter">{filter}</div>) }
        <p>+ { restOfFiltersCount } more</p>
      </div>
    </div>
  );
}

export default MatchCard;
