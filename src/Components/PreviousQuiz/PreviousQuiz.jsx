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
    <div>
      <h2>Past Quizzes</h2>
      <table>
        <thead>
          <tr>
            <th>Quiz ID</th>
            <th>Difficulty</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {pastQuizzes?.map((quiz) => (
            <tr key={quiz.quiz_id}>
              <td>{quiz.quiz_id}</td>
              <td>{quiz.difficulty}</td>
              <td>{quiz.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PastQuizzesTable;
