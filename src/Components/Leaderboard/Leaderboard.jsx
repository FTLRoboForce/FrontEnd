import React, { useEffect, useState, useRef } from "react";
import "./Leaderboard.css"; // Updated CSS file with "2" in classnames
import Api from "../../utilities/api";
import ProgressBar from "../ProgressBar/ProgressBar"; // Updated ProgressBar component with "2" in classname
import { Avatar } from "@mantine/core";

const LeaderboardRow = ({ data, index, userGlobal }) => {
  const dateString = data.created;
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <tr className={`leaderboard-row2 ${index % 2 === 0 ? "even-row2" : "odd-row2"}`}>
      <td className="user-info2">
        <Avatar src={data?.photo} radius="xl" size={30} />
        <span className="username2">{data?.username}</span>
      </td>
      <td className="points2">{data.points}</td>
      <td className="total-quizzes2">{data.totalquiz}</td>
      <td className="date-joined2">{formattedDate}</td>
    </tr>
  );
};

export default function Leaderboard({
  userGlobal,
  progressBar,
  setProgressBar,
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
    if (leaderboardContainerRef.current) {
      leaderboardContainerRef.current.classList.add("appear-animation2");
    }
  }, []);

  setProgressBar("conquer");

  return (
    <>
      {userGlobal ? (
        <div className="leaderboardPage-container2">
          <ProgressBar progressBar={progressBar} />
          <div className="leaderboard-container2" ref={leaderboardContainerRef}>
            <h2>Leaderboard</h2>
            <table className="leaderboard-table2">
              <thead>
                <tr className="leaderboard-titles2">
                  <th className="leaderboard-title2">Username</th>
                  <th className="leaderboard-title2">Points</th>
                  <th className="leaderboard-title2">Total Quizzes Taken</th>
                  <th className="leaderboard-title2">Date Joined</th>
                </tr>
              </thead>
              <tbody className="leaderboard-content2">
                {leaderboardData.map((data, index) => (
                  <LeaderboardRow
                    key={index}
                    data={data}
                    index={index}
                    userGlobal={userGlobal}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flashcardPage-container2">Please Log In</div>
      )}
    </>
  );
}
