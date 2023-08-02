import React, { useEffect, useCallback } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import brain from "../images/bf.png";  
import "./ParticleBackground.css";

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);



  const particlesLoaded = useCallback(async (container) => {
  }, []);

  
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#b6ddfd", // Color background value
          },
          image: {
            src: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Einstien.png", // Background image URL
            width: "100%", // Width of the background image
            height: "100%", // Height of the background image
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#004D85",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 1,
            width: 1,
          },
          move: {
            direction: "none",
            radius: 1010,
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
            random: false,
          },
          shape: {
            type: "edge",
          stroke: { color: "#b6ddfd", width: 1 },
          polygon: { nb_sides: 5 },
          image: { src: brain, width: 100, height: 100 },
          
          },
          size: {
            value: { min: 5, max: 4 },
            random: true,
            animation: {
              enable: false,
              speed: 40,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticleBackground;
