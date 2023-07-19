import React, { useState } from "react";
import "./QuizQuestion.css";
import QuestionOption from "../QuestionOption/QuestionOption";

const QuizQuestion = ({ question, options }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

  const handleSelectOption = (index) => {
    setSelectedOptionIndex(index);
  };

  return (
    <>
      <div className="quiz-card">
        <h3 className="quiz-question">{question}</h3>
        <ul className="quiz-options">
          {options.map((option, index) => (
            <QuestionOption
              key={index}
              option={option}
              isSelected={selectedOptionIndex === index}
              handleSelect={() => handleSelectOption(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default QuizQuestion;
