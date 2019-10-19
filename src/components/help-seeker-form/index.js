import React, { useState } from "react";
import FormQuestionLayout from '../form-question-layout';
import { FilterGrid, FilterDropdown } from '../filter-options';
import {countries} from '../../db/hardcoded-country';

import './index.scss';

const HelpSeekerForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSelection, setFormSelection] = useState({step1: [], step2: [], step3: []});

  switch (currentStep) {
    case 1:
      return (
        <React.Fragment>
          <h2>Who would you like to talk to?</h2>
          <FormQuestionLayout title="Someone with experience with...">
            <FilterGrid />
          </FormQuestionLayout>

          <FormQuestionLayout title="I am going to ask you another question?">
            <FilterDropdown options={countries} />
          </FormQuestionLayout>

          <FormQuestionLayout title="MOAR QUESTIONS!!!!">
            <FilterGrid />
          </FormQuestionLayout>

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
            <FilterDropdown options={countries} />
          </FormQuestionLayout>

          <button
            className="help-seeker-form__submit"
            onClick={() => console.log(formSelection)}>SUBMIT</button>
        </React.Fragment>
      )
  }
};

export default HelpSeekerForm;
