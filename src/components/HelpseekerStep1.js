import React from 'react';
import {useState} from 'react';


const HelpseekerStep1 = () => {
  const [step1, setStep1] = useState({});
  const handleEvent = (value) => {
    setStep1({
      step1: value
    })
  }
  return(
    <div>
      <button type="button" onClick={() => {handleEvent("rm")}}>Real Mate</button>
      <button type="button" onClick={() => {handleEvent("hs")}}>Help Seeker</button>
    </div>
  );
}

export default HelpseekerStep1;