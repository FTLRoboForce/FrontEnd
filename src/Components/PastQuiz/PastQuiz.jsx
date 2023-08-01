import React from "react";
import { useEffect, useState } from "react";
import Api from "../../utilities/api";
import "../Quiz/Quiz.css";
import PastQuizQuestion from "../PastQuizQuestion/PastQuizQuestion";
import { useParams } from "react-router-dom";

const PastQuiz = ({ pastQuizzes, userGlobal }) => {
  const [pastQuiz, setPastQuiz] = useState();
  const { id } = useParams();
  const [questions, setQuestions] = useState();

  useEffect(() => {
    if (pastQuizzes.length > 0 && id !== null && id !== undefined) {
      const filteredQuiz = pastQuizzes.find((quiz) => quiz.quiz_id == id);
      setPastQuiz(filteredQuiz || []);
      setQuestions(filteredQuiz.questions);
    }
  }, [id, pastQuizzes]);

  return (
    <>
      {userGlobal ? (
        <>
          <div className="quiz-page">
            <div className="quiz-container">
              {questions?.map((question, index) => (
                <PastQuizQuestion
                  key={index}
                  question={question.question}
                  options={question.options}
                  answer={question.answer}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flashcardPage-container">Please Log In</div>
      )}
    </>
  );
};

export default PastQuiz;
