import React, { useState } from "react";
import "./MakeCourse.css";
import einstein from "../../images/einstein.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Import images for subjects
import mathImage from "./math.png";
import scienceImage from "./science.png";
import programmingImage from "./coding.png";

// Import images for difficulty levels
import easyImage from "./green.png";
import mediumImage from "./yellow.png";
import hardImage from "./red.png";

//Import imgages for sub subjects
import algebraImage from "./algebra.png";
import geometryImage from "./geometry.png";
import statisticsImage from "./statistics.png";
import biologyImage from "./biology.png";
import physicsImage from "./physics.png";
import chemistryImage from "./chemistry.png";
import javascriptImage from "./javascript.png";
import pythonImage from "./python.png";
import javaImage from "./java.png";

export default function MakeCourse({
  userGlobal,
  setFlashcards,
  setSub,
  setDifficulty,
  setSubject,
  sub,
  difficulty,
  subject,
}) {
  const navigate = useNavigate();

  const handleSubjectChange = (selectedSubject) => {
    setSubject(selectedSubject);
  };

  const handleDifficultyChange = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  const handleSubChange = (selectedSub) => {
    setSub(selectedSub);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3002/flashcard", {
        subject: subject,
        difficultyLevel: difficulty,
        number: 2,
        optionalSection: sub,
      })
      .then((response) => {
        setFlashcards(JSON.parse(response.data.data));
        navigate("/flashcard");
      })
      .catch((error) => {
        console.log(error);
        console.error("There was an error!", error);
      });

    // Handle form submission
    // You can perform additional actions based on the selected subject and difficulty

    // Reset state after form submission
    setSubject("");
    setDifficulty("");
  };

  const isSubjectSelected = (selectedSubject) => {
    return subject === selectedSubject ? "selected" : "";
  };

  const isDifficultySelected = (selectedDifficulty) => {
    return difficulty === selectedDifficulty ? "selected" : "";
  };

  const isSubSelected = (selectedSub) => {
    return sub === selectedSub ? "selected" : "";
  };

  const [isTyping, setIsTyping] = useState(false);
  const [nameToShow, setNameToShow] = useState("");
  const username = localStorage.getItem("username");

  const handleTyping = () => {
    setIsTyping(true);
    let currentIndex = 0;
    const name = username;
    const interval = setInterval(() => {
      setNameToShow((prev) => prev + name[currentIndex]);
      currentIndex++;
      if (currentIndex === name.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 100);


  };


  useEffect(() => {
    handleTyping(username); // Start the typewriter animation when the component mounts
  }, []); 



  const isSubmitDisabled = !subject || !difficulty || !sub;

  return (
    <>
      {userGlobal ? (
        <div className="full-page-container">
           <h2>Welcome, <span>
           {nameToShow}
            </span></h2>
            <p>Embark on Your Learning Journey: Choose Your Course!</p>
          <div className="course-options-container">
           
            <form onSubmit={handleSubmit}>
              <div className="option-row">
                <label
                  htmlFor="math"
                  className={`option ${isSubjectSelected("math")}`}
                  onClick={() => handleSubjectChange("math")}
                >
                  <img id="math-img" src={mathImage} alt="Math" />
                  Math
                </label>
                <label
                  htmlFor="science"
                  className={`option ${isSubjectSelected("science")}`}
                  onClick={() => handleSubjectChange("science")}
                >
                  <img src={scienceImage} alt="Science" />
                  Science
                </label>
                <label
                  htmlFor="programming"
                  className={`option ${isSubjectSelected("programming")}`}
                  onClick={() => handleSubjectChange("programming")}
                >
                  <img src={programmingImage} alt="Programming" />
                  Programming
                </label>
              </div>

              <div className="option-row">
                <label
                  htmlFor="easy"
                  className={`option ${isDifficultySelected("easy")}`}
                  onClick={() => handleDifficultyChange("easy")}
                >
                  <img src={easyImage} alt="Easy" />
                  Easy
                </label>
                <label
                  htmlFor="medium"
                  className={`option ${isDifficultySelected("medium")}`}
                  onClick={() => handleDifficultyChange("medium")}
                >
                  <img src={mediumImage} alt="Medium" />
                  Medium
                </label>
                <label
                  htmlFor="hard"
                  className={`option ${isDifficultySelected("hard")}`}
                  onClick={() => handleDifficultyChange("hard")}
                >
                  <img src={hardImage} alt="Hard" />
                  Hard
                </label>
              </div>

              {subject === "math" ? (
                <div className="option-row">
                  <label
                    htmlFor="algebra"
                    className={`option ${isSubSelected("algebra")}`}
                    onClick={() => handleSubChange("algebra")}
                  >
                    <img src={algebraImage} alt="Algebra" />
                    Algebra
                  </label>
                  <label
                    htmlFor="geometry"
                    className={`option ${isSubSelected("geometry")}`}
                    onClick={() => handleSubChange("geometry")}
                  >
                    <img src={geometryImage} alt="Geometry" />
                    Geometry
                  </label>
                  <label
                    htmlFor="statistics"
                    className={`option ${isSubSelected("statistics")}`}
                    onClick={() => handleSubChange("statistics")}
                  >
                    <img src={statisticsImage} alt="Statistics" />
                    Statistics
                  </label>
                </div>
              ) : null}

              {subject === "science" ? (
                <div className="option-row">
                  <label
                    htmlFor="biology"
                    className={`option ${isSubSelected("biology")}`}
                    onClick={() => handleSubChange("biology")}
                  >
                    <img src={biologyImage} alt="Biology" />
                    Biology
                  </label>
                  <label
                    htmlFor="physics"
                    className={`option ${isSubSelected("physics")}`}
                    onClick={() => handleSubChange("physics")}
                  >
                    <img src={physicsImage} alt="Physics" />
                    Physics
                  </label>
                  <label
                    htmlFor="chemistry"
                    className={`option ${isSubSelected("chemistry")}`}
                    onClick={() => handleSubChange("chemistry")}
                  >
                    <img src={chemistryImage} alt="Chemistry" />
                    Chemistry
                  </label>
                </div>
              ) : null}

              {subject === "programming" ? (
                <div className="option-row">
                  <label
                    htmlFor="javascript"
                    className={`option ${isSubSelected("javascript")}`}
                    onClick={() => handleSubChange("javascript")}
                  >
                    <img src={javascriptImage} alt="Javascript" />
                    Javascript
                  </label>
                  <label
                    htmlFor="python"
                    className={`option ${isSubSelected("python")}`}
                    onClick={() => handleSubChange("python")}
                  >
                    <img src={pythonImage} alt="Python" />
                    Python
                  </label>
                  <label
                    htmlFor="java"
                    className={`option ${isSubSelected("java")}`}
                    onClick={() => handleSubChange("java")}
                  >
                    <img src={javaImage} alt="Java" />
                    Java
                  </label>
                </div>
              ) : null}

              <button
                className="make-course-button"
                type="submit"
                disabled={isSubmitDisabled}
              >
                Start Course
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flashcardPage-container">Please Log In</div>
      )}
    </>
  );
}
