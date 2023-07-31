import "./Quiz.css";
import { useEffect, useState } from "react";
import QuizQuestion from "../QuizQuestion/QuizQuestion";
import Particle from "../../ParticleBackground/ParticleBackground";
import Api from "../../utilities/api";
import ProgressBar from "../ProgressBar/ProgressBar";

const Quiz = ({
  userGlobal,
  questions,
  setQuestions,
  progressBar,
  setProgressBar
}) => {
  const [points, setPoints] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [challengeResult, setChallengeResult] = useState(null);

  useEffect(() => {
    setProgressBar("quiz");
  }, []);

  useEffect(() => {}, []);

  const handleSubmit = async () => {
    if (!submitted) {
      let totalPoints = 0;
      questions.forEach((question) => {
        if (question.answer === question.selectedOption) {
          totalPoints++;
        }
      });
      setPoints(totalPoints);
      setSubmitted(true);
      console.log(points);
    }
  };

  const sendPoints = async () => {
    try {
      const response = await Api.updatePoints({
        email: userGlobal.email,
        points: points
      });
    } catch (error) {
      console.log(error);
    }
    window.location = "/leaderboard";
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
                  setChallengeResult={setChallengeResult}
                  points={points}
                  setPoints={setPoints}
                />
              ))}
              <div className="submit-quiz">
                {submitted && <p>Total Points: {points}</p>}
                <button onClick={handleSubmit} disabled={submitted}>
                  Submit
                </button>
                {submitted ? (
                  <>
                    <p>Go to Leaderboard to Update Points</p>
                    <button onClick={sendPoints}>Leaderboard</button>
                  </>
                ) : null}
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
