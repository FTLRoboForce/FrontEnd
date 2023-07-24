import React, { useEffect } from "react";
import Flashcard from "../Flashcard/Flashcard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FlashcardPage.css";
import { useState } from "react";

export default function FlashcardPage({
  userGlobal,
  flashcards,
  setQuestions,
  subject,
  difficulty,
}) {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  console.log("flashcards", flashcards);

  // make sure counter doesn't go more than the number of flashcards

  const handlePreviousClick = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(flashcards.length - 1);
    }
  };

  const handleNextClick = () => {
    if (counter < flashcards.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  const createQuiz = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3002/quiz", {
        subject: subject,
        difficulty: difficulty,
        number: 2,
        optional: "",
      })
      .then((response) => {
        setQuestions(JSON.parse(response.data.data));
        navigate("/quiz");
      })
      .catch((error) => {
        console.log(error);
        console.error("There was an error!", error);
      });
  };

  return (
    <>
      {userGlobal ? (
        <div className="flashcardPage-container">
          <div className="flashcard-container">
            <div className="flash-content">
              <Flashcard flashcard={flashcards[counter]} />
            </div>

            <div className="flash-buttons">
              {counter > 0 && (
                <button
                  className="flashcard-button"
                  onClick={() => {
                    handlePreviousClick();
                  }}
                >
                  Previous
                </button>
              )}

              {counter < flashcards.length - 1 ? (
                <button
                  className="flashcard-button"
                  onClick={() => {
                    handleNextClick();
                  }}
                >
                  Next
                </button>
              ) : (
                <button className="flashcard-button" onClick={createQuiz}>
                  Last Flashcard Button
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flashcardPage-container">Please Log In</div>
      )}
    </>
  );
}
