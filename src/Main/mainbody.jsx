// import BaseLayout from "@/layout/base-layout";
import React from "react";

import { loadFull} from "tsparticles";
import { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { fadeIn } from "../variant";
import { TypeAnimation } from "react-type-animation";



const Mainbody = () => {


  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div
      id="home"
      className="h-[100vh] w-full items-center pl-[160px] gap-[50px] overflow-hidden flex flex-row bg-black relative"
    >
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col w-[600px] "
      >
        <h1 className="text-white text-6xl">
          Hi! I am Ashish Khatri.
          <br />
          <TypeAnimation
            sequence={["Student", 2000, "FrontEnd", 2000, "Coder", 2000]}
            speed={50}
            className="text-accent"
            repeat={Infinity}
          />
        </h1>
        <p className="text-white text-sm w-[400px]">
          {" "}
          As a skilled Frontend Developer, I have a strong background in HTML,
          CSS, JavaScript, and React. My expertise allows me to create visually
          appealing and user-friendly websites that deliver an exceptional
          experience to the end-user. This is just a website i have created
          using my knowledge of react.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="w-[350px]  h-[400px]"
      >
        <div ><img className="w-full rounded-xl  h-[400px]" src="mainimg.jpg" /></div>
      </motion.div>

      
      
        <div className="absolute w-full h-[100vh] inset-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {},
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  // enable: true,
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
                  // quantity: 4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },

              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {},
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      
        </div>
    </div>
  );
};

export default Mainbody;
