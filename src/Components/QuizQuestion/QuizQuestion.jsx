import React, { useState } from "react";
import "./QuizQuestion.css";
import QuestionOption from "../QuestionOption/QuestionOption";
import Api from "../../utilities/api";

const QuizQuestion = ({
  question,
  options,
  answer,
  worth,
  setSelectedOption,
  submitted,
  points,
  setPoints
}) => {
  const [selectedOption, setSelectedOptionLocal] = useState("");
  const [showChallengeButton, setShowChallengeButton] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOptionLocal(option);
    setSelectedOption(option);
    setShowChallengeButton(option !== answer);
  };

  const handleChallenge = async () => {
    try {
      const challengeResult = await Api.challenge({
        question,
        selectedOption,
        options
      });
      console.log(challengeResult);
      if (challengeResult.data.toLowerCase() == "true") {
        setPoints(points + worth);
        console.log("Challenge accepted! You gained 1 point.");
      } else if (challengeResult.data.toLowerCase() == "false") {
        setPoints(points - worth * 2);
        console.log("Challenge denied! You were penalized 2 points.");
      }

      // Set the challenge result in the parent component
      // Hide the challenge button after the challenge is resolved
      setShowChallengeButton(false);
    } catch (error) {
      console.log("Error during challenge:", error);
    }
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
              optionClass={getOptionClass(option)}
              disabled={submitted}
            />
          ))}
        </ul>
        {showChallengeButton && submitted ? (
          <p>
            You will be given the chance to challenge. If the challenge is
            successful you will receive the point(s). If it is not, you will be
            penalized double the points' worth.
          </p>
        ) : null}
        {showChallengeButton && submitted ? (
          <button onClick={handleChallenge}>Challenge</button>
        ) : null}
      </div>
    </>
  );
};

export default QuizQuestion;
