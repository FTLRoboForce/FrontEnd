import React from "react";
import "./QuestionOption.css";

const QuestionOption = ({
  option,
  isSelected,
  handleSelect,
  optionClass,
  disabled
}) => {
  const handleClick = () => {
    if (!disabled) {
      handleSelect();
    }
  };

  return (
    <>
      <li
        disable={disabled}
        className={`quiz-option ${isSelected ? "selected" : ""} ${optionClass}`}
        onClick={handleClick}
      >
        {option}
      </li>
    </>
  );
};

export default QuestionOption;
