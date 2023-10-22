import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
      <div className="section__title">
          <h2>Professional Experience</h2>
          <p>Explore My Professional Experience and Expertise in Detail.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                B.Tech in CSE
              </h3>
              <p className="text-sm text-neutral font-semibold">2020 - 2024</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I am currently studying in B.Tech Compueter Science and Engineering (Final Year) at <b>BSA College of Engineering and Technology Mathura</b>, Uttar Pradesh, India.
            </p>
          </div>

          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Software Development Intern
              </h3>
              <p className="text-sm text-neutral font-semibold">Feb,2023 - May,2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I successfully completed a Software Development Internship at <b>Gao Tek Inc</b>., an American-based company.
            </p>
          </div>
          
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">Web Development Intern</h3>
              <p className="text-sm text-neutral font-semibold">Aug,2023 - Sept,2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            I successfully completed a Web Development Internship at <b>Codsoft</b>, gaining hands-on experience with React.js and Node.js.
            </p>
          </div>

          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
              Web Development Intern
              </h3>
              <p className="text-sm text-neutral font-semibold">Aug,2023 - Sept,2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            I successfully completed a Web Development Internship at <b>Dabotics</b>, gaining hands-on experience with HTML, CSS and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
