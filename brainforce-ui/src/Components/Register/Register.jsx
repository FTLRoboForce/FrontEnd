import React from "react";
import "./Register.css";
import { useState } from "react";
import Api from "../../utilities/api";

export function Register() {
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [firstname, setfirstname] = useState("");
  let [lastname, setlastname] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");
  let [user, setUser] = useState({
    email: email,
    username: username,
    firstname: firstname,
    lastname: lastname,
    password: password,
    points: 0
  });

  function handleOnSubmit(event) {
    if (verifyPassword(password, confirm)) {
      Api.register(user);
    }
    // window.location.href = "/excerciseDashbo";
  }

  function handleValueChange(value, setValue) {
    setValue(value);
    setUser({
      email: email,
      username: username,
      firstname: firstname,
      lastname: lastname,
      password: password,
      points: 0
    });
  }

  function verifyPassword(password, confirm) {
    if (password === confirm) {
      return true;
    }
    return false;
  }

  return (
    <div className="registration-page-container">
      <div className="registration-container">
        <div className="registration-heading">
          <section>Register</section>
        </div>
        <div className="registration-form">
          <form>
            <div className="registration-form-top">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter your first name"
                  className="form-input"
                  onChange={(event) => {
                    handleValueChange(event.target.value, setfirstname);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your last name"
                  className="form-input"
                  onChange={(event) => {
                    handleValueChange(event.target.value, setlastname);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter a username"
                  className="form-input"
                  onChange={(event) => {
                    handleValueChange(event.target.value, setUsername);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-input"
                  onChange={(event) => {
                    handleValueChange(event.target.value, setEmail);
                  }}
                />
              </div>
            </div>
            <div className="registration-form-bottom">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="form-input"
                  onChange={(event) => {
                    handleValueChange(event.target.value, setPassword);
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="form-input"
                  onChange={(event) => {
                    handleValueChange(event.target.value, setConfirm);
                  }}
                />
              </div>
            </div>

            <div className="registration-form-button">
              <button
                type="submit"
                onClick={(event) => {
                  handleOnSubmit(event);
                }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
