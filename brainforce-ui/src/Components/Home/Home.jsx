import React from "react";
import logo from "../../images/brainForce-logo.png";
import einstein from "../../images/einstein.png";
import hero from "../../images/bf.png";
import "./Home.css";
import lightbulb from "../../images/lightbulb.png";

export function Home() {
  return (
    <div className="homePage-container">
      <div className="lightbulb-container-left">
        <img src={lightbulb} alt="Lightbulb" />
      </div>

      <div className="hero-home-container">
        <section className="hero-title">
          <h3>Learn, Quiz, Conquer</h3>
        </section>

        <section className="hero-image">
          <img src={hero} alt="hero" />
        </section>

        <section className="hero-title-container">
          <h2>BrainForce!</h2>
        </section>

        <div className="homePage-title">
          <a href="/register" className="cta-button">
            Get Started
          </a>
          <p>Unlock your potential with BrainForce, the ultimate learning platform.</p>
        </div>

        <div className="footer">
          <p>&copy; 2023 BrainForce. All rights reserved.</p>
        </div>
      </div>

      <div className="lightbulb-container-right">
        <img src={lightbulb} alt="Lightbulb" />
      </div>
    </div>
  );
}
