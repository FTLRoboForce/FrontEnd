import React, { useEffect, useState } from "react";
import ParticleBackground from "../../ParticleBackground/ParticleBackground";
import brainImage from "../../images/bf.png";
import einsteinImage from "../../images/einstein.png";
import "./Home.css";
import { IconCheck } from "@tabler/icons-react";

export function Home({ userGlobal }) {
  const [isBrainImage, setIsBrainImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBrainImage((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page ">
      <ParticleBackground />
      <div className="home-container">
        <div className="content">
          <h1 className="title">BrainForce!</h1>
          <p className="description">
            Unlock your potential with BrainForce, the ultimate learning
            platform.
          </p>

          <div className="check-container">
            <IconCheck size={28} stroke={3} className="check-icon" />
            <p className="check-text">
              <b>Learn</b> – from an extensive collection of courses on various
              topics to enhance your knowledge.
            </p>
          </div>
          <div className="check-container">
            <IconCheck size={28} stroke={3} className="check-icon" />
            <p className="check-text">
              <b>Quiz</b> – yourself with interactive quizzes to reinforce your
              understanding of the concepts.
            </p>
          </div>
          <div className="check-container">
            <IconCheck size={28} stroke={3} className="check-icon" />
            <p className="check-text">
              <b>Conquer</b> – your learning journey and achieve your goals with
              BrainForce's personalized learning path.
            </p>
          </div>

          <div className="group">
            {userGlobal ? (
              <button
                className="control"
                onClick={() => (window.location = "/makecourse")}
              >
                Make a Course
              </button>
            ) : (
              <button
                className="control"
                onClick={() => (window.location = "/register")}
              >
                Get started
              </button>
            )}
          </div>
        </div>
        <div className="image-container">
          <img
            src={isBrainImage ? brainImage : brainImage}
            className="animatedImage"
            alt="Brain"
          />
        </div>
      </div>
    </div>
  );
}
