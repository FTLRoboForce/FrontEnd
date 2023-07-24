import React, { useEffect, useState } from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import ParticleBackground from "../../ParticleBackground/ParticleBackground";
import brainImage from "../../images/bf.png";
import einsteinImage from "../../images/einstein.png";

import "./Home.css";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: `calc(${theme.spacing.xl} * 8)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    zIndex: 1,
    width: rem(1200),
    marginLeft: rem(-200),
 
  },

  content: {
    width: rem(9999), // Set the default width to 80% of the screen width
    margin: `0 auto`, // Center the content horizontally
    background: `linear-gradient(to right, var(--lightgrey), var(--lightblue))`,
    padding: rem(80),
    borderRadius: rem(12),
    boxShadow: theme.shadows.sm,

    [theme.breakpoints.sm]: {
      maxWidth:rem(9999),
      margin: theme.spacing.md, // Adjust margin for smaller screens
      width: rem(9999), // Adjust the width for smaller screens
    },

    [theme.breakpoints.lg]: {
      width: rem(9999), // Increase the width for larger screens (e.g., 60%)
      maxWidth : rem(9999),
    },
  },

  title: {
    color: "#004D85",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(150),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.breakpoints.xs]: {
      fontSize: rem(88),
    },
  },

  animatedImage: {
    flex: "0 0 40%", // Reduce the size of the image for larger screens
    maxWidth: "90%", // Reduce the maximum width for larger screens
    animation: "$fadeInOut 1s linear infinite",
  },

  "@keyframes fadeInOut": {
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0 },
  },
}));



export function Home({ userGlobal }) {
  const { classes } = useStyles();
  const [isBrainImage, setIsBrainImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBrainImage((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ParticleBackground />

      <div>
        <Container className="home-container">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title color="#004D85" className={classes.title}>
                BrainForce!
              </Title>
              <Text color="dimmed" mt="md">
                Unlock your potential with BrainForce, the ultimate learning
                platform.
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Learn</b> – from an extensive collection of courses on
                  various topics to enhance your knowledge.
                </List.Item>
                <List.Item>
                  <b>Quiz</b> – yourself with interactive quizzes to reinforce
                  your understanding of the concepts.
                </List.Item>
                <List.Item>
                  <b>Conquer</b> – your learning journey and achieve your goals
                  with BrainForce's personalized learning path.
                </List.Item>
              </List>

              <Group mt={30}>
                <Button
                  radius="xl"
                  size="md"
                  className={classes.control}
                  onClick={() => (window.location = "/register")}
                >
                  Get started
                </Button>
              </Group>
            </div>
            <Image
              src={isBrainImage ? brainImage : einsteinImage}
              className={classes.animatedImage}
              alt="Brain"
            />
          </div>
        </Container>
      </div>
    </>
  );
}
