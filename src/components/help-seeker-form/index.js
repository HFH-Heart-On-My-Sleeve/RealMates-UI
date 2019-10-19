import React, { useState } from "react";
import  { useHistory } from 'react-router-dom';
import SeekingHelp from '../seeking-help';
import { FilterGrid, FilterDropdown } from '../filter-options';
import * as filterValues from '../../db';

import './index.scss';

const HelpSeekerForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSelection, setFormSelection] = useState({});

  const saveSelected = (formPayload) => {
    setFormSelection({ ...formSelection, ...formPayload });
    setCurrentStep(currentStep + 1);
  }

  switch (currentStep) {
    case 1:
      return <SeekingHelp onClick={saveSelected} />;
    case 2:
      return <SecondPage onClick={saveSelected} />;
    default:
      return <ThirdPage onClick={(selected) => console.log({...formSelection, ...selected})} />;
  }
};

const SecondPage = ({ onClick }) => {
  const [selected, setSelected] = useState({});
  const updateSelected = (newKey, option) => {
      if (selected.hasOwnProperty(newKey)) {
        const newValue = { [newKey]: [...selected[newKey], option] }
        setSelected({...selected, ...newValue})
      } else {
        const newValue = { [newKey]: [ option] }
        setSelected({...selected, ...newValue})
      }
  };

  return (
    <React.Fragment>
      <h2>Who would you like to talk to?</h2>

      <FilterGrid onChangeKey="experience" onChange={updateSelected} title="Someone who has experience with..." options={filterValues.mentalIllnesses} />
      <FilterGrid onChangeKey="feelings" onChange={updateSelected} title="Understands feeling..." options={filterValues.feelings} />
      <FilterGrid onChangeKey="situations" onChange={updateSelected} title="Has experienced situations like..." options={filterValues.situations}/>

      <button
        className="help-seeker-form__submit"
        onClick={() => onClick(selected)}>CONTINUE</button>
    </React.Fragment>
  );
};

const ThirdPage = ({ onClick }) => {
  const history = useHistory();
  const [selected, setSelected] = useState({});
  const updateSelected = (newKey, option) => {
      if (selected.hasOwnProperty(newKey)) {
        const newValue = { [newKey]: [...selected[newKey], option] }
        setSelected({...selected, ...newValue})
      } else {
        const newValue = { [newKey]: [ option] }
        setSelected({...selected, ...newValue})
      }
  };

  return (
    <React.Fragment>
      <h2>Who would you like to talk to?</h2>
      <FilterDropdown onChangeKey="country" onChange={updateSelected} title="Someone who has been to..." options={filterValues.countries} />

      <button
        className="help-seeker-form__submit"
        onClick={() => {
          onClick(selected);
          history.push("/dashboard");
        }}>SUBMIT</button>
    </React.Fragment>
  );
}

export default HelpSeekerForm;
