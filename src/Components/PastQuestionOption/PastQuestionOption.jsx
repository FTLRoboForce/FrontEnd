import React from "react";
import { useEffect, useState } from "react";

export default function PastQuizOption({ option, answer, selectedOption }) {
  return (
    <>
      <li
        className={`quiz-option ${selectedOption === option ? "selected" : ""}`}
      >
        {option}
        {selectedOption === option && (
          <span
            className={`${selectedOption === answer ? "correct" : "incorrect"}`}
          >
            {selectedOption === answer ? "✓" : "✕"}
          </span>
        )}
      </li>
    </>
  );
}
