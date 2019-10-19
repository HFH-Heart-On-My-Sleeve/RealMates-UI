import React from 'react';
import './index.scss';

const SeekingHelp = ({ onClick }) => (
  <React.Fragment>
    <h2>I would like to get help for...</h2>
    <div className="seeking-help__buttons">
      <button className="seeking-help__button"  onClick={onClick}>MYSELF</button>
      <button className="seeking-help__button" onClick={onClick}>SOMEONE ELSE</button>
    </div>
  </React.Fragment>
)

export default SeekingHelp;
