import React from "react";
import "./Navbar.css";
import logo from "../../images/brainForce-logo.png";
import einstein from "../../images/einstein.png";
import { Creator } from "../Creators/Creator";

export function Navbar() {
 
  return (
    <nav className="nav-container">
      <section className="logo-container">
        <img
          src={logo}
          alt="BrainForce Logo"
          onClick={() => (window.location = "/")}
        />
        <h3>BrainForce</h3>
        
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
        <section id="navbar-login-container">
          <button onClick={() => (window.location = "/login")}>Login</button>
        </section>

        <section id="navbar-signup-container">
          <button onClick={() => (window.location = "/register")}>
            Sign Up
          </button>
        </section>
      </section>
    </nav>
  );
}
