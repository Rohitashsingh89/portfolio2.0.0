import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer, FiSliders, FiRewind, FiRepeat } from "react-icons/fi";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Front End Development",
      icon: <DiAtom />,
      description:
        "As a Front-end developer, I excel in crafting applications using React and its libraries, ensuring seamless and user-friendly experiences.",
    },
    {
      id: 2,
      title: "MERN Development",
      icon: <FiServer />,
      description:
        "I have extensive expertise in Node.js, Express.js, and MongoDB/Mongoose, enabling me to develop robust MERN full-stack applications proficiently.",
    },
    {
      id: 3,
      title: "Web Design",
      icon: <BiPalette />,
      description:
        "I offer fully responsive static website designs using HTML, CSS, and Bootstrap, ensuring seamless user experiences across all devices.",
    },
    {
      id: 4,
      title: "Wordpress Development",
      icon: <FiRepeat />,
      description:
        "I specialize in WordPress development, creating customized and user-friendly websites that meet clients' unique needs, enhancing their online presence effectively.",
    },
    {
      id: 5,
      title: "Logo Design",
      icon: <FiRewind />,
      description:
      "Professional logo design services. Unique, memorable logos tailored to your brand identity, leaving a lasting impression on your audience.",
    },
    {
      id: 6,
      title: "Django Development",
      icon: <FiSliders />,
      description:
        "Efficient Django Development. Tailored solutions for robust, scalable, and high-performance web applications, designed to optimize your digital presence.",
    },
  ];
  return (
    <div className="py-20 parent"
    // style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <div className="section__title">
          <h2>Our features</h2>
          <p>Launch Your Business with My Exceptional Services.</p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-accent shadow-lg"
              : "bg-[#313131] shadow-md"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
