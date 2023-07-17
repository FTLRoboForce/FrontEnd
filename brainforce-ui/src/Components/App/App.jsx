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

function App() {
  const handleAnswer = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flashcard" element={<FlashcardPage />} />
        <Route path="/makecourse" element={<MakeCourse />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              question="What is the capital of France?"
              options={["Paris", "London", "Berlin", "Rome"]}
              onAnswer={handleAnswer}
            />
          }
        ></Route>
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
