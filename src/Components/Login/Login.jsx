import React, { useState, useEffect } from "react";
import { TextInput, PasswordInput, Checkbox, Anchor, Title, Text, Button } from "@mantine/core";
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
  const navigate = useNavigate();

  function handleOnSubmit(event) {
    event.preventDefault();
    const user = { email, password };
    Api.login(user).then((response) => {
      if (response.token) {
        localStorage.setItem("jwt", response.token);
        setToken(response.token);
      } else {
        // Handle login failure
      }
    }).then(() => {
      Api.user({ token: localStorage.getItem("jwt") }).then((response) => {
        setUserGlobal(response);
        if (response?.firstname && response?.lastname) {
          setName(`${response?.firstname} ${response?.lastname}`);
          localStorage.setItem("username", response.firstname);
          navigate("/makecourse");
        }
      });
    });
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
        <div className="flashcardPage-container">You are currently logged in</div>
      ) : (
        <>
          <div className="login-container">
            <div className="login-form-container">
              <img src={logo} alt="logo" id="logo" />
              <Title align="center"color="#ffffff"sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
                Welcome back!
              </Title>
              <Text color="#003455" size="sm" align="center" mt={5}>
                Do not have an account yet?{" "}
                <Anchor onClick={() => (window.location = "/register")} size="sm" color="#ffffff" component="button">
                  Create account
                </Anchor>
              </Text>
              <form className="login-form">
                <div className="form-group">
                  <TextInput
                  classNames={{ label: 'white-text' }}
                    label="Email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <PasswordInput
                   classNames={{ label: 'white-text' }}
                    label="Password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    inputStyle={{ color: '#fff' }}
                  
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <Checkbox    classNames={{ label: 'white-text' }} label="Remember me" />
                <Button type="submit" className="submit-button" onClick={handleOnSubmit}>
                  Login
                </Button>
              </form>
              {name?.length > 0 && (
                <Title align="center" className="login-message">
                  Hello {name}
                </Title>
              )}
            </div>
          </div>

          {/* <div className="right-container">
            <div className="check-container">
              <IconCheck color="#00a1e0" size={50} stroke={5} className="check-icon" />
              <p className="check-text-login">
                <b>Learn</b> – from an extensive collection of courses on various topics to enhance your knowledge.
              </p>
            </div>
            <div className="check-container">
              <IconCheck color="#00a1e0" size={50} stroke={5} className="check-icon" />
              <p className="check-text-login">
                <b>Quiz</b> – yourself with interactive quizzes to reinforce your understanding of the concepts.
              </p>
            </div>
            <div className="check-container">
              <IconCheck color="#00a1e0" size={50} stroke={5} className="check-icon" />
              <p className="check-text-login">
                <b>Conquer</b> – your learning journey and achieve your goals with BrainForce's personalized learning path.
              </p>
            </div>
          </div> */}
        </>
      )}
    </>
  );
}
