import React, { useState, useEffect } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Title,
  Text,
  Button
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Api from "../../utilities/api";
import ParticleBackground from "../../ParticleBackground/ParticleBackground";
import { IconCheck } from "@tabler/icons-react";
import logo from "../../images/bf.png";
import "./Login.css";

export function Login({ setToken, setUserGlobal, userGlobal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleOnSubmit(event) {
    event.preventDefault();
    const user = { email, password };
    try {
      Api.login(user)
        .then((response) => {
          if (response.token) {
            localStorage.setItem("jwt", response.token);
            setToken(response.token);
            setError(""); // Reset the error state if login is successful
          } else {
            setError("Invalid email or password"); // Set the error message for login failure
          }
        })
        .then(() => {
          Api.user({ token: localStorage.getItem("jwt") }).then((response) => {
            setUserGlobal(response);
            if (response?.firstname && response?.lastname) {
              setName(`${response?.firstname} ${response?.lastname}`);
              localStorage.setItem("username", response.firstname);
              navigate("/past");
            }
          });
        });
    } catch {
      setError("An error occurred. Please try again later."); // Set a generic error message for any other error
    }
  }

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      Api.user({ token: localStorage.getItem("jwt") }).then((response) => {
        setUserGlobal(response);
        setName(`${response.firstname} ${response.lastname}`);
      });
    }
  }, []);

  return (
    <>
      <ParticleBackground />
      {userGlobal ? (
        <div className="flashcardPage-container">
          You are currently logged in
        </div>
      ) : (
        <>
          <div className="login-container">
            <div className="login-form-container">
              <img src={logo} alt="logo" id="logo" />
              <Title
                align="center"
                color="#ffffff"
                sx={(theme) => ({
                  fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                  fontWeight: 900
                })}
              >
                Welcome back!
              </Title>
              <Text color="#003455" size="sm" align="center" mt={5}>
                Do not have an account yet?{" "}
                <Anchor
                  onClick={() => (window.location = "/register")}
                  size="sm"
                  color="#ffffff"
                  component="button"
                >
                  Create account
                </Anchor>
              </Text>
              <form className="login-form">
                <div className="form-group">
                  <TextInput
                    classNames={{ label: "white-text" }}
                    label="Email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <PasswordInput
                    classNames={{ label: "white-text" }}
                    label="Password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    inputStyle={{ color: "#fff" }}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <Checkbox
                  classNames={{ label: "white-text" }}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  className="submit-button"
                  onClick={handleOnSubmit}
                >
                  Login
                </Button>
              </form>
              {name?.length > 0 && (
                <Title align="center" className="login-message">
                  Hello {name}
                </Title>
              )}
              {error?.length > 0 && (
                <Title align="center" className="login-message">
                  {error}
                </Title>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
