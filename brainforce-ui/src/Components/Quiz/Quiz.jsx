import "./Quiz.css";
import { useState } from "react";

const Quiz = ({ question, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleAnswer = () => {
    if (selectedOption) {
      onAnswer(selectedOption);
      setSelectedOption(null);
    }
  };

  return (
    <>
      <div className="quiz-card">
        <h3 className="quiz-question">{question}</h3>
        <ul className="quiz-options">
          {options.map((option, index) => (
            <li
              key={index}
              className={`quiz-option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="quiz-button-container">
        <button className="quiz-submit" onClick={handleAnswer}>
          Submit Answer
        </button>
      </div>
    </>
  );
};

export default Quiz;
