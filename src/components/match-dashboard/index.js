import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import MatchCard from './MatchCard';

import './index.scss';

const MatchDashboard = () => {
  const location = useLocation();
  const filters = decodeURIComponent(location.search).substring(9);
  const parsedFilters = JSON.parse(filters);
  console.log(JSON.parse(filters));

  fetch('https://2nc5so42ga.execute-api.ap-southeast-2.amazonaws.com/devrealmate/mate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({id: 1234, ...parsedFilters})
  }).then(res => console.log(res));

  return (
    <div className="match-dashbboard">
      <div className="match-dashbboard__content">
        <div className="match-dashbboard__filters-wrapper">
          <h2>My filters</h2>
          <p>I'm seeking help for <strong>{parsedFilters.seekingHelpFor}</strong>, and I want to talk to someone who: </p>

          <div className="match-dashbboard__filters">
            <div className="match-dashbboard__filter-group">
              <h5>Has these experiences:</h5>
              <div className="match-dashbboard__filter-group-tag-group">
                { !parsedFilters.conditions && !parsedFilters.feelings && !parsedFilters.situations && <div>You have not selected any filters for this category.</div> }
                { parsedFilters.conditions ? parsedFilters.conditions.map(condition => <div className="match-dashbboard__filter-group-tag">{condition}</div>) : null }
                { parsedFilters.feelings ? parsedFilters.feelings.map(condition => <div className="match-dashbboard__filter-group-tag">{condition}</div>) : null }
                { parsedFilters.situations ? parsedFilters.situations.map(condition => <div className="match-dashbboard__filter-group-tag">{condition}</div>) : null }
              </div>
            </div>

            <div className="match-dashbboard__filter-group">
              <h5>Has these qualities:</h5>
              <div className="match-dashbboard__filter-group-tag-group">
                { !parsedFilters.locations && <div>You have not selected any filters for this category.</div> }
                { parsedFilters.locations ? parsedFilters.locations.map(condition => <div className="match-dashbboard__filter-group-tag">{condition}</div>) : null }
              </div>
            </div>
          </div>

          <Link
            className="match-dashbboard__update"
            to="/"
          >
            UPDATE FILTERS
          </Link>
        </div>
        <div className="match-dashbboard__matches">
          <MatchCard
            name="Matt"
            description="I am your real mate and I am here to listen and help you make an action plan."
            imgUrl="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
            filters={[ "Depressive disorders", "Overwhelmed", "Lost" ]}
          />
          <MatchCard
            name="Matt"
            description="I am your real mate and I am here to listen and help you make an action plan."
            imgUrl="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
            filters={[ "Depressive disorders", "Overwhelmed", "Lost" ]}
          />
          <MatchCard
            name="Matt"
            description="I am your real mate and I am here to listen and help you make an action plan."
            imgUrl="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
            filters={[ "Depressive disorders", "Overwhelmed", "Lost" ]}
          />
          <MatchCard
            name="Matt"
            description="I am your real mate and I am here to listen and help you make an action plan."
            imgUrl="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
            filters={[ "Depressive disorders", "Overwhelmed", "Lost" ]}
          />
          <MatchCard
            name="Matt"
            description="I am your real mate and I am here to listen and help you make an action plan."
            imgUrl="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
            filters={[ "Depressive disorders", "Overwhelmed", "Lost" ]}
          />
          <MatchCard
            name="Matt"
            description="I am your real mate and I am here to listen and help you make an action plan."
            imgUrl="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
            filters={[ "Depressive disorders", "Overwhelmed", "Lost" ]}
          />
        </div>
      </div>
    </div>
  )
};

export default MatchDashboard;
