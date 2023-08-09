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
  setPoints,
}) => {
  const [selectedOption, setSelectedOptionLocal] = useState("");
  const [showChallengeButton, setShowChallengeButton] = useState(false);
  const [showExplanationButton, setShowExplanationButton] = useState(false);
  const [challengeResult, setChallengeResult] = useState(); // ["", "success", "failure"
  const [showPopup, setShowPopup] = useState(false);
  const [explanationData, setExplanationData] = useState("");
  const [explainLoading, setExplainLoading] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOptionLocal(option);
    setSelectedOption(option);
    setShowChallengeButton(option !== answer);
    setShowExplanationButton(option !== answer);
  };

  const handleChallenge = async () => {
    try {
      const challengeResult = await Api.challenge({
        question,
        selectedOption,
        options,
      });
      console.log(challengeResult);
      if (challengeResult.data.toLowerCase() == "true") {
        setChallengeResult("success");
        setPoints(points + worth);
        console.log("Challenge accepted! You gained 1 point.");
      } else if (challengeResult.data.toLowerCase() == "false") {
        setChallengeResult("failure");
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

  const handleExplanation = async () => {
    try {
      setExplainLoading(true); // Start loading animation
      const explanation = await Api.explain({
        question: question,
        selectedOption: selectedOption,
        options: options,
      });
      setExplanationData(explanation.data);
      setShowPopup(true);
      setTimeout(() => {
        setExplainLoading(false); // Stop loading animation
        setShowExplanationButton(false);
      }, 100);
    } catch (error) {
      console.log("Error during explanation:", error);
      setExplainLoading(false); // Stop loading animation in case of an error
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
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
        <span>
          {showChallengeButton && submitted ? (
            <button className="submit-quiz-button" onClick={handleChallenge}>
              Challenge
            </button>
          ) : null}

          {showExplanationButton && submitted ? (
            <button
              className={`loading-button ${
                explainLoading ? "loading" : ""
              } submit-quiz-button`}
              onClick={handleExplanation}
              disabled={explainLoading}
            >
              {explainLoading ? "Loading..." : "Explain"}
            </button>
          ) : null}
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-content">
                <span className="close-button" onClick={handleClosePopup}>
                  X
                </span>
                <p>{explanationData}</p>
              </div>
            </div>
          )}
          {challengeResult ? (
            <p>
              {challengeResult === "success"
                ? "Challenge accepted!"
                : "Challenge denied!"}
            </p>
          ) : null}
        </span>
      </div>
    </>
  );
};

export default QuizQuestion;
