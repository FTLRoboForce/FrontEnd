import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Api from "../../utilities/api";
import ParticleBackground from "../../ParticleBackground/ParticleBackground";

export function Login({ setToken, setUserGlobal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({ email: email, password: password });
  const [name, setName] = useState();
  const navigate = useNavigate();

  function handleOnSubmit(event) {
    event.preventDefault();
    Api.login(user)
      .then((response) => {
        localStorage.setItem("jwt", response.token);
        setToken(response.token);
      })
      .then(() => {
        Api.user({ token: localStorage.getItem("jwt") }).then((response) => {
          setUserGlobal(response);
          setName(response.firstname + " " + response.lastname);
        });
      });
    // navigate("/activity");
  }

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      Api.user({ token: localStorage.getItem("jwt") }).then((response) => {
        setUserGlobal(response);
        setName(response.firstname + " " + response.lastname);
      });
    }
  }, [user]);

  function handleOnChangeLoginEmail(email) {
    setEmail(email);
    setUser({ email: email, password: password });
  }

  function handleOnChangeLoginPassword(password) {
    setPassword(password);
    setUser({ email: email, password: password });
  }

  return (
    <>
    <ParticleBackground/>
    
   
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-heading">Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              onChange={(event) => {
                handleOnChangeLoginEmail(event.target.value);
              }}
              placeholder="Enter your email"
              className="form-input-login"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(event) => {
                handleOnChangeLoginPassword(event.target.value);
              }}
              placeholder="Enter your password"
              className="form-input-login"
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            onClick={(event) => {
              handleOnSubmit(event);
            }}
          >
            Login
          </button>
        </form>
        {name?.length > 0 && <h2 className="login-message">Hello {name}</h2>}
      </div>
    </div>
    </>
  );
}
