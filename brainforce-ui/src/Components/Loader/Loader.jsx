import React from "react";
import "./Loader.css";
import lightbulbImage from "../../images/lightbulb.png";
import bfImage from "../../images/bf.png";

const Loader = () => {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const username = capitalizeFirstLetter(localStorage.getItem("username"));

  return (
    <div className="loader-container">
      <div className="loader-title">

        <div className="loader-text">
          A moment, <span className="loading-username">{username}</span>!
        </div>
        <img className="loader-image" src={bfImage} alt="BF" />
      </div>
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </div>
  );
};

export default Loader;
