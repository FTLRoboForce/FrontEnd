
import "./Quiz.css";
import { useEffect, useState } from "react";
import QuizQuestion from "../QuizQuestion/QuizQuestion";
import Particle from "../../ParticleBackground/ParticleBackground";
import Api from "../../utilities/api";
import ProgressBar from "../ProgressBar/ProgressBar";

const Quiz = ({ userGlobal, questions, setQuestions, progressBar,
  setProgressBar}) => {
  const [points, setPoints] = useState(0);
  setProgressBar("quiz");

  const [submitted, setSubmitted] = useState(false);
  const [userPoints, setUserPoints] = useState();

  const handleSubmit = () => {
    let totalPoints = 0;
    questions.forEach((question) => {
      if (question.answer === question.selectedOption) {
        totalPoints++;
      }
    });
    setPoints(totalPoints);
    console.log(userGlobal.points);
    try {
      Api.updatePoints({
        email: userGlobal.email,
        points: totalPoints
      });
    } catch (err) {
      console.log(err);
    }


    setSubmitted(true);
    setTimeout(() => {
      window.location = "/leaderboard";
    }, 1000);
  };

  return (
    <>
      {userGlobal ? (
        <>
        
            <div className="quiz-page">
            <ProgressBar progressBar={progressBar} />
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
                <div  className="submit-quiz">
                {submitted && <p>Total Points: {points}</p>}
                <button
                 
                  onClick={handleSubmit}
                  disabled={submitted}
                >
                  Submit
                </button>
              

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