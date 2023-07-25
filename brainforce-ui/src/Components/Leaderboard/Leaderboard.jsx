import React from "react";
import "./Leaderboard.css";
import Api from "../../utilities/api";

const LeaderboardRow = ({ data, index }) => {
  console.log(data);
  return (
    <tr
      key={index}
      className={`leaderboard-row ${index % 2 === 0 ? "even-row" : "odd-row"}`}
    >
      <td>{data.username}</td>
      <td>{data.points}</td>
      <td>{data.totalquiz}</td>
      <td>{data.created}</td>
    </tr>
  );
};

export default function Leaderboard({ userGlobal }) {
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
  return (
    <>
      {userGlobal ? (
        <div className="leaderboardPage-container">
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
