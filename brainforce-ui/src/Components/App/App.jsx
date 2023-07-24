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

function App() {
  const [token, setToken] = useState();
  const [userGlobal, setUserGlobal] = useState();

  const handleAnswer = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
  };

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setToken(localStorage.getItem("jwt"));
      Api.user({ token: localStorage.getItem("jwt") }).then((response) => {
        setUserGlobal(response);
      });
    }
  }, []);

  return (
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
          element={<FlashcardPage userGlobal={userGlobal} />}
        />
        <Route
          path="/makecourse"
          element={<MakeCourse userGlobal={userGlobal} />}
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard userGlobal={userGlobal} />}
        />
        <Route path="/quiz" element={<Quiz userGlobal={userGlobal} />}></Route>
        <Route path="/report" element={<Report userGlobal={userGlobal} />} />
        <Route path="/creators" element={<Creator userGlobal={userGlobal} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
