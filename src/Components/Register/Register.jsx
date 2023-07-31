import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Text,
  Button,
  Divider
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "../../ParticleBackground/ParticleBackground";
import Api from "../../utilities/api";
import google from "../../images/google.svg";
import einsteinImage from "../../images/einstein.png";

import "./Register.css";

const initialUserState = {
  email: "",
  firstname: "",
  username: "",
  lastname: "",
  password: "",
  confirm: "",
  points: 0,
  totalquiz: 0
};

export function Register({ userGlobal }) {
  const [user, setUser] = useState(initialUserState);
  const [errortext, setErrortext] = useState("");
  const navigate = useNavigate();

  function handleOnSubmit(event) {
    event.preventDefault();

    try {
      if (
        verifyPassword(user.password, user.confirm) &&
        verifyEmail(user.email)
      ) {
        Api.register(user);
        setUser(initialUserState);
        setErrortext(""); // Clear any previous error messages
      }
    } catch (err) {
      setErrortext(err.message);
    }
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
      setErrortext("Passwords must be at least 8 characters long");
      return false;
    }

    return true;
  }

  function verifyEmail(email) {
    if (email.length < 5) {
      setErrortext("Email must be at least 5 characters long");
      return false;
    }
    if (!email.includes("@")) {
      setErrortext("Email must be a valid email address");
      return false;
    }

    return true;
  }

  return (
    <>
      {userGlobal ? (
        <div className="flashcardPage-container">Please Log Out</div>
      ) : (
        <>
          <ParticleBackground />
          <div className="login-container">
            <div className="login-form-container">
              <div className="registration-page-container">
                {/* <img src={einsteinImage} alt="Einstein" className="registration-logo" /> */}
                <Text
                  align="center"
                  color="ffffff"
                  sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    fontWeight: 900,
                    fontSize: 26
                  })}
                >
                  Welcome to Brainforce!
                </Text>
                <Text size="lg" weight={500} id="register-margin">
                  Register with
                </Text>

                <Button
                  className="google-btn"
                  leftIcon={<img src={google} alt="Google Icon" width={20} />}
                />
                <Divider
                  label="Or continue with email"
                  labelPosition="center"
                  my="lg"
                />

                <form onSubmit={handleOnSubmit}>
                  <TextInput
                    classNames={{ label: "white-text" }}
                    required
                    label="First Name"
                    placeholder="Enter your first name"
                    value={user.firstname}
                    onChange={handleValueChange}
                    name="firstname"
                    labelProps={{
                      style: {
                        color: "#ffffff",
                        fontSize: 16
                      }
                    }}
                  />

                  <TextInput
                    classNames={{ label: "white-text" }}
                    required
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={user.lastname}
                    onChange={handleValueChange}
                    name="lastname"
                    labelProps={{
                      style: {
                        color: "#ffffff",
                        fontSize: 16
                      }
                    }}
                  />

                  <TextInput
                    classNames={{ label: "white-text" }}
                    required
                    label="Email"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleValueChange}
                    name="email"
                    labelProps={{
                      style: {
                        color: "#ffffff",
                        fontSize: 16
                      }
                    }}
                    error={
                      errortext && errortext.includes("Email") && errortext
                    }
                    errorProps={{
                      style: {
                        color: "rgb(0, 52, 85)",
                        fontSize: 14
                      }
                    }}
                  />

                  <TextInput
                    classNames={{ label: "white-text" }}
                    required
                    label="Username"
                    placeholder="Enter your username"
                    value={user.username}
                    onChange={handleValueChange}
                    name="username"
                    labelProps={{
                      style: {
                        color: "#ffffff",
                        fontSize: 16
                      }
                    }}
                    error={
                      errortext && errortext.includes("username") && errortext
                    }
                    errorProps={{
                      style: {
                        color: "rgb(0, 52, 85)",
                        fontSize: 14
                      }
                    }}
                  />

                  <PasswordInput
                    classNames={{ label: "white-text" }}
                    required
                    label="Password"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleValueChange}
                    name="password"
                    labelProps={{
                      style: {
                        color: "#ffffff",
                        fontSize: 16
                      }
                    }}
                  />

                  <PasswordInput
                    classNames={{ label: "white-text" }}
                    required
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    value={user.confirm}
                    onChange={handleValueChange}
                    name="confirm"
                    labelProps={{
                      style: {
                        color: "#ffffff",
                        fontSize: 16
                      }
                    }}
                    error={
                      errortext && errortext.includes("Passwords") && errortext
                    }
                    errorProps={{
                      style: {
                        color: "rgb(0, 52, 85)",
                        fontSize: 14
                      }
                    }}
                  />

                  <Checkbox
                    classNames={{
                      label: "white-text-reg",
                      input: "white-text-reg"
                    }}
                    required
                    label="I accept terms and conditions"
                  />
                  <Button type="submit" radius="xl" className="submit-button">
                    Register
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
