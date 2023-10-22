import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {
  RiContactsBook2Fill,
  RiFolderInfoFill,
} from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { MdWork } from "react-icons/md";

const Footer = () => {
  const year = new Date();
  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "About", link: "/about", icon: <RiFolderInfoFill /> },
    { title: "Project", link: "/project", icon: <MdWork /> },
    { title: "Contact", link: "/contact", icon: <RiContactsBook2Fill /> },
    { title: "Blog", link: "/blog", icon: <ImBlog /> },
  ];
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#3e21f9",
    };
  };

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <div className="flex items-center mb-6"> <span className="text-white font-ubuntu font-bold">RS</span>
          <ul className="flex flex-wrap items-center ">
            {navLinks.map((navItem) => (
              <li className="mx-4 py-1" key={navItem.title}>
                <NavLink
                  to={navItem.link}
                  style={activeLink}
                  className="text-white hover:text-primary duration-300"
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}
          </ul>

          </div>
          <div className="flex items-center mb-6">
              <a
                  className="inline-block mx-2 shadow-lg"
                  href="https://twitter.com/rohitashsingh89"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <FaTwitter className="text-2xl text-blue-600" />
              </a>
              <a
                  className="inline-block mx-2"
                  href="https://linkedin.com/in/rohitashsingh89"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <FaLinkedin className="text-2xl text-blue-400" />
              </a>
              <a
                  className="inline-block mx-2"
                  href="https://www.github.com/rohitashsingh89"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <FaGithub className="text-2xl text-black" />
              </a>
              <a
                  className="inline-block mx-2 shadow-primary cursor-pointer duration-300"
                  href="https://www.instagram.com/rohitashthakur89/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <FaInstagram className="text-2xl text-pink-500" />
              </a>
          </div>
      </div>


        {/* <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://www.fiverr.com/berthutapea"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiverr
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://www.upwork.com/freelancers/~0171c0d54d5dea86ec"
            target="_blank"
            rel="noopener noreferrer"
          >
            UpWork
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="http://freelancer.com/u/berthutapea"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freelancer
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://themeforest.net/user/berthutapea"
            target="_blank"
            rel="noopener noreferrer"
          >
            ThemeForest
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://remotehub.com/gilbert.hutapea"
            target="_blank"
            rel="noopener noreferrer"
          >
            RemoteHub
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://dribbble.com/berthutapea"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://drive.google.com/file/d/19rnbukAhf9oPhadMhsvI3xnWF6FIYeMT/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div> */}

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://linkedin.com/in/rohitashsingh89"
              className="text-primary hover:underline"
              target="blank"
            >
              Rohitash Singh
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
