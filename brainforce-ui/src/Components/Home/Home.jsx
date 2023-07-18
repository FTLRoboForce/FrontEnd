import React from "react";
import logo from "../../images/brainForce-logo.png";
import einstein from "../../images/einstein.png";
import hero  from "../../images/bf.png";
import "./Home.css";
import lightbulb from "../../images/lightbulb.png";

export function Home() {
  return (
    <>
    <div className="home">
      <header>
        <section className="hero-container">
          <section className="logo-container-home">
            <h3>Learn, Quiz, Conquer</h3>
            </section>
            <div className="hero-image-wrapper">
            <section className="hero-image-container">
            <img src={hero} alt = "hero image" />
              </section>
          <section className= "hero-title-container ">
            <h3>
              BrainForce!
            </h3>
          </section>
            </div>
 
        </section>

      </header>
      <main>
        <section className="heroo">
          <div className="hero-content">
          <a href="/register" className="cta-button">Get Started</a>
         
            <p>Unlock your potential with BrainForce, the ultimate learning platform.</p>
        
          </div>
        </section>

      </main>
      <footer>
        <p>&copy; 2023 BrainForce. All rights reserved.</p>
      </footer>
    </div>

    <div id="lightbulb-left">
      <img src= {lightbulb}>
      </img>
    </div>
    <div id="lightbulb-right">
      <img src= {lightbulb}>
      </img>
    </div>
    
    </>

  );
}
