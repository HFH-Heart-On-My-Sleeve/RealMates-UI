import React, { useState } from "react";
import FormQuestionLayout from '../form-question-layout';
import { FilterGrid, FilterDropdown } from '../filter-options';
import * as filterValues from '../../db';

import './index.scss';

const HelpSeekerForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSelection, setFormSelection] = useState({step1: [], step2: [], step3: []});

  switch (currentStep) {
    case 1:
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
          <h2>Other filters that might help you</h2>
          <FormQuestionLayout title="Someone with experience with...">
            <FilterGrid />
          </FormQuestionLayout>

          <FormQuestionLayout title="I am going to ask you another question?">
            <FilterGrid />
          </FormQuestionLayout>

          <FormQuestionLayout title="MOAR QUESTIONS!!!!">
            <FilterDropdown options={filterValues.situations} />
          </FormQuestionLayout>

          <button
            className="help-seeker-form__submit"
            onClick={() => console.log(formSelection)}>SUBMIT</button>
        </React.Fragment>
      )
  }
};

export default HelpSeekerForm;
