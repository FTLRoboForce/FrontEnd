import React from "react";
import { useState, useEffect } from "react";
import "./Flashcard.css";

export default function Flashcard() {
  const [isnotflipped, setisnotflipped] = useState();

  useEffect(() => {
    setisnotflipped(true);
  }, []);

  return (
    <div className="flashcard">
      {isnotflipped ? (
        <div className="flashcard__front">
          <button
            onClick={() => {
              setisnotflipped(false);
            }}
          >
            <p>Front</p>
          </button>
        </div>
      ) : (
        <div className="flashcard__back">
          <button
            onClick={() => {
              setisnotflipped(true);
            }}
          >
            <p>Back</p>
          </button>
        </div>
      )}
    </div>
  );
}
