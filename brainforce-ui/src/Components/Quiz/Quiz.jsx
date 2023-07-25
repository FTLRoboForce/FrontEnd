import "./Quiz.css";
import { useState } from "react";
import QuizQuestion from "../QuizQuestion/QuizQuestion";
import Particle from "../../ParticleBackground/ParticleBackground";

const Quiz = ({ userGlobal, questions, setQuestions }) => {
  const [points, setPoints] = useState(0);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    let totalPoints = 0;
    questions.forEach((question) => {
      if (question.answer === question.selectedOption) {
        totalPoints++;
      }
    });
    setPoints(totalPoints);
    setSubmitted(true);
  };

  return (
    <>
      {userGlobal ? (
        <>
        <div className="particle-div">

        
          <Particle />
          <div className="quiz-page">
            <div className="quiz-container">
              {questions.map((question, index) => (
                <QuizQuestion
                  key={index}
                  question={question.question}
                  options={question.options}
                  answer={question.answer}
                  setSelectedOption={(option) => {
                    const updatedQuestions = [...questions];
                    updatedQuestions[index].selectedOption = option;
                    setQuestions(updatedQuestions);
                  }}
                  submitted={submitted}
                />
              ))}

              <button
                className="submit-quiz"
                onClick={handleSubmit}
                disabled={submitted}
              >
                Submit
              </button>

              {submitted && <p>Total Points: {points}</p>}
            </div>
          </div>
          </div>
        </>
      ) : (
        <div className="flashcardPage-container">Please Log In</div>
        
      )}
      
    </>
  );
};

export default Quiz;
