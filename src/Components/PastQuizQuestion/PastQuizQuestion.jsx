import React from "react";
import "../PastQuizQuestion/PastQuizQuestion.css";
import PastQuestionOption from "../PastQuestionOption/PastQuestionOption";

const PastQuizQuestion = ({ question, options, answer, selectedOption }) => {
  return (
    <>
      <div className="quiz-card">
        <h3 className="quiz-question">{question}</h3>
        <ul className="quiz-options">
          {options.map((option, index) => (
            <PastQuestionOption
              key={index}
              option={option}
              answer={answer}
              selectedOption={selectedOption}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default PastQuizQuestion;
