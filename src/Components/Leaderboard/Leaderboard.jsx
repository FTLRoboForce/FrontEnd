import React, { useEffect, useState, useRef } from "react";
import "./Leaderboard.css";
import Api from "../../utilities/api";
import ProgressBar from "../ProgressBar/ProgressBar";

const LeaderboardRow = ({ data, index }) => {
  const dateString = data.created;
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "2-digit", // MM
    day: "2-digit", // DD
    year: "numeric" // YYYY
  });

  return (
    <div
      className={`leaderboard-row ${index % 2 === 0 ? "even-row" : "odd-row"}`}
    >
      <p>{data.username}</p>
      <p>{data.points}</p>
      <p>{data.totalquiz}</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default function Leaderboard({
  userGlobal,
  progressBar,
  setProgressBar
}) {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const leaderboardContainerRef = useRef(null);

  useEffect(() => {
    try {
      Api.listUsers().then((response) => {
        setLeaderboardData(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    // Add a cool animation when the user gets on the page
    if (leaderboardContainerRef.current) {
      leaderboardContainerRef.current.classList.add("appear-animation");
    }
  }, []);

  setProgressBar("conquer");

  return (
    <>
      {userGlobal ? (
        <div className="leaderboardPage-container">
          <ProgressBar progressBar={progressBar} />
          <div className="leaderboard-container" ref={leaderboardContainerRef}>
            <h2>Leaderboard</h2>
            <div className="leaderboard-titles">
              <p className="leaderboard-title">Username</p>
              <p className="leaderboard-title">Points</p>
              <p className="leaderboard-title">Total Quizzes Taken</p>
              <p className="leaderboard-title">Date Joined</p>
            </div>
            <div className="leaderboard-content">
              {leaderboardData.map((data, index) => (
                <LeaderboardRow key={index} data={data} index={index} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flashcardPage-container">Please Log In</div>
      )}
    </>
  );
}
