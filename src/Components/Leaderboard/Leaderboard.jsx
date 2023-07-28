import React from "react";
import "./Leaderboard.css";
import Api from "../../utilities/api";
import { Progress } from "@mantine/core";
import ProgressBar from "../ProgressBar/ProgressBar";

const LeaderboardRow = ({ data, index} ) => {
  console.log(data);

  const dateString = data.created;
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "2-digit", // MM
    day: "2-digit", // DD
    year: "numeric" // YYYY
  });
  return (
    <tr
      key={index}
      className={`leaderboard-row ${index % 2 === 0 ? "even-row" : "odd-row"}`}
    >
      <td>{data.username}</td>
      <td>{data.points}</td>
      <td>{data.totalquiz}</td>
      <td>{formattedDate}</td>
    </tr>
  );
};

export default function Leaderboard({ userGlobal, progressBar, setProgressBar }) {
  const [leaderboardData, setLeaderboardData] = React.useState([]);

  React.useEffect(() => {
    try {
      Api.listUsers().then((response) => {
        setLeaderboardData(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  setProgressBar("conquer");
  return (
    <>
      {userGlobal ? (
        <div className="leaderboardPage-container">
          <ProgressBar progressBar={progressBar} />
          <div className="leaderboard-container">
            <h2>Leaderboard</h2>
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Points</th>
                  <th>Total Quizzes Taken</th>
                  <th>Date Joined</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((data, index) => (
                  <LeaderboardRow data={data} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flashcardPage-container">Please Log In</div>
      )}
    </>
  );
}
