import "./Quiz.css";
import { useState } from "react";
import QuizQuestion from "../QuizQuestion/QuizQuestion";
import Particle from "../../ParticleBackground/ParticleBackground";

const Quiz = ({ userGlobal }) => {
  const [points, setPoints] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: "What is the capital of France?",
      options: ["New York", "London", "Paris", "Dublin"],
      answer: "Paris"
    },
    {
      question: "Who is CEO of Tesla?",
      options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
      answer: "Elon Musk"
    },
    {
      question: "The iPhone was created by which company?",
      options: ["Apple", "Intel", "Amazon", "Microsoft"],
      answer: "Apple"
    },
    {
      question: "How many Harry Potter books are there?",
      options: ["1", "4", "6", "7"],
      answer: "7"
    }
  ]);

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
        </>
      ) : (
        <div className="flashcardPage-container">Please Log In</div>
      )}
    </>
  );
};

export default Quiz;
