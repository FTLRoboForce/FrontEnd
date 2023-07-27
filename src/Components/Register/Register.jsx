import React, { useState } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Image
} from "@mantine/core";
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

  function handleOnSubmit(event) {
    event.preventDefault();

    if (
      verifyPassword(user.password, user.confirm) &&
      verifyEmail(user.email)
    ) {
      Api.register(user);
      setUser(initialUserState);
      setErrortext(""); // Clear any previous error messages
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
          <div className="left-right-container">
            <div className="left-side">
              <h3>
                {" "}
                Unlock your potential with{" "}
                <span id="brainforce">BrainForce</span> the ultimate learning
                platform
              </h3>
              <img src={einsteinImage} width={700} />
            </div>

            <div className="right-container">
              <div className="center-container">
                <div className="registration-page-container">
                  <Paper radius="md" p="xl" withBorder>
                    <Text
                      align="center"
                      color="#004D85"
                      sx={(theme) => ({
                        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                        fontWeight: 900,
                        fontSize: 26
                      })}
                    >
                      Welcome to Brainforce!
                    </Text>
                    <Text size="lg" weight={500}>
                      Register with
                    </Text>

                    <Group grow mb="md" mt="md">
                      <button id="google-btn">
                        {" "}
                        <Image src={google} width={20} />
                      </button>
                    </Group>

                    <Divider
                      label="Or continue with email"
                      labelPosition="center"
                      my="lg"
                    />

                    <form onSubmit={handleOnSubmit}>
                      <Stack>
                        <TextInput
                          required
                          label="First Name"
                          placeholder="Enter your first name"
                          value={user.firstname}
                          onChange={handleValueChange}
                          name="firstname"
                          labelProps={{
                            style: {
                              color: "#004D85",
                              fontSize: 16
                            }
                          }}
                        />

                        <TextInput
                          required
                          label="Last Name"
                          placeholder="Enter your last name"
                          value={user.lastname}
                          onChange={handleValueChange}
                          name="lastname"
                          labelProps={{
                            style: {
                              color: "#004D85",
                              fontSize: 16
                            }
                          }}
                        />

                        <TextInput
                          required
                          label="Email"
                          placeholder="Enter your email"
                          value={user.email}
                          onChange={handleValueChange}
                          name="email"
                          labelProps={{
                            style: {
                              color: "#004D85",
                              fontSize: 16
                            }
                          }}
                          error={
                            errortext &&
                            errortext.includes("Email") &&
                            errortext
                          }
                        />

                        <TextInput
                          required
                          label="Username"
                          placeholder="Enter your username"
                          value={user.username}
                          onChange={handleValueChange}
                          name="username"
                          labelProps={{
                            style: {
                              color: "#004D85",
                              fontSize: 16
                            }
                          }}
                          error={
                            errortext &&
                            errortext.includes("username") &&
                            errortext
                          }
                        />

                        <PasswordInput
                          required
                          label="Password"
                          placeholder="Enter your password"
                          value={user.password}
                          onChange={handleValueChange}
                          name="password"
                          labelProps={{
                            style: {
                              color: "#004D85",
                              fontSize: 16
                            }
                          }}
                        />

                        <PasswordInput
                          required
                          label="Confirm Password"
                          placeholder="Confirm your password"
                          value={user.confirm}
                          onChange={handleValueChange}
                          name="confirm"
                          labelProps={{
                            style: {
                              color: "#004D85",
                              fontSize: 16
                            }
                          }}
                          error={
                            errortext &&
                            errortext.includes("Passwords") &&
                            errortext
                          }
                        />

                        <Checkbox
                          required
                          label="I accept terms and conditions"
                          // onChange={(event) => setUser((prevUser) => ({ ...prevUser, terms: event.currentTarget.checked }))}
                        />

                        <Button
                          type="submit"
                          radius="xl"
                          className="submit-button"
                        >
                          Register
                        </Button>

                        {errortext &&
                          !errortext.includes("Passwords") &&
                          !errortext.includes("Email") && (
                            <p className="error-text">{errortext}</p>
                          )}
                      </Stack>
                    </form>
                  </Paper>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
