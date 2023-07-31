import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlashcardPage from "../FlashcardPage/FlashcardPage";
import MakeCourse from "../MakeCourse/MakeCourse";
import Leaderboard from "../Leaderboard/Leaderboard";
import Report from "../Report/Report";
import Quiz from "../Quiz/Quiz";
import Api from "../../utilities/api";
import { useEffect, useState } from "react";
import Creator from "../Creators/Creator";
import Loader from "../Loader/Loader";
import ProgressBar from "../ProgressBar/ProgressBar";

function App() {
  const [progressBar, setProgressBar] = useState(null); 
  
  const [token, setToken] = useState(null);
  const [userGlobal, setUserGlobal] = useState();
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [sub, setSub] = useState("");
  const [flashcards, setFlashcards] = useState([
    { answer: "test", question: "test" },
  ]);
  const [questionOption, setQuestionOption] = useState(2);

  const [questions, setQuestions] = useState([
    {
      question: "What is the capital of France?",
      options: ["New York", "London", "Paris", "Dublin"],
      answer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["New York", "London", "Paris", "Dublin"],
      answer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["New York", "London", "Paris", "Dublin"],
      answer: "Paris",
    },
  ]);

  const handleAnswer = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
  };

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setToken(localStorage.getItem("jwt"));
      Api.user({ token: localStorage.getItem("jwt") }).then((response) => {
        setUserGlobal(response);
        console.log(userGlobal);
      });
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar token={token} setToken={setToken} userGlobal={userGlobal} />
        <Routes>
          <Route path="/" element={<Home userGlobal={userGlobal} />} />
          <Route
            path="/register"
            element={<Register userGlobal={userGlobal} />}
          />

          <Route
            path="/login"
            element={
              <Login
                setToken={setToken}
                setUserGlobal={setUserGlobal}
                userGlobal={userGlobal}
              />
            }
          />
          <Route
            path="/flashcard"
            element={
              <FlashcardPage
                userGlobal={userGlobal}
                flashcards={flashcards}
                setFlashcards={setFlashcards}
                setQuestions={setQuestions}
                questions={questions}
                subject={subject}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                sub={sub}
                setSub={setSub}
                questionOption={questionOption}
                setQuestionOption={setQuestionOption}
                setProgressBar={setProgressBar}
                progressBar={progressBar}
              />
            }
          />
          <Route
            path="/makecourse"
            element={
              <MakeCourse
                userGlobal={userGlobal}
                flashcards={flashcards}
                setFlashcards={setFlashcards}
                subject={subject}
                setSubject={setSubject}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                sub={sub}
                setSub={setSub}
                questionOption={questionOption}
                setQuestionOption={setQuestionOption}
                setProgressBar={setProgressBar}
              />
            }
          />
          <Route
            path="/leaderboard"
            element={<Leaderboard userGlobal={userGlobal}
            
            setProgressBar={setProgressBar}
            progressBar={progressBar}
            />}
           
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                userGlobal={userGlobal}
                questions={questions}
                setQuestions={setQuestions}
                setProgressBar={setProgressBar}
                progressBar={progressBar}
              />
            }
          ></Route>
          <Route path="/report" element={<Report userGlobal={userGlobal} />} />
          <Route
            path="/creators"
            element={<Creator userGlobal={userGlobal} />}
          ></Route>
          <Route
           path="/loader"
            
            element={<Loader userGlobal={userGlobal} />}
          ></Route>
            <Route
            path="/progress"
            
            element={<ProgressBar userGlobal={userGlobal} progressBar={progressBar}  setProgressBar={setProgressBar} />}
          ></Route>

         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
