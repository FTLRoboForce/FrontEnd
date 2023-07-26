import React from "react";
import "./QuestionOption.css";

const QuestionOption = ({ option, isSelected, handleSelect, optionClass }) => {
  return (
    <>
      <li
        className={`quiz-option ${isSelected ? "selected" : ""} ${optionClass}`}
        onClick={handleSelect}
      >
        {option}
      </li>
    </>
  );
};

export default QuestionOption;
