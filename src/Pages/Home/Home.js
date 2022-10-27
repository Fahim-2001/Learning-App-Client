import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const handleToCourses = () => {
    navigate("/courses");
  };
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://png.pngtree.com/illustrations/20190322/ourmid/pngtree-2-5d-illustration-2-5d-technological-illustration-technology-life-png-image_35770.jpg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Welcome
            <span className="dark:text-violet-400"> To</span>
            <br /> 71 Tech Hub
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            We have the best skill based
            <br className="hidden md:inline lg:hidden" />
            courses for you!
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/courses"
              rel="noopener noreferrer"
              onClick={handleToCourses}
              className="px-8 py-3 text-lg text-white font-semibold border rounded bg-gray-800"
            >
              See Our Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
