import React from 'react';
import { Link } from 'react-router-dom';

import MatchCard from './MatchCard';
import { FilterDropdown } from '../filter-options';
import * as filterValues from '../../db';

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
      <div className="match-dashbboard__filters-wrapper">
        <h2>My filters</h2>
        <p>I'm seeking help for <strong>myself</strong>, and I want to talk to someone who: </p>

        <div className="match-dashbboard__filters">
          <div className="match-dashbboard__filter-group">
            <h5>Has these experiences:</h5>
            <FilterDropdown title="Mental health ilness" options={filterValues.mentalIllnesses} onChange={() => {}} onChangeKey="" multi={true} />
            <FilterDropdown title="Feelings" options={filterValues.feelings} onChange={() => {}} onChangeKey="" multi={true} />
            <FilterDropdown title="Situations" options={filterValues.situations} onChange={() => {}} onChangeKey="" multi={true} />
            <FilterDropdown title="Country" options={filterValues.countries} onChange={() => {}} onChangeKey="" />
          </div>

          <div className="match-dashbboard__filter-group">
            <h5>Has these qualities:</h5>
            <FilterDropdown title="Mental health ilness" options={filterValues.mentalIllnesses} onChange={() => {}} onChangeKey="" multi={true} />
            <FilterDropdown title="Feelings" options={filterValues.feelings} onChange={() => {}} onChangeKey="" multi={true} />
            <FilterDropdown title="Situations" options={filterValues.situations} onChange={() => {}} onChangeKey="" multi={true} />
            <FilterDropdown title="Country" options={filterValues.countries} onChange={() => {}} onChangeKey="" />
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
);

export default MatchDashboard;
