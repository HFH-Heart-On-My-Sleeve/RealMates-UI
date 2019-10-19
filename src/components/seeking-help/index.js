import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const SeekingHelp = () => (
  <React.Fragment>
    <h2>I would like to get help for...</h2>
    <div className="seeking-help__links">
      <Link className="seeking-help__link" to="/help-seeker">MYSELF</Link>
      <Link className="seeking-help__link"to="/help-seeker">SOMEONE ELSE</Link>
    </div>
  </React.Fragment>
)

export default SeekingHelp;
