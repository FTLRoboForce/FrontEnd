import React from "react";
import loader from "../../images/lightbulb.png";
import bf from "../../images/bf.png";
import "./Loader.css";

const Loader = () => {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

  const username =capitalizeFirstLetter(localStorage.getItem("username"));
  return (
    <div className="loader-container">
      <h3 className="loading-title">
        {username}'s Quest to <span>Learn!</span>
      </h3>
      <div className="avatar-center">
      <div className="loader">
        <img src={bf} alt="loader" />
      </div>
      <div className="loader">
        <img src={bf} alt="loader" />
      </div>

      </div>
 
    </div>
  );
};

export default Loader;
