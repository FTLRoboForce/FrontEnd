import React from "react";
import { useState, useEffect } from "react";

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
            <div className="flashcard__front__text">
              <p>Front</p>
            </div>
          </button>
        </div>
      ) : (
        <div className="flashcard__back">
          <button
            onClick={() => {
              setisnotflipped(true);
            }}
          >
            <div className="flashcard__back__text">
              <p>Back</p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
