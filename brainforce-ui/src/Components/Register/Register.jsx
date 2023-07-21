import React, { useState } from "react";
import "./Register.css";
import Api from "../../utilities/api";
import Particle from "../../ParticleBackground/ParticleBackground";

const initialUserState = {
  email: "",
  username: "",
  firstname: "",
  lastname: "",
  password: "",
  confirm: "",
  points: 0
};

export function Register() {
  const [user, setUser] = useState(initialUserState);
  const [errortext, setErrortext] = useState("");

  function handleOnSubmit(event) {
    event.preventDefault();
    if (verifyPassword(user.password, user.confirm)) {
      Api.register(user);
      setUser(initialUserState);
    }
    // window.location.href = "/excerciseDashbo";
  }

  function handleValueChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  }

  function verifyPassword(password, confirm) {
    if (password !== confirm) {
      setErrortext("Passwords do not match");
      return false;
    }
    if (password.length < 8) {
      setErrortext("Password must be at least 8 characters long");
      return false;
    }

    return true;
  }

  return (
    <>
      <Particle />
      <div className="registration-page-container">
        <div className="registration-container">
          <h2 className="registration-heading">Register</h2>
          <form className="registration-form" onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="firstname">
                First Name:
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter your first name"
                className="form-input"
                value={user.firstname}
                onChange={handleValueChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="lastname">
                Last Name:
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter your last name"
                className="form-input"
                value={user.lastname}
                onChange={handleValueChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter a username"
                className="form-input"
                value={user.username}
                onChange={handleValueChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form-input"
                value={user.email}
                onChange={handleValueChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="form-input"
                value={user.password}
                onChange={handleValueChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="confirm">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm"
                name="confirm"
                placeholder="Confirm your password"
                className="form-input"
                value={user.confirm}
                onChange={handleValueChange}
              />
            </div>
            <div className="registration-form-button">
              <button type="submit">Register</button>
              {errortext && <p className="error-text">{errortext}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
