import React from "react";
import { useEffect, useState } from "react";
import Api from "../../utilities/api";
import "./PreviousQuiz.css";

const PastQuizzesTable = ({ userGlobal }) => {
  const [pastQuizzes, setPastQuizzes] = useState([]);

  useEffect(() => {
    console.log(userGlobal);
    Api.listQuiz({ userid: userGlobal?.id }).then((result) => {
      setPastQuizzes(result);
    });
    console.log(pastQuizzes);
  }, [userGlobal]);

  return (
    <div className="leaderboardPage-container">
      <div className="leaderboard-container appear-animation">
        <h2>Past Quizzes</h2>
        <div className="leaderboard-titles">
          <div className="leaderboard-title">Quiz ID</div>
          <div className="leaderboard-title">Difficulty</div>
          <div className="leaderboard-title">Subject</div>
        </div>
        <div className="leaderboard-content">
          {pastQuizzes.map((quiz, index) => (
            <div
              key={quiz.quizId}
              className={`leaderboard-row ${
                index % 2 === 0 ? "even-row-color" : "odd-row-color"
              }`}
              onClick={() => {
                window.location = `/quiz/${quiz.quiz_id}`;
              }}
            >
              <div>{quiz.quiz_id}</div>
              <div>{quiz.difficulty}</div>
              <div>{quiz.subject}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastQuizzesTable;
