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
    userid: userGlobal?.id,
    questions: questions,
    points: points,
    subject: subject,
    difficulty: difficulty
  });

  useEffect(() => {
    //sets points worth depending on difficulty
    if (difficulty === "hard") {
      setPointWorth(5);
    } else if (difficulty === "medium") {
      setPointWorth(3);
    } else {
      setPointWorth(1);
    }

    //sets progress bar to the quiz checkpoint
    setProgressBar("quiz");

    //sets quiz object to the accurate current value
    setQuiz({
      userid: userGlobal?.id,
      questions: questions,
      points: points,
      subject: subject,
      difficulty: difficulty
    });
  }, [points]);

  const handleSubmit = async () => {
    //if quiz was not already submitted calculate points
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
    //make api request to add quiz to previous quiz table
    //make api request to add poitns to the users table
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
        questions.length > 0 ? (
          <>
            <div className="quiz-page">
              <ProgressBar progressBar={progressBar} />
              {difficulty === "hard" ? (
                <h1 className="quiz-points">Questions are worth 5 points</h1>
              ) : difficulty === "medium" ? (
                <h1 className="quiz-points">Questions are worth 3 points</h1>
              ) : (
                <h1 className="quiz-points">Questions are worth 1 point</h1>
              )}
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
                  <button
                    className="submit-quiz-button"
                    onClick={handleSubmit}
                    disabled={submitted}
                  >
                    Submit
                  </button>
                  {submitted ? (
                    <>
                      <p>Go to Leaderboard to Update Points</p>
                      <button
                        className="submit-quiz-button"
                        onClick={sendPoints}
                      >
                        Leaderboard
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flashcardPage-container">
            <button
              className="userActivityButton"
              onClick={() => (window.location = "/makecourse")}
            >
              Please Make a Course...
            </button>
          </div>
        )
      ) : (
        <div className="flashcardPage-container">Please Log In</div>
      )}
    </>
  );
};

export default Quiz;
