// Flashcard.js
import React, { useEffect, useState } from "react";
import "./Flashcard.css";

export default function Flashcard({ flashcard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [flashcard]);

  const handleFlipClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flashcard ${isFlipped ? "is-flipped" : ""}`}
      onClick={handleFlipClick}
    >
      <div className="flashcard__front">
        <p>{flashcard.front}</p>
      </div>
      <div className="flashcard__back">
        <p>{flashcard.back}</p>
      </div>
    </div>
  );
}
