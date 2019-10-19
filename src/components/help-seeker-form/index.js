import React, { useState } from "react";
import SeekingHelp from '../seeking-help';
import { FilterGrid, FilterDropdown } from '../filter-options';
import * as filterValues from '../../db';

import './index.scss';

const HelpSeekerForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSelection, setFormSelection] = useState({step1: [], step2: [], step3: []});

  const saveSelected = (formPayload) => {
    setFormSelection({ ...formSelection, ...formPayload });
    setCurrentStep(currentStep + 1);
  }

  switch (currentStep) {
    case 1:
      return <SeekingHelp onClick={saveSelected} />;
    case 2:
      return (
        <React.Fragment>
          <h2>Who would you like to talk to?</h2>

          <FilterGrid title="Someone who has experience with..." options={filterValues.mentalIllnesses} />
          <FilterGrid title="Understands feeling..." options={filterValues.feelings} />
          <FilterGrid title="Has experienced situations like..." options={filterValues.situations}/>

          <button
            className="help-seeker-form__submit"
            onClick={() => setCurrentStep(currentStep + 1)}>CONTINUE</button>
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <h2>Who would you like to talk to?</h2>
          <FilterDropdown title="Someone who has been to..." options={filterValues.countries} />

          <button
            className="help-seeker-form__submit"
            onClick={() => console.log(formSelection)}>SUBMIT</button>
        </React.Fragment>
      )
  }
};

export default HelpSeekerForm;
