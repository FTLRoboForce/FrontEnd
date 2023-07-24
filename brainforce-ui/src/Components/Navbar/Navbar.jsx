import React, { useState } from "react";
import logo from "../../images/bf.png";
import {
  createStyles,
  Group,
  Text,
  rem,
  Image,
  UnstyledButton,
  Avatar,
  Menu
} from "@mantine/core";

import {
  IconLogout,
  IconHeart,
  IconChevronDown,
} from '@tabler/icons-react';

import { useDisclosure } from '@mantine/hooks';
import { cx } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.xs,
    background: `linear-gradient(to right, ${theme.colors.blue[2]}, ${theme.colors.blue[9]})`,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  logoImage: {
    width: rem(40),
    height: rem(40),
    marginRight: rem(10),
  },
  logoText: {
    fontWeight: 900,
    color: "white",
    fontSize: rem(22),
  },
  navLinksContainer: {
    display: "flex",
    alignItems: "center",
  },

  navLink: {
    marginLeft: rem(20),
    color: theme.white,
    textDecoration: "none",
    fontWeight: 500,
    fontSize: rem(16),
    cursor: "pointer",
    "&:hover": {
      borderBottom: `2px solid ${theme.white}`,
    },
  },
  userActivityContainer: {
    display: "flex",
    alignItems: "center",
  },
  userActivityButton: {
    marginLeft: rem(20),
    color: theme.white,
    backgroundColor: theme.colors.blue[7],
    borderRadius: theme.radius.md,
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    border: "none",
    fontWeight: 500,
    fontSize: rem(16),
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.blue[6],
    },
  },
  user: {
    cursor: "pointer",
    color: theme.colors.blue[6],
    fontWeight: 500,
    fontSize: rem(14),
    lineHeight: rem(20),
    display: "flex",
    alignItems: "center",
    background: "transparent",
    border: "none",
    textDecoration: "none",
  },
  userActive: {
    color: theme.colors.blue[9],
  },
}));

export function Navbar({ token, setToken, userGlobal }) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  //get username in localstorage
  const username = localStorage.getItem("username");

  function logOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username"); // Remove the stored username when the user logs out
    setToken(null);
    setUserMenuOpened(false);
    window.location = "/";
  }

  return (
    <header className={classes.navContainer}>
      <div className={classes.logoContainer}>
        <div className={classes.logoImage}>
          <Image
            src={logo}
            alt="BrainForce Logo"
            onClick={() => (window.location = "/")}
          />
        </div>
        <Text className={classes.logoText}>BrainForce</Text>
      </div>
      {token ? (
        <div className={classes.navLinksContainer}>
            <a href="/makecourse" className={classes.navLink}>
            Make Course
          </a>
          <a href="/flashcard" className={classes.navLink}>
            Previous Flashcard
          </a>
          <a href="/quiz" className={classes.navLink}>
            Previous Quizzes
          </a>
          <a href="/leaderboard" className={classes.navLink}>
            Leaderboard
          </a>
         
          <Menu >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
 <Group
                  spacing={7}
                  style={{
                    background: `linear-gradient(to left, var(--lightgrey), var(--lightblue))`,
                    borderRadius: rem(5),
                    boxShadow: `0px 2px 6px rgba(0, 0, 0, 0.15)`,
                    marginBottom: rem(10),
                    marginLeft: rem(5),
                   
                  }}
                >
                  <Avatar src={logo} alt={username} radius="xl" size={20} />
                  <Text color={"#004D85"} weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {username}
                  </Text>
                  <IconChevronDown size={rem(12)} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                icon={<IconHeart size="0.9rem" color={theme.colors.red[6]} stroke={1.5} />}
              >
                Points
              </Menu.Item>
             
              <Menu.Divider />
             
              <Menu.Item onClick= {logOut}icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>

             

             
            </Menu.Dropdown>
          </Menu>
        </div>
      ) : (
        <div className={classes.navLinksContainer}>
          
          <div className={classes.userActivityContainer}>
          <button
              onClick={() => (window.location = "/creators")}
              className={classes.userActivityButton}
            >
              Creators
            </button>
            <button
              onClick={() => (window.location = "/login")}
              className={classes.userActivityButton}
            >
              Login
            </button>
            <button
              onClick={() => (window.location = "/register")}
              className={classes.userActivityButton}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
