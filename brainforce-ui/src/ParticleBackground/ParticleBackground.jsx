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
            value: "transparent",
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
            color: "#00A1E0",
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
          },
          shape: {
            type: "images",
            image:[
              { 
                src: brain,
                width: 100,
                height: 100
              }
            ]
          },
          size: {
            value: { min: 10, max: 15 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticleBackground;
