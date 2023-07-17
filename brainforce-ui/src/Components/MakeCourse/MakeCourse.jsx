// QuizOptions.js

import React, { useState } from "react";
import "./MakeCourse.css";

// Import images for subjects
import mathImage from "./math.png";
import scienceImage from "./science.png";
import programmingImage from "./coding.png";

// Import images for difficulty levels
import easyImage from "./green.png";
import mediumImage from "./yellow.png";
import hardImage from "./red.png";

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
        <div className="option-row">
          <label htmlFor="math">
            <img src={mathImage} alt="Math" />
            <input
              type="radio"
              id="math"
              name="subject"
              value="math"
              checked={subject === "math"}
              onChange={handleSubjectChange}
              required
            />
            Math
          </label>
          <label htmlFor="science">
            <img src={scienceImage} alt="Science" />
            <input
              type="radio"
              id="science"
              name="subject"
              value="science"
              checked={subject === "science"}
              onChange={handleSubjectChange}
              required
            />
            Science
          </label>
          <label htmlFor="programming">
            <img src={programmingImage} alt="Programming" />
            <input
              type="radio"
              id="programming"
              name="subject"
              value="programming"
              checked={subject === "programming"}
              onChange={handleSubjectChange}
              required
            />
            Programming
          </label>
        </div>

        <div className="option-row">
          <label htmlFor="easy">
            <img src={easyImage} alt="Easy" />
            <input
              type="radio"
              id="easy"
              name="difficulty"
              value="easy"
              checked={difficulty === "easy"}
              onChange={handleDifficultyChange}
              required
            />
            Easy
          </label>
          <label htmlFor="medium">
            <img src={mediumImage} alt="Medium" />
            <input
              type="radio"
              id="medium"
              name="difficulty"
              value="medium"
              checked={difficulty === "medium"}
              onChange={handleDifficultyChange}
              required
            />
            Medium
          </label>
          <label htmlFor="hard">
            <img src={hardImage} alt="Hard" />
            <input
              type="radio"
              id="hard"
              name="difficulty"
              value="hard"
              checked={difficulty === "hard"}
              onChange={handleDifficultyChange}
              required
            />
            Hard
          </label>
        </div>

        <button className="make-course-button" type="submit">
          Start Course
        </button>
      </form>
    </div>
  );
}
