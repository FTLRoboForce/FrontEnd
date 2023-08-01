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
  setProgressBar,
  subject,
  difficulty
}) => {
  const [points, setPoints] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [challengeResult, setChallengeResult] = useState(null);
  const [pointWorth, setPointWorth] = useState(0);
  const [quiz, setQuiz] = useState({
    userid: userGlobal.id,
    questions: questions,
    points: points,
    subject: subject,
    difficulty: difficulty
  });

  useEffect(() => {
    if (difficulty === "hard") {
      setPointWorth(5);
    } else if (difficulty === "medium") {
      setPointWorth(3);
    } else {
      setPointWorth(1);
    }

    setProgressBar("quiz");
    setQuiz({
      userid: userGlobal.id,
      questions: questions,
      points: points,
      subject: subject,
      difficulty: difficulty
    });
  }, [points]);

  useEffect(() => {}, []);

  const handleSubmit = async () => {
    if (!submitted) {
      let totalPoints = 0;
      questions.forEach((question) => {
        if (question.answer === question.selectedOption) {
          totalPoints += pointWorth;
        }
      });
      setPoints(totalPoints);
      console.log(points);
      setSubmitted(true);
    }
  };

  const sendPoints = async () => {
    try {
      console.log(points);
      const result = await Api.addQuiz(quiz);
      const response = await Api.updatePoints({
        email: userGlobal.email,
        points: points
      });
      console.log(quiz);
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
                  worth={pointWorth}
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
