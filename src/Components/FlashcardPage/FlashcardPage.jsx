import React, { useEffect } from "react";
import Flashcard from "../Flashcard/Flashcard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FlashcardPage.css";
import { useState } from "react";
import Api from "../../utilities/api";
import Loader from "../Loader/Loader";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function FlashcardPage({
  userGlobal,
  flashcards,
  setQuestions,
  subject,
  difficulty,
  sub,
  questionOption,
  setQuestionOption,
  setProgressBar,
  progressBar,
}) {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  console.log("flashcards", flashcards);
  const [loading, setLoading] = useState(false);

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

  const createQuiz = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await Api.makeQuiz({
        subject: subject,
        difficultyLevel: difficulty,
        number: questionOption,
        optionalSection: sub,
      });
      setQuestions(JSON.parse(response.data));
      navigate("/quiz");
    } catch (error) {
      console.log(error);
      console.error("There was an error!", error);
    } finally {
      setLoading(false);
    }

    // Handle form submission
    // You can perform additional actions based on the selected subject and difficulty
  };

  setProgressBar("learn")
  console.log("this is the progress bar" , progressBar)

  return (
    <>
      
      {userGlobal ? (
        loading ? (
          <Loader />
        ) : (
          <div className="flashcardPage-container">
        
            <ProgressBar progressBar={progressBar}/>
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
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="flashcardPage-container">Please Log In</div>
      )}
    </>
  );
}
