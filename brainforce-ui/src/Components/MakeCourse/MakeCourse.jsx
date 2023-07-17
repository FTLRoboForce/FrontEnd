// QuizOptions.js

import React, { useState } from "react";
import "./MakeCourse.css";

export default function MakeCourse() {
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission
    // You can perform additional actions based on the selected subject and difficulty

    // Reset state after form submission
    setSubject("");
    setDifficulty("");
  };

  return (
    <div className="course-options-container">
      <h2>Choose Course Options</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject">Select a subject:</label>
          <select
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            required
          >
            <option value="">-- Select Subject --</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="programming">Programming</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="difficulty">Select difficulty:</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={handleDifficultyChange}
            required
          >
            <option value="">-- Select Difficulty --</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button type="submit">Start Course</button>
      </form>
    </div>
  );
}
