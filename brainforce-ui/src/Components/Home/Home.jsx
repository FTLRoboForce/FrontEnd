import React, { useEffect, useState } from 'react';
import { createStyles, Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import ParticleBackground from '../../ParticleBackground/ParticleBackground';
import brainImage from '../../images/bf.png';
import einsteinImage from '../../images/einstein.png';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: `calc(${theme.spacing.xl} * 5)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 0)`,
    background: 'white', // Linear gradient background
    padding: rem(80),
    borderRadius: rem(12),
    boxShadow: theme.shadows.sm,

    [theme.breakpoints.sm]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark : theme.colors.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(90),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.breakpoints.xs]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.breakpoints.xs]: {
      flex: 1,
    },
  },

  animatedImage: {
    flex: '0 0 60%',
    maxWidth: '60%',
    animation: '$fadeInOut 2s linear infinite',
  },

  '@keyframes fadeInOut': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
}));

export function Home() {
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
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title
              color='#004D85'
               className={classes.title}>
                BrainForce!
              </Title>
              <Text color="dimmed" mt="md">
                Unlock your potential with BrainForce, the ultimate learning platform.
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
                  <b>Learn</b> – from an extensive collection of courses on various topics to enhance
                  your knowledge.
                </List.Item>
                <List.Item>
                  <b>Quiz</b> – yourself with interactive quizzes to reinforce your understanding of
                  the concepts.
                </List.Item>
                <List.Item>
                  <b>Conquer</b> – your learning journey and achieve your goals with BrainForce's
                  personalized learning path.
                </List.Item>
              </List>

              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control} onClick={() => window.location="/register"}>
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
