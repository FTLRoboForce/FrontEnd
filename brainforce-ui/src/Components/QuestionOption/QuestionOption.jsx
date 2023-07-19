import React from "react";
import "./QuestionOption.css";

const QuestionOption = ({ option, isSelected, handleSelect }) => {
  return (
    <>
      <li
        className={`quiz-option ${isSelected ? "selected" : ""}`}
        onClick={handleSelect}
      >
        {option}
      </li>
    </>
  );
};

export default QuestionOption;
