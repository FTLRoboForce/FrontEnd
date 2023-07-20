import React, { useEffect } from "react";
import Flashcard from "../Flashcard/Flashcard";
import "./FlashcardPage.css";
import { useState } from "react";

export default function FlashcardPage() {
  const [counter, setCounter] = useState(0);
  const [flashcards, setFlashcards] = useState([
    {
      front: "Front 1",
      back: "Back 1"
    },
    {
      front: "Front 2",
      back: "Back 2"
    },
    {
      front: "Front 3",
      back: "Back 3"
    }
  ]);

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
    
    <div className= "flashcardPage-container">

    
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
    </>

  );
}
