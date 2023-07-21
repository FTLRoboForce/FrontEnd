import React, { useEffect, useState } from "react";
import logo from "../../images/brainForce-logo.png";
import einstein from "../../images/einstein.png";
import hero from "../../images/bf.png";
import "./Home.css";
import { Creator } from "../Creators/Creator";
import Particle from "../../ParticleBackground/ParticleBackground";





export function Home() {
  const titleCarousel = ["Learn", "Quiz", "Conquer", "Learn", "Quiz", "Conquer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % titleCarousel.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <Particle />
      <div className="homePage-container">
        <div className="side-bar"></div>

        <div className="hero-home-container">
          <section className="hero-title">
            {titleCarousel.map((title, index) => {
              const relativeIndex = (currentIndex + index) % titleCarousel.length;
              return (
                <h3
                  key={index}
                  className={index === relativeIndex ? "visible" : ""}
                >
                  {title}
                </h3>
              );
            })}
          </section>
          <section className="hero-image">
            <img src={hero} alt="hero" />
          </section>

          <section className="hero-title-container">
            <h2>BrainForce!</h2>
          </section>

          <div className="homePage-title">
            <a href="/register" className="homePage-cta-button">
              Get Started
            </a>
            <p>Unlock your potential with BrainForce, the ultimate learning platform.</p>
          </div>

          <div className="footer">
            <p>&copy; 2023 BrainForce. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
