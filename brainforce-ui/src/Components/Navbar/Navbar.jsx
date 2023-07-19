import React from "react";
import "./Navbar.css";
import logo from "../../images/brainForce-logo.png";
import einstein from "../../images/einstein.png";

export function Navbar() {
  return (
    <div>
      <nav className="nav-container">
        <section className="logo-container">
          <img
            src={logo}
            alt="BrainForce Logo"
            onClick={() => (window.location = "/")}
          />
          
          <h3 style={{ padding: '10px' }}>BrainForce</h3>
          <section id="einstein-container1">
            <img src={einstein} alt="Einstein" />
          </section>
        </section>
        <section className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="/makecourse">Make Course</a>
            </li>
            <li>
              <a href="/flashcard">Previous Flashcard</a>
            </li>
            <li>
              <a href="/quiz">Previous Quizzes</a>
            </li>
            <li>
              <a href="/leaderboard">Leaderboard</a>
            </li>
          </ul>
        </section>

        <section className="user-activity-container">
          <ul className="user-activity">
            <section id="navbar-login-container">
              <button onClick={() => (window.location = "/login")}>
                Login
              </button>
            </section>

            <section id="navbar-signup-container">
              <button onClick={() => (window.location = "/register")}>
                Sign Up
              </button>
            </section>
          </ul>
          {/* <section id="einstein-container2">
            <img src={einstein} alt="Einstein" />
          </section> */}
        </section>
      </nav>
    </div>
  );
}
