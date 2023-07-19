import "./Quiz.css";
import { useState } from "react";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const Quiz = () => {
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

  return (
    <>
      {questions.map((question, index) => (
        <QuizQuestion
          key={index}
          question={question.question}
          options={question.options}
        />
      ))}
    </>
  );
};

export default Quiz;
