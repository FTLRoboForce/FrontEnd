import React, { useEffect, useCallback } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";


 function ParticleBackground(){
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
    }, []);
    return(
      
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#00A1E0",
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
                        color: "#D9D9D9",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 2,
                    },
                    move: {
                        direction: "none",
                        radius: 50,
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
                        type: "polygon",
                    },
                    size: {
                        value: { min: 4, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
        
}

export default ParticleBackground;;
