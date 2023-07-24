import React, { useState, useEffect } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Api from "../../utilities/api";
import ParticleBackground from "../../ParticleBackground/ParticleBackground";

import "./Login.css";

export function Login({ setToken, setUserGlobal, userGlobal }) {
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
          if (response?.firstname && response?.lastname) {
            setName(response?.firstname + " " + response?.lastname);
            localStorage.setItem("username", response.firstname);
          }
        });
      });
    // navigate("/activity");
  }

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      Api.user({ token: localStorage.getItem("jwt") }).then((response) => {
        setUserGlobal(response);
        // store users username in local storage

        setName(response.firstname + " " + response.lastname);
      });
    }
  }, []);

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
      <ParticleBackground />

      <div className="center-container">
        <div className="login-container">
          <Title
            align="center"
            color="#004D85"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900
            })}
          >
            Welcome back!
          </Title>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Anchor
              onClick={() => (window.location = "/register")}
              size="sm"
              component="button"
            >
              Create account
            </Anchor>
          </Text>
          <div className="login-form-container">
            <form className="login-form">
              <div className="form-group">
                <TextInput
                  label="Email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(event) =>
                    handleOnChangeLoginEmail(event.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <PasswordInput
                  label="Password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(event) =>
                    handleOnChangeLoginPassword(event.target.value)
                  }
                />
              </div>
              <Checkbox label="Remember me" />
              <button
                type="submit"
                className="submit-button"
                onClick={(event) => handleOnSubmit(event)}
              >
                Login
              </button>
            </form>
            {name?.length > 0 && (
              <h2 className="login-message">Hello {name}</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
