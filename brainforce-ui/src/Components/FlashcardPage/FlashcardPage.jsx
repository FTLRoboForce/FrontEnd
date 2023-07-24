import React, { useEffect } from "react";
import Flashcard from "../Flashcard/Flashcard";
import "./FlashcardPage.css";
import { useState } from "react";

export default function FlashcardPage({ userGlobal, flashcards }) {
  const [counter, setCounter] = useState(0);

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

  return (
    <>
      {userGlobal ? (
        <div className="flashcardPage-container">
          <div className="flashcard-container">
            <div className="flash-content">
              <Flashcard flashcard={flashcards[counter]} />
            </div>

            <div className="flash-buttons">
              <button
                className="flashcard-button"
                onClick={() => {
                  handlePreviousClick();
                }}
              >
                Previous
              </button>
              <button
                className="flashcard-button"
                onClick={() => {
                  handleNextClick();
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flashcardPage-container">Please Log In</div>
      )}
    </>
  );
}
