import React from "react";
import FormQuestionLayout from '../form-question-layout';
import { FilterGrid } from '../filter-options';

const HelpSeekerForm = () => {
  return (
    <React.Fragment>
      <h2>Who would you like to talk to?</h2>
      <FormQuestionLayout title="Someone with experience with...">
        <FilterGrid />
      </FormQuestionLayout>

      <FormQuestionLayout title="I am going to ask you another question?">
        <FilterGrid />
      </FormQuestionLayout>

      <FormQuestionLayout title="MOAR QUESTIONS!!!!">
        <FilterGrid />
      </FormQuestionLayout>
    </React.Fragment>
  );
};

export default HelpSeekerForm;
