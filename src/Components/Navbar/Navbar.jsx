import React, { useEffect, useState } from "react";
import logo from "../../images/bf.png";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { Image, UnstyledButton, Avatar, Menu } from "@mantine/core";
import { IconLogout, IconHeart, IconChevronDown } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export function Navbar({ token, setToken, userGlobal, setUserGlobal }) {
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const username = localStorage.getItem("username");

  function logOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    setToken(null);
    setUserMenuOpened(false);
    window.location = "/";
  }
console.log(userGlobal)

  return (
    <header className="navContainer">
      <div onClick={() => (window.location = "/")} className="logoContainer">
        <div className="logoImage">
          <Image src={logo} alt="BrainForce Logo" />
        </div>
        <div className="logoText">BrainForce</div>
      </div>
      {token ? (
        <div className="navLinksContainer">
          <button
            onClick={() => (window.location = "/creators")}
            className="userActivityButton"
          >
            Creators
          </button>

          {/* You can add other navigation links here if needed */}

          <Menu>
            <Menu.Target>
              <UnstyledButton className="userActivityButton">
                <div className="userActivityContainer">
                  <Avatar src={userGlobal?.photo} alt={username} radius="xl" size={20} />
                  <div className="menu-item">{username}</div>
                  <IconChevronDown size={16} />
                </div>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconHeart size="0.9rem" />}>Points</Menu.Item>

              <Menu.Divider />

              <Menu.Item onClick={logOut} icon={<IconLogout size="0.9rem" />}>
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      ) : (
        <div className="userActivityContainer">
          <button
            onClick={() => (window.location = "/creators")}
            className="userActivityButton"
          >
            Creators
          </button>
          <button
            onClick={() => (window.location = "/login")}
            className="userActivityButton"
          >
            Login
          </button>
          <button
            onClick={() => (window.location = "/register")}
            className="userActivityButton"
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}

// ... (rest of the styles)
