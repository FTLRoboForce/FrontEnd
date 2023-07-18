import React from "react";
import { useState, useEffect } from "react";
import "./Flashcard.css";

export default function Flashcard({ flashcard }) {
  const [isnotflipped, setisnotflipped] = useState();

  useEffect(() => {
    setisnotflipped(true);
  }, [flashcard]);

  return (
    <div className="flashcard">
      {isnotflipped ? (
        <div className="flashcard__front">
          <button
            onClick={() => {
              setisnotflipped(false);
            }}
          >
            <p>{flashcard.front}</p>
          </button>
        </div>
      ) : (
        <div className="flashcard__back">
          <button
            onClick={() => {
              setisnotflipped(true);
            }}
          >
            <p>{flashcard.back}</p>
          </button>
        </div>
      )}
    </div>
  );
}
