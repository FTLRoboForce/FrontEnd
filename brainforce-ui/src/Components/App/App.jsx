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
import { useState } from "react";
import { Creator } from "../Creators/Creator";



function App() {
  const [token, setToken] = useState();
  const [userGlobal, setUserGlobal] = useState();

  const handleAnswer = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
  };

  return (

   
    
    <BrowserRouter>
      <Navbar token={token} setToken={setToken} userGlobal={userGlobal}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
     
        <Route
          path="/login"
          element={<Login setToken={setToken} setUserGlobal={setUserGlobal} />}
        />
        <Route path="/flashcard" element={<FlashcardPage />} />
        <Route path="/makecourse" element={<MakeCourse />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
