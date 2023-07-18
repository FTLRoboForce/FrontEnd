import React from "react";
import logo from "../../images/brainForce-logo.png";
import einstein from "../../images/einstein.png";
import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <header>
        <div className="logo-container">
          <img src={logo} alt="BrainForce Logo" />
          <h3>BrainForce</h3>
          
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Learn, Quiz, Conquer</h1>
            <p>Unlock your potential with BrainForce, the ultimate learning platform.</p>
            <a href="/register" className="cta-button">Get Started</a>
          </div>
        </section>
        <section className="flashcard-section">
        <div className="flashcard-container">
            <div className="flashcard">
              <div className="front">
                <img src={logo} alt="Front Side" />
              </div>
              <div className="back">
                <img src={einstein} alt="Back Side" />
              </div>
            </div>
          </div>
        
        </section>
      </main>
      <footer>
        <p>&copy; 2023 BrainForce. All rights reserved.</p>
      </footer>
    </div>
  );
}
