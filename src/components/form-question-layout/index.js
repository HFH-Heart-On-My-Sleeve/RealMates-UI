import React from "react";
import './index.scss';

const FormQuestionLayout = ({ title, children }) => {
  return (
    <div className="form-question-layout">
      <h3>{title}</h3>
      <div>
        {children}
      </div>
    </div>
  )
};

export default FormQuestionLayout;
