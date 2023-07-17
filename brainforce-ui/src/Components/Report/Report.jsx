import React, { useState } from "react";
import "./Report.css";

export default function Report() {
  const [questionNumber, setQuestionNumber] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the questionNumber and explanation values from the state
  };

  return (
    <div className="report-problem-container">
      <h2>Report a Problem</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <label>Question Number:</label>
          <input
            type="text"
            value={questionNumber}
            onChange={(e) => setQuestionNumber(e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Explanation:</label>
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
