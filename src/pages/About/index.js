import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { MySkill, Education } from "../../components";
import { FaCloudDownloadAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <div className="section__title">
          <h2>About Me</h2>
          <p>Know More about me.</p>
        </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="https://user-images.githubusercontent.com/93479842/277568593-7da5432c-d34e-4237-94d9-0db0f21e8537.png"
              alt="Rohitash Singh"
              className="p-12 w-70 h-70 transform translate-y-[-12%] object-cover" style={{borderRadius: "150px"}}
              title="Rohitash Singh"
            />

          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Rohitash Singh</h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "A Mern-stack Developer",
                  4000,
                  "A Django Developer",
                  4000,
                  "A Full-stack Developer",
                  4000,
                  "A Front-end Developer",
                  4000,
                  "A Wordpress Developer",
                  4000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            As a skilled MERN stack developer, I am dedicated to crafting top-notch web applications tailored to my clients' requirements. With extensive experience in full-stack web development, I specialize in utilizing React.js, MongoDB, Express.js, Node.js and Django to build scalable and robust web applications.
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            Dedicated to solving complex problems and innovating solutions, I stay updated with industry technologies and trends for continuous growth.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Rohitash Singh
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+91 892 335 4700
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                brohitashsingh89@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>Noida, Uttar Pradesh, India
              </h2>
              <a
                href="https://drive.google.com/file/d/171_m4HtSozlvzeloJ47VxWDUI3PdRlrq/view?usp=share_link"
                target="blank"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaCloudDownloadAlt />
                    </span>
                  </button>
                </div>

              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
