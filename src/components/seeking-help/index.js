import React from 'react';
import './index.scss';

const SeekingHelp = ({ onClick }) => (
  <React.Fragment>
    <h2>I would like to get help for...</h2>
    <div className="seeking-help__buttons">
      <button
        className="seeking-help__button"
        onClick={() => onClick({seekingHelpFor: "myself"})}
      >
        MYSELF
      </button>
      <button
        className="seeking-help__button"
        onClick={() => onClick({seekingHelpFor: "someone else"})}
      >
        SOMEONE ELSE
      </button>
    </div>
  </React.Fragment>
)

export default SeekingHelp;
