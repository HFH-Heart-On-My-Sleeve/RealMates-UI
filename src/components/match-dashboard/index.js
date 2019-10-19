import React from 'react';

import MatchCard from './MatchCard';

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
);

export default MatchDashboard;
