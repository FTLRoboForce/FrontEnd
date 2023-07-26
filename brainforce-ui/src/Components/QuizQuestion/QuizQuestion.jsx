import React, { useState } from "react";
import "./QuizQuestion.css";
import QuestionOption from "../QuestionOption/QuestionOption";

const QuizQuestion = ({
  question,
  options,
  answer,
  setSelectedOption,
  submitted
}) => {
  const [selectedOption, setSelectedOptionLocal] = useState("");

  const handleSelectOption = (option) => {
    setSelectedOptionLocal(option);
    setSelectedOption(option); // Pass the selected option back to the parent component (Quiz)
  };

  const getOptionClass = (option) => {
    if (submitted) {
      if (option === answer) {
        return "correct";
      } else if (option === selectedOption) {
        return "incorrect";
      }
    }
    return "";
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
              isSelected={selectedOption === option}
              handleSelect={() => handleSelectOption(option)}
              optionClass={getOptionClass(option)} // Pass the option class to indicate correct or incorrect
              disabled={submitted} // Disable options after the user submits the quiz
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default QuizQuestion;
