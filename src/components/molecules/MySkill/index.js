import React from "react";
import Lottie from "react-lottie";
import {
  FaJava,
  FaPython,
  FaCss3Alt,
  FaNodeJs,
  FaAngular,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiAdobephotoshop,
  SiFirebase,
  SiHtml5,
  SiDjango,
  SiFlask
} from "react-icons/si";
import man from "../../../assets/man.json";

const MySkill = () => {
  const languages = [
    { title: "JAVA", icon: <FaJava className="text-orange-600" /> },
    { title: "PYTHON", icon: <FaPython className="text-blue-400" /> },
    {
      title: "JavaScript", icon: <SiJavascript className="text-yellow-500 rounded" />,
    },
  ];
  const frameworks = [
    { title: "HTML", icon: <SiHtml5 className="text-cyan-400" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-neutral" /> },
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Angular", icon: <FaAngular className="text-indigo-600" /> },
  ];
  const backend = [
    { title: "Node.js", icon: <FaNodeJs className="text-cyan-400" /> },
    { title: "Django", icon: <SiDjango className="text-indigo-600" /> },
    { title: "Flask", icon: <SiFlask className="text-cyan-400" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  ];
  const tools = [
    { title: "POSTMAN", icon: <SiPostman className="text-green-500" /> },
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    {
      title: "Photoshop", icon: <SiAdobephotoshop className="text-cyan-800" />,
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="section__title">
          <h2>My Skill</h2>
          <p>Explore My Most Recent Skills and Expertise.</p>
        </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">

        <div>
          <h2 className="text-cyan-500 text-xl font-semibold">Prog. Languages:</h2>
          <div className="flex flex-wrap mb-4">
            {languages?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            front-end Development:
          </h2>
          <div className="flex flex-wrap mb-4">
            {frameworks?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            Backend Development:
          </h2>
          <div className="flex flex-wrap mb-4">
            {backend?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            Tools & Technologies:
          </h2>
          <div className="flex flex-wrap mb-4">
            {tools?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={360} />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
