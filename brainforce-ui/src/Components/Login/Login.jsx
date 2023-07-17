import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../utilities/api";

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
    <div className="login-container">
      <h1>Login</h1>
      <form className="form">
        <div className="form-group">
          <label className="email-login" htmlFor="email">
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
          <label className="password-login" htmlFor="password">
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
      {name?.length > 0 ? <h1>Hello {name}</h1> : null}
    </div>
  );
}
