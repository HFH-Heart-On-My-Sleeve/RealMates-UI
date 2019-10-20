import React, { useState } from "react";
import  { useHistory } from 'react-router-dom';
import SeekingHelp from '../seeking-help';
import { FilterGrid, FilterDropdown } from '../filter-options';
import * as filterValues from '../../db';

import './index.scss';

const transformToApiFormat = (payload, history) => {
  let transformed = payload;

  if (!!payload.locations) {
    transformed = { ...transformed, locations: payload.locations.map(v => v.value) }
  }
  if (!!payload.feelings) {
    transformed = { ...transformed, feelings: payload.feelings.map(v => v.value) }
  }
  if (!!payload.situations) {
    transformed = { ...transformed, situations: payload.situations.map(v => v.value) }
  }
  if (!!payload.conditions) {
    transformed = { ...transformed, conditions: payload.conditions.map(v => v.value) }
  }
  if (!!payload.agerange) {
    transformed = { ...transformed, agerange: payload.agerange.map(v => v.value) }
  }
  if (!!payload.languages) {
    transformed = { ...transformed, languages: payload.languages.map(v => v.value) }
  }

  console.log(transformed);
  fetch('https://2nc5so42ga.execute-api.ap-southeast-2.amazonaws.com/devrealmate/seeker', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify({id: 1234, ...transformed})
  });

  history.push(`/dashboard?filters=${JSON.stringify(transformed)}`);
}

const HelpSeekerForm = () => {
  const history = useHistory();
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
      return <ThirdPage onClick={(selected) => transformToApiFormat({...formSelection, ...selected}, history)} />;
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

      <FilterGrid onChangeKey="conditions" onChange={updateSelected} title="Someone who has experience with..." options={filterValues.mentalIllnesses} />
      <FilterGrid onChangeKey="feelings" onChange={updateSelected} title="Understands feeling..." options={filterValues.feelings} />
      <FilterGrid onChangeKey="situations" onChange={updateSelected} title="Has experienced situations like..." options={filterValues.situations}/>

      <button
        className="help-seeker-form__submit"
        onClick={() => onClick(selected)}>CONTINUE</button>
    </React.Fragment>
  );
};

const ThirdPage = ({ onClick }) => {
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

      <FilterDropdown onChangeKey="locations" onChange={updateSelected} title="Someone from.." options={filterValues.countries} />
      <FilterDropdown onChangeKey="languages" onChange={updateSelected} title="Someone who can speak..." options={filterValues.languages} />
      <FilterDropdown onChangeKey="agerange" onChange={updateSelected} title="Someone who is aged between..." options={filterValues.agerange} />

      <button
        className="help-seeker-form__submit"
        onClick={() => onClick(selected)}>SUBMIT</button>
    </React.Fragment>
  );
}

export default HelpSeekerForm;
